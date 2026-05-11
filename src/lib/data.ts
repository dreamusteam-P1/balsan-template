export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  specs: {
    power?: string;
    capacity?: string;
    weight?: string;
    dimensions?: string;
    efficiency?: string;
    features?: string;
    usage?: string;
  };
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "thresher-v1",
    name: "흡입식콩탈곡기",
    model: "BS-ST1000",
    category: "탈곡기류",
    specs: {
      power: "5.5kW / 7.5HP",
      capacity: "800 - 1000 kg/hr",
      weight: "450 kg",
      dimensions: "1800 x 1200 x 1500 mm",
      efficiency: "99.8% (탈곡률)"
    },
    description: "세계 최초 흡입식 특허 기술을 적용하여 콩의 손상 없이 깨끗하게 탈곡합니다. 기계 내부의 강력한 기류가 이물질을 자동으로 배출하여 정선 과정을 획기적으로 줄여줍니다.",
    features: ["흡입식 특허 기술", "저소음 저진동 설계", "고속 탈곡 시스템"]
  },
  {
    id: "sorter-ai",
    name: "일괄콩정선선별기",
    model: "BS-AI500",
    category: "정선·선별기류",
    specs: {
      power: "3.7kW / 5HP",
      capacity: "500 - 700 kg/hr",
      weight: "600 kg",
      dimensions: "2200 x 1500 x 1800 mm",
      features: "AI 비전 센서 탑재"
    },
    description: "크기, 무게, 색상을 한 번에 처리하는 일괄 시스템입니다. 최신 AI 비전 모듈을 장착하여 미세한 결함까지 잡아내며, 수확물의 부가가치를 극대화합니다.",
    features: ["AI 정밀 분석", "다중 선별 로직", "간편한 조작 인터페이스"]
  },
  {
    id: "mixer-m1",
    name: "버섯배지혼합기",
    model: "BS-MX2000",
    category: "기타 농기계",
    specs: {
      power: "11kW / 15HP",
      capacity: "2000 L",
      weight: "850 kg",
      dimensions: "2500 x 1800 x 2000 mm",
      efficiency: "균일 혼합 99%"
    },
    description: "버섯 재배의 핵심인 배지 혼합을 가장 균일하게 수행합니다. 특수 설계된 트윈 스크류가 재료의 손상 없이 공기 함유량을 최적으로 맞추어 버섯의 품질을 높입니다.",
    features: ["트윈 스크류 방식", "자동 수분 조절", "스테인리스 내식 구조"]
  },
  {
    id: "ai-conveyor",
    name: "AI 콩 이송기",
    model: "BS-AIC100",
    category: "AI제품",
    specs: {
      features: "지능형 속도 조절",
      capacity: "최대 1200 kg/hr",
      power: "2.2kW"
    },
    description: "공급량에 따라 스스로 속도를 조절하는 지능형 이송 시스템입니다. 정체 구간을 감지하여 최적의 이송 흐름을 유지합니다.",
    features: ["지능형 유량 제어", "에너지 절감 모드", "충격 방지 설계"]
  },
  {
    id: "ai-inspector-device",
    name: "AI 콩 품질 검사기",
    model: "BS-AIQ50",
    category: "AI제품",
    specs: {
      features: "실시간 비전 분석",
      efficiency: "99.9% 정확도"
    },
    description: "수확된 콩의 품질을 실시간으로 전수 검사합니다. 비전 AI 기술로 결함 및 이물질을 0.1초 만에 판별합니다.",
    features: ["고속 비전 엔진", "정밀 리포트 생성", "스마트폰 연동"]
  },
  {
    id: "ai-sorter-pro",
    name: "AI 선별기 (Pro)",
    model: "BS-AIS300",
    category: "AI제품",
    specs: {
      capacity: "2000 kg/hr",
      features: "멀티 스펙트럼 센서"
    },
    description: "색상 선별을 넘어 성분 분석까지 가능한 최상위 선별 솔루션입니다. 고도화된 AI 알고리즘이 미세한 결함까지 완벽히 차단합니다.",
    features: ["멀티 스펙트럼 분석", "대용량 처리 시스템", "원격 모니터링"]
  },
  {
    id: "ndvi-checker",
    name: "식생지수 검사기",
    model: "BS-NDVI-V1",
    category: "AI제품",
    specs: {
      features: "NDVI 실시간 측정",
      usage: "드론/차량 장착 가능"
    },
    description: "작물의 생육 상태를 수치화하여 분석합니다. 비료 투입 시기 및 수확 시기를 과학적으로 결정할 수 있도록 돕습니다.",
    features: ["실시간 NDVI 매핑", "정밀 농업 데이터 제공", "GPS 연동 시스템"]
  }
];
