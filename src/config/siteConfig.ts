export const siteConfig = {
  name: "Balsan Engineering",
  fullName: "발산공업",
  representative: "강옥자",
  businessNumber: "401-01-98612",
  address: "전북 군산시 서수면 상장곤윗길 90",
  email: "balsan3252@gmail.com",
  phone: "063-451-3252",
  
  branding: {
    tagline: "The Future of Agricultural AI",
    heroTitle: "미래 농업의 기준,\nAI 콩 품질 검사 솔루션",
    heroDescription: "독보적인 AI 비전 기술로 수확물의 품질을 0.1초 만에 판별합니다. 발산공업만이 가능한 압도적인 정밀도를 지금 경험하세요.",
    accentColor: "#2ecc71",
  },

  navigation: [
    { name: "AI 검사기", href: "/technology/ai-inspector" },
    { name: "제품 전시장", href: "/products" },
    { 
      name: "자료실", 
      href: "/resources",
      subItems: [
        { name: "카다로그", href: "/resources?tab=catalog" },
        { name: "동영상", href: "/resources?tab=video" },
      ]
    },
    { 
      name: "회사 소개", 
      href: "/about",
      subItems: [
        { name: "인사말", href: "/about#greeting" },
        { name: "연혁", href: "/about#history" },
        { name: "인증현황", href: "/about#cert" },
        { name: "오시는길", href: "/about#location" }
      ]
    },
    { 
      name: "고객 지원", 
      href: "/support",
      subItems: [
        { name: "공지사항", href: "/support?tab=notice" },
        { name: "구매문의", href: "/support?tab=inquiry" },
        { name: "구매처 및 A/S 안내", href: "/support?tab=as" },
      ],
    },
  ],

  features: [
    {
      title: "40년 기술력",
      description: "대한민국 농업 기계화의 역사와 함께해 온 발산공업은 30여 개의 특허를 보유한 기술 명가입니다."
    },
    {
      title: "AI 정밀 선별",
      description: "최첨단 비전 AI 모델을 활용하여 콩의 품질을 실시간으로 분석하고 미세 결함을 판별합니다."
    },
    {
      title: "글로벌 품질",
      description: "전 세계 10개국 이상으로 수출되며 세계 시장에서도 그 압도적인 품질을 인정받고 있습니다."
    }
  ],

  threeModel: {
    path: "/models/lighting_v1.glb",
    parts: [
      { id: "vision", title: "Ultra-High Vision", description: "육안으로 판별하기 힘든 미세한 변색과 반점까지 잡아내는 초정밀 비전 시스템입니다." },
      { id: "brain", title: "Balsan AI Brain", description: "초당 수백 개의 개체를 실시간으로 분석하여 순도와 결함률을 산출하는 독보적 지능형 엔진입니다." },
      { id: "cloud", title: "Smart Reporting", description: "분석 데이터를 즉시 클라우드로 전송하여 스마트폰에서 실시간 리포트를 확인할 수 있습니다." }
    ]
  },

  technology: {
    heroTitle: "Agriculture \n Intelligence.",
    heroDescription: "우리는 단순히 기계를 만들지 않습니다. \n 농민의 땀방울이 최고의 결실을 맺도록 스마트한 농업 솔루션을 제공합니다.",
    features: [
      {
        title: "Suction-type Patent Technology",
        description: "세계 최초로 개발된 흡입식 특허 기술은 작물의 손상을 최소화하면서도 압도적인 처리 속도를 자랑합니다.",
        color: "text-green-400"
      },
      {
        title: "Gemini Vision Brain",
        description: "최신 멀티모달 AI가 이미지 속 콩의 크기, 색상, 결함을 인간의 눈보다 정확하게 판독합니다.",
        color: "text-blue-400"
      },
      {
        title: "Real-time Cloud Monitoring",
        description: "현장의 장비 가동 상태와 분석 리포트를 언제 어디서나 클라우드를 통해 실시간으로 확인할 수 있습니다.",
        color: "text-accent"
      }
    ]
  },

  products: [
    {
      id: "product-template",
      name: "제품명 (영문모델명)",
      category: "카테고리",
      tagline: "여기에 제품의 주요 용도나 핵심 목적을 입력하세요. (예: 대규모 농가를 위한 고성능 탈곡기)",
      description: "제품에 대한 상세한 설명을 여기에 입력합니다. 디자인에 맞춰 자동으로 줄바꿈과 배치가 조절됩니다.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      keyStats: [
        { label: "주요제원1", value: "값1" },
        { label: "주요제원2", value: "값2" },
        { label: "주요제원3", value: "값3" }
      ],
      features: [
        { title: "핵심기술 01", description: "기술에 대한 상세 설명을 입력하세요." },
        { title: "핵심기술 02", description: "기술에 대한 상세 설명을 입력하세요." },
        { title: "핵심기술 03", description: "기술에 대한 상세 설명을 입력하세요." }
      ],
      specs: [
        { label: "상세항목 01", value: "상세값 01" },
        { label: "상세항목 02", value: "상세값 02" },
        { label: "상세항목 03", value: "상세값 03" },
        { label: "상세항목 04", value: "상세값 04" }
      ]
    },
    {
      id: "ucs-m21-hot",
      name: "농업용 파쇄기 (UCS-M21)",
      category: "HOT 제품",
      tagline: "강력한 파쇄력, 깔끔한 처리",
      description: "농업 부산물을 순식간에 파쇄하여 자원으로 전환하는 고성능 파쇄기입니다.",
      image: "/products/ucs_m21.png",
      keyStats: [
        { label: "형식", value: "이동식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-r200-hot",
      name: "자주형 흡입식 콩탈곡기 (ESP-R200)",
      category: "HOT 제품",
      tagline: "발산공업의 자부심, No.1 자주형 모델",
      description: "베스트셀러 모델로 압도적인 판매량과 성능을 입증한 자주형 탈곡기입니다.",
      image: "/products/esp_r200.png",
      keyStats: [
        { label: "판매 순위", value: "1위" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-m1-hot",
      name: "트랙터식 잡곡탈곡기 (ESP-M1)",
      category: "HOT 제품",
      tagline: "다목적 잡곡 탈곡의 최강자",
      description: "트랙터 부착형 중 가장 인기 있는 잡곡 전용 탈곡기입니다.",
      image: "/products/esp_m1.png",
      keyStats: [
        { label: "형식", value: "트랙터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-m2-hot",
      name: "모터식 잡곡탈곡기 (ESP-M2)",
      category: "HOT 제품",
      tagline: "편리한 모터 구동식 베스트셀러",
      description: "실내 작업 시 가장 선호되는 고효율 모터식 잡곡 탈곡기입니다.",
      image: "/products/esp_m2.png",
      keyStats: [
        { label: "형식", value: "모터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "bns-300gi-hot",
      name: "진동식 곡물정선기 (BNS-300GI)",
      category: "HOT 제품",
      tagline: "미세한 불순물까지 잡아내는 정밀함",
      description: "진동 기술을 활용해 곡물을 완벽하게 정선하는 스테디셀러 모델입니다.",
      image: "/products/bns_300gi.png",
      keyStats: [
        { label: "형식", value: "진동식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-1000l",
      name: "특대형 흡입식 트랙터식 콩탈곡기 (ESP-1000L)",
      category: "탈곡기류",
      tagline: "대규모 영농을 위한 압도적인 파워",
      description: "트랙터의 강력한 동력을 이용해 대량의 콩을 순식간에 탈곡합니다. 특대형 사이즈로 최상의 작업 효율을 보장합니다.",
      image: "/products/esp_1000l.png",
      keyStats: [
        { label: "형식", value: "트랙터 부착형" },
        { label: "크기", value: "특대형" },
        { label: "기술", value: "흡입식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-r200",
      name: "자주형 흡입식 콩탈곡기 (ESP-R200)",
      category: "탈곡기류",
      tagline: "이동의 자유, 탈곡의 정교함",
      description: "자주형 주행 장치를 갖추어 어떤 지형에서도 자유로운 이동이 가능합니다.",
      image: "/products/esp_r200.png",
      keyStats: [
        { label: "기술", value: "흡입식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-m1",
      name: "잡곡 트랙터식 탈곡기 (ESP-M1)",
      category: "탈곡기류",
      tagline: "다양한 잡곡도 완벽하게",
      description: "콩뿐만 아니라 다양한 잡곡류를 트랙터 동력으로 시원하게 탈곡합니다.",
      image: "/products/esp_m1.png",
      keyStats: [
        { label: "형식", value: "트랙터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-m2",
      name: "잡곡 모터식 탈곡기 (ESP-M2)",
      category: "탈곡기류",
      tagline: "모터 구동으로 실속 있는 탈곡",
      description: "안정적인 모터 성능으로 잡곡 수확을 도와줍니다.",
      image: "/products/esp_m2.png",
      keyStats: [
        { label: "형식", value: "모터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-100",
      name: "대형 흡입식 트랙터식 콩탈곡기 (ESP-100)",
      category: "탈곡기류",
      tagline: "대형 농가를 위한 고성능 모델",
      description: "강력한 흡입력과 처리 능력을 갖춘 대형 탈곡기입니다.",
      image: "/products/esp_100.png",
      keyStats: [
        { label: "크기", value: "대형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-v1",
      name: "중형 흡입식 트랙터식 콩탈곡기 (ESP-V1)",
      category: "탈곡기류",
      tagline: "균형 잡힌 성능의 중형 모델",
      description: "가장 보편적으로 사용되는 중형 트랙터식 탈곡기입니다.",
      image: "/products/esp_v1.png",
      keyStats: [
        { label: "크기", value: "중형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-v2",
      name: "중형 모터식 콩탈곡기 (ESP-V2)",
      category: "탈곡기류",
      tagline: "안정적인 중형 모터식 탈곡",
      description: "모터 구동 방식으로 일정한 성능을 유지합니다.",
      image: "/products/esp_v2.png",
      keyStats: [
        { label: "크기", value: "중형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-1000s",
      name: "소형 흡입식 콩탈곡기 모터식 (SB-1000S)",
      category: "탈곡기류",
      tagline: "작지만 강력한 소형 탈곡 시스템",
      description: "소규모 작업에 최적화된 고성능 소형 모델입니다.",
      image: "/products/sb_1000s.png",
      keyStats: [
        { label: "크기", value: "소형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-1",
      name: "중형 트랙터식 콩탈곡기 (ESP-1)",
      category: "탈곡기류",
      tagline: "전통의 신뢰, 표준형 중형 모델",
      description: "오랜 시간 검증된 발산공업의 표준 탈곡기입니다.",
      image: "/products/esp_1.png",
      keyStats: [
        { label: "형식", value: "트랙터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-2",
      name: "중형 모터식 콩탈곡기 (ESP-2)",
      category: "탈곡기류",
      tagline: "효율적인 중형 모터식 작업",
      description: "실속 있는 구성으로 꾸준히 사랑받는 모델입니다.",
      image: "/products/esp_2.png",
      keyStats: [
        { label: "형식", value: "모터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "esp-rs10",
      name: "자주형 참깨들깨 탈곡기 (ESP-RS10)",
      category: "탈곡기류",
      tagline: "참깨와 들깨 수확의 혁신",
      description: "참깨와 들깨 전용으로 설계된 고효율 자주형 탈곡기입니다.",
      image: "/products/esp_rs10.png",
      keyStats: [
        { label: "용도", value: "참깨/들깨용" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-e10b",
      name: "일괄검정콩정선선별기 5단 (SB-E10B)",
      category: "정선·선별기류",
      tagline: "검정콩 전용 정밀 5단 선별",
      description: "검정콩의 특성에 맞춰 설계된 고성능 5단 일괄 정선 시스템입니다.",
      image: "/products/sb_e10b.png",
      keyStats: [
        { label: "선별 단계", value: "5단" }
      ],
      features: [],
      specs: []
    },
    {
      id: "bns-300gi",
      name: "진동식 곡물정선기 (BNS-300GI)",
      category: "정선·선별기류",
      tagline: "진동으로 완성하는 초정밀 정선",
      description: "진동 기술을 통해 이물질을 완벽하게 분리해냅니다.",
      image: "/products/bns_300gi.png",
      keyStats: [
        { label: "방식", value: "진동식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-100t",
      name: "톤백형 정선선별기 (SB-100T)",
      category: "정선·선별기류",
      tagline: "대량 처리를 위한 톤백 직결형",
      description: "대형 톤백을 바로 연결하여 작업 효율을 극대화한 정선기입니다.",
      image: "/products/sb_100t.png",
      keyStats: [
        { label: "형식", value: "톤백형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-a10",
      name: "대략정선기 (SB-A10)",
      category: "정선·선별기류",
      tagline: "신속한 1차 정선 작업",
      description: "수확 직후 큰 이물질을 빠르게 제거하는 대략 정선기입니다.",
      image: "/products/sb_a10.png",
      keyStats: [
        { label: "방식", value: "대략 정선" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-250t",
      name: "일괄정선선별기 10단 (SB-250T)",
      category: "정선·선별기류",
      tagline: "압도적인 10단 정밀 선별",
      description: "10단계의 정밀한 선별 과정을 통해 최상의 곡물만을 골라냅니다.",
      image: "/products/sb_250t.png",
      keyStats: [
        { label: "선별 단계", value: "10단" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-e10c",
      name: "일괄정선선별기 5단 (SB-E10C)",
      category: "정선·선별기류",
      tagline: "가장 신뢰받는 5단 일괄 시스템",
      description: "안정적인 5단 선별 성능으로 농가에서 널리 쓰이는 모델입니다.",
      image: "/products/sb_e10c.png",
      keyStats: [
        { label: "선별 단계", value: "5단" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-e10-old",
      name: "일괄정선선별기 3단 (SB-E10) (단종)",
      category: "정선·선별기류",
      tagline: "발산의 역사를 만든 3단 모델",
      description: "현재는 단종되었으나 많은 사랑을 받았던 전설적인 3단 모델입니다.",
      image: "/products/sb_e10.png",
      keyStats: [
        { label: "상태", value: "단종" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-200gi",
      name: "잡곡정선기 (SB-200GI)",
      category: "정선·선별기류",
      tagline: "다양한 잡곡도 깔끔하게",
      description: "다양한 크기의 잡곡류를 정밀하게 정선합니다.",
      image: "/products/sb_200gi.png",
      keyStats: [
        { label: "용도", value: "잡곡용" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-200g",
      name: "풍구 (SB-200G)",
      category: "정선·선별기류",
      tagline: "바람의 힘으로 완벽한 선별",
      description: "전통적인 풍구 방식을 현대적으로 재해석한 고효율 정선기입니다.",
      image: "/products/sb_200g.png",
      keyStats: [
        { label: "방식", value: "풍구식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-e78",
      name: "정선선별기 (SB-E78)",
      category: "정선·선별기류",
      tagline: "표준형 정선 선별 시스템",
      description: "다양한 작물에 대응 가능한 표준형 정선기입니다.",
      image: "/products/sb_e78.png",
      keyStats: [
        { label: "형식", value: "표준형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-e7",
      name: "콩정선기 (SB-E7)",
      category: "정선·선별기류",
      tagline: "콩 농가를 위한 정밀 정선",
      description: "콩 수확물의 순도를 높여주는 전용 정선기입니다.",
      image: "/products/sb_e7.png",
      keyStats: [
        { label: "용도", value: "콩 전용" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-e8",
      name: "콩선별기 (SB-E8)",
      category: "정선·선별기류",
      tagline: "알곡 하나하나 소중하게",
      description: "콩의 크기와 모양을 기준으로 정밀하게 선별합니다.",
      image: "/products/sb_e8.png",
      keyStats: [
        { label: "용도", value: "콩 전용" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-3000",
      name: "로더용 상토기 (SB-3000)",
      category: "기타제품",
      tagline: "로더와 결합하여 더욱 강력하게",
      description: "로더 전용 설계로 대량의 상토 작업을 신속하게 처리합니다.",
      image: "/products/sb_3000.png",
      keyStats: [
        { label: "형식", value: "로더용" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-10000",
      name: "영업용 상토기 (SB-10000)",
      category: "기타제품",
      tagline: "영업용 대규모 상토 처리 시스템",
      description: "전문 상토 사업자를 위한 압도적인 처리 용량의 모델입니다.",
      image: "/products/sb_10000.png",
      keyStats: [
        { label: "형식", value: "영업용" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-4200",
      name: "중형 상토조제기 (SB-4200)",
      category: "기타제품",
      tagline: "최적의 배합 기술, 중형 상토조제",
      description: "균일한 상토 배합을 도와주는 중형 조제기입니다.",
      image: "/products/sb_4200.png",
      keyStats: [
        { label: "크기", value: "중형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-4000",
      name: "자동상토기 (SB-4000)",
      category: "기타제품",
      tagline: "자동화로 완성하는 편리한 상토 작업",
      description: "일정한 공급과 자동 제어로 작업 편의성을 극대화했습니다.",
      image: "/products/sb_4000.png",
      keyStats: [
        { label: "방식", value: "자동형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-2000",
      name: "소형 상토기 (SB-2000)",
      category: "기타제품",
      tagline: "소규모 영농을 위한 실속형 모델",
      description: "가정용이나 소형 농가에서 사용하기 적합한 상토기입니다.",
      image: "/products/sb_2000.png",
      keyStats: [
        { label: "크기", value: "소형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "wg-2",
      name: "달래선별기 (WG-2)",
      category: "기타제품",
      tagline: "달래 수확의 정밀 선별 솔루션",
      description: "섬세한 달래를 상처 없이 크기별로 골라냅니다.",
      image: "/products/wg_2.png",
      keyStats: [
        { label: "용도", value: "달래용" }
      ],
      features: [],
      specs: []
    },
    {
      id: "bur-2",
      name: "밤송이 탈피기 모터식 (BUR-2)",
      category: "기타제품",
      tagline: "조용하고 정교한 밤송이 탈피",
      description: "모터를 사용하여 실내에서도 간편하게 밤송이를 제거합니다.",
      image: "/products/bur_2.png",
      keyStats: [
        { label: "형식", value: "모터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "bur-1",
      name: "밤송이 탈피기 트랙터식 (BUR-1)",
      category: "기타제품",
      tagline: "트랙터의 힘으로 압도적인 탈피 속도",
      description: "대량의 밤 수확물을 현장에서 즉시 탈피하는 고성능 트랙터식 모델입니다.",
      image: "/products/bur_1.png",
      keyStats: [
        { label: "형식", value: "트랙터식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "mushroom-auto",
      name: "자동입폐상기 (미등록)",
      category: "버섯기계류",
      tagline: "입폐상 작업의 완전 자동화",
      description: "버섯 재배의 핵심 공정을 자동화하여 인건비를 획기적으로 줄여줍니다.",
      image: "/products/mushroom_auto.png",
      keyStats: [
        { label: "상태", value: "개발중/미등록" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-1400",
      name: "소형탈봉기 (SB-1400)",
      category: "버섯기계류",
      tagline: "소규모 농가를 위한 정밀 탈봉",
      description: "작지만 강력한 성능으로 버섯 탈봉 작업을 신속하게 처리합니다.",
      image: "/products/sb_1400.png",
      keyStats: [
        { label: "형식", value: "소형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "mushroom-sawdust",
      name: "자동 톱밥 선별기 (미등록)",
      category: "버섯기계류",
      tagline: "최적의 배지 환경을 위한 톱밥 선별",
      description: "균일한 톱밥 선별로 고품질 버섯 생산을 돕습니다.",
      image: "/products/sawdust_sorter.png",
      keyStats: [
        { label: "상태", value: "미등록" }
      ],
      features: [],
      specs: []
    },
    {
      id: "mushroom-mixer",
      name: "배지혼합기 (미등록)",
      category: "버섯기계류",
      tagline: "완벽한 배합, 균일한 품질",
      description: "다양한 재료를 최적의 비율로 혼합하는 자동 배지 혼합기입니다.",
      image: "/products/mixer_main.png",
      keyStats: [
        { label: "상태", value: "미등록" }
      ],
      features: [],
      specs: []
    },
    {
      id: "mushroom-sterilizer",
      name: "상압 살균솥 (미등록)",
      category: "버섯기계류",
      tagline: "안전하고 확실한 배지 살균",
      description: "일정한 온도와 압력으로 배지를 완벽하게 살균합니다.",
      image: "/products/sterilizer_main.png",
      keyStats: [
        { label: "상태", value: "미등록" }
      ],
      features: [],
      specs: []
    },
    {
      id: "sb-2400",
      name: "승강식 탈봉기 (SB-2400)",
      category: "버섯기계류",
      tagline: "높낮이 조절이 자유로운 탈봉 시스템",
      description: "승강 기능을 갖추어 작업자의 편의성을 극대화한 고성능 탈봉기입니다.",
      image: "/products/sb_2400.png",
      keyStats: [
        { label: "형식", value: "승강식" }
      ],
      features: [],
      specs: []
    },
    {
      id: "mushroom-conveyor-auto",
      name: "자동 입폐상 컨베어 (미등록)",
      category: "버섯기계류",
      tagline: "스마트한 입폐상 물류 시스템",
      description: "자동 제어 시스템과 연동되어 효율적인 입폐상을 지원합니다.",
      image: "/products/conveyor_auto.png",
      keyStats: [
        { label: "상태", value: "미등록" }
      ],
      features: [],
      specs: []
    },
    {
      id: "bc-150",
      name: "곡물이송컨베어 5M (BC-150)",
      category: "버섯기계류",
      tagline: "여유로운 5M 이송 시스템",
      description: "긴 거리의 곡물 및 배지 이송에 적합한 5미터 컨베어입니다.",
      image: "/products/bc_150.png",
      keyStats: [
        { label: "길이", value: "5M" }
      ],
      features: [],
      specs: []
    },
    {
      id: "bc-140",
      name: "곡물이송컨베어 4M (BC-140)",
      category: "버섯기계류",
      tagline: "콤팩트한 4M 이송 시스템",
      description: "다목적으로 사용 가능한 표준형 4미터 컨베어입니다.",
      image: "/products/bc_140.png",
      keyStats: [
        { label: "길이", value: "4M" }
      ],
      features: [],
      specs: []
    },
    {
      id: "ai-inspector",
      name: "AI콩검사기 (Balsan-AI-Inspector)",
      category: "AI 솔루션",
      tagline: "0.1초의 혁신, 완벽한 검사",
      description: "실시간 비전 AI 기술로 수확물의 품질을 정밀 검사합니다.",
      image: "/products/ai_inspector_main.png",
      keyStats: [
        { label: "검사 속도", value: "0.1s" },
        { label: "정확도", value: "99.9%" }
      ],
      features: [],
      specs: []
    },
    {
      id: "ai-conveyor",
      name: "AI콩이송장치 (Balsan-AI-Conveyor)",
      category: "AI 솔루션",
      tagline: "상처 없는 스마트 이송 시스템",
      description: "AI 제어로 작물의 손상 없이 안전하게 이송을 최적화합니다.",
      image: "/products/ai_conveyor.png",
      keyStats: [
        { label: "이송 방식", value: "AI 최적화" }
      ],
      features: [],
      specs: []
    },
    {
      id: "ai-sorter",
      name: "AI콩선별기 (Balsan-AI-Sorter)",
      category: "AI 솔루션",
      tagline: "지능형 멀티 선별 기술",
      description: "딥러닝 알고리즘으로 미세한 결함까지 완벽하게 선별해냅니다.",
      image: "/products/ai_sorter.png",
      keyStats: [
        { label: "선별 단계", value: "다단계 지능형" }
      ],
      features: [],
      specs: []
    },
    {
      id: "ndvi-scan",
      name: "식생지수검사기 (Balsan-NDVI-Scan)",
      category: "AI 솔루션",
      tagline: "작물의 건강을 수치로 확인하세요",
      description: "식생지수 분석을 통해 작물의 생육 상태를 과학적으로 진단합니다.",
      image: "/products/ndvi_scan.png",
      keyStats: [
        { label: "분석 지표", value: "NDVI" }
      ],
      features: [],
      specs: []
    },
    {
      id: "case-01",
      name: "김제 스마트팜 AI 선별기 설치",
      category: "설치사례",
      tagline: "전국 어디든 발산공업이 함께합니다",
      description: "최첨단 AI 선별 시스템이 실제 영농 현장에 적용된 사례입니다.",
      image: "/products/case_01.png",
      keyStats: [
        { label: "지역", value: "전북 김제" }
      ],
      features: [],
      specs: []
    }
  ],
  resources: {
    catalogs: [
      {
        id: 1,
        title: "2026 발산공업 종합 카다로그",
        description: "발산공업의 전 제품 라인업을 확인하실 수 있습니다.",
        image: "/catalogs/catalog_2024_thumb.png",
        fileUrl: "#",
        date: "2026.01"
      },
      {
        id: 2,
        title: "AI 콩 검사기 상세 안내서",
        description: "최첨단 AI 기술이 적용된 콩 검사기의 상세 스펙과 원리를 설명합니다.",
        image: "/catalogs/ai_catalog_thumb.png",
        fileUrl: "#",
        date: "2026.03"
      },
      {
        id: 3,
        title: "제품 사용 설명서 (종합)",
        description: "주요 제품들의 올바른 사용법과 유지보수 가이드입니다.",
        image: "/catalogs/manual_thumb.png",
        fileUrl: "#",
        date: "2026.05"
      }
    ],
    videos: [
      {
        id: 1,
        title: "발산공업 AI 콩 검사기 시연 영상",
        description: "0.1초 만에 이루어지는 압도적인 정밀 분석 과정을 확인하세요.",
        youtubeId: "1w7OgIMMRc4", // Guns N' Roses - Sweet Child O' Mine
        thumbnail: "https://img.youtube.com/vi/1w7OgIMMRc4/maxresdefault.jpg",
        duration: "05:03"
      },
      {
        id: 2,
        title: "자주형 콩 탈곡기 ESP-R200 현장 작동",
        description: "농업 현장에서 발휘되는 강력한 탈곡 성능을 보여드립니다.",
        youtubeId: "8SbUCzU9ax4", // Guns N' Roses - November Rain
        thumbnail: "https://img.youtube.com/vi/8SbUCzU9ax4/maxresdefault.jpg",
        duration: "09:16"
      },
      {
        id: 3,
        title: "발산공업 40년 기술의 역사",
        description: "대한민국 농업 기계화와 함께 걸어온 우리의 발자취입니다.",
        youtubeId: "o1tj2zJ2Wvg", // Guns N' Roses - Welcome To The Jungle
        thumbnail: "https://img.youtube.com/vi/o1tj2zJ2Wvg/maxresdefault.jpg",
        duration: "04:39"
      }
    ]
  }
};

export type SiteConfig = typeof siteConfig;
