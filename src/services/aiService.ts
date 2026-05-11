/**
 * 발산공업 AI 분석 서비스
 * Cloudflare Tunnel을 통해 백엔드 서버와 통신합니다.
 */

const BASE_URL = process.env.NEXT_PUBLIC_AI_BACKEND_URL || "https://blah-indicating-letting-hawaii.trycloudflare.com";

export interface AnalysisResult {
  total: number;
  soy: number;
  mung: number;
  black: number;
  red: number;
  defects: number;
  foreign: number;
  foreignDetails: string;
  defectRate: string;
  qualityScore: string;
  reasoning: string;
  fileName?: string;
}

/**
 * 이미지를 업로드하여 콩 품질을 분석합니다.
 */
export const analyzeBeanQuality = async (imageFile: File): Promise<AnalysisResult> => {
  console.log("Starting analysis via Balsan Cloudflare Backend for:", imageFile.name);

  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const response = await fetch(`${BASE_URL}/analyze_upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      let detailedError = `서버 응답 오류: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData.error_code) {
          detailedError = `[${errorData.error_code}] ${errorData.reasoning || errorData.error}`;
        }
      } catch (e) {
        // JSON 파싱 실패
      }
      throw new Error(detailedError);
    }

    const result = await response.json();
    console.log("Balsan-AI Engine Response Received.");

    const total = result.total_count || 0;
    const analysis = result.analysis_result || {};
    const counts = analysis.counts || {};
    const ratios = analysis.ratios || {};
    
    return {
      total: total, 
      soy: counts.daedu || 0,
      mung: counts.nokdu || 0,
      black: counts.black || 0,
      red: counts.pat || 0,
      defects: counts.defective || 0,
      foreign: counts.foreign || 0,
      foreignDetails: analysis.foreign_details || "없음",
      defectRate: ratios.defective || ratios.foreign || "0", 
      qualityScore: result.quality_score || "보통",
      reasoning: result.reasoning || "분석 완료",
      fileName: imageFile.name
    };

  } catch (error: any) {
    console.error("Backend Connection Error:", error);
    if (error.message.includes("[")) {
      throw error;
    }
    throw new Error(`서버 연결 실패: ${error.message}. (AI 서비스 상태를 확인해주세요.)`);
  }
};
