// 마커 이미지 주소
var imageSrc = "./marker_image/d.png"; // D_마커 이미지
var imageB = "./marker_image/b.png"; // B_마커 이미지
var imageE =
  "https://cdn.icon-icons.com/icons2/1102/PNG/512/1485969928-17-location_78896.png"; // E_마커 이미지
var imageA =
  "https://cdn.icon-icons.com/icons2/1559/PNG/512/3440906-direction-location-map-marker-navigation-pin_107531.png"; // A_마커 이미지
var imageC = "https://cdn-icons-png.flaticon.com/512/25/25613.png"; // C_마커 이미지

// D1~D19 마커 정보 배열
var D_positions = [
  {
    title: "창업보육센터 D1",
    latlng: new kakao.maps.LatLng(35.914230864762914, 128.80227801102558),
    testing: "D1 창업보육센터입니다.",
    content: "Business Incubator Center\n하양읍 금락리 308-5(지번)",
    image: "./image/D1.jpg",
  },
  {
    title: "성마티아스관(공학관) D2",
    latlng: new kakao.maps.LatLng(35.91330652052772, 128.80262535240885),
    testing: "D2 성마티아스관(공학관)입니다.",
    content: "공과대학, 소프트웨어 융합대학\n하양읍 금락리 308-5(지번)",
    image: "./image/D2.jpg",
  },
  {
    title: "해양바이오산업연구센터 D3",
    latlng: new kakao.maps.LatLng(35.91279809476142, 128.80317874342236),
    testing: "D3 해양바이오산업연구센터입니다.",
    content: "Marine Biotechnology Research\n하양읍 금락리 308-5(지번)",
    image: "./image/D3.jpg",
  },
  {
    title: "DLP중앙기기센터 D4",
    latlng: new kakao.maps.LatLng(35.91260385309355, 128.80351218282473),
    testing: "D4 DLP중앙기기센터입니다.",
    content: "Research Facilities Center\n하양읍 금락리 308-5(지번)",
    image: "./image/D4.jpg",
  },
  {
    title: "성도미니코관 D5",
    latlng: new kakao.maps.LatLng(35.91255933494802, 128.80407609885054),
    testing: "D5 성도미니코관입니다.",
    content: "바이오메디대학\n하양읍 금락리 300",
    image: "./image/D5.jpg",
  },
  {
    title: "성이시도르관 D6",
    latlng: new kakao.maps.LatLng(35.91259104910482, 128.80466390000558),
    testing: "D6 성이시도르관입니다.",
    content: "St. Isidore Hall\n하양읍 금락리 300",
    image: "./image/D6.jpg",
  },
  {
    title: "제1약학관 D7",
    latlng: new kakao.maps.LatLng(35.91198584922017, 128.8047609204164),
    testing: "D7 제1약학관입니다.",
    content: "약학대학\n하양읍 금락리 300(지번)",
    image: "./image/D7.jpg",
  },
  {
    title: "정보통신관 D8",
    latlng: new kakao.maps.LatLng(35.91182322233594, 128.80538860847443),
    testing: "D8 정보통신관입니다.",
    content: "Information Technology Center\n하양읍 금락리 300",
    image: "./image/D8.jpg",
  },
  {
    title: "성토마스관 D9",
    latlng: new kakao.maps.LatLng(35.911323625905744, 128.80595324912923),
    testing: "D9 성토마스관입니다.",
    content: "바이오메디대학\n하양읍 금락리 300",
    image: "./image/D9.jpg",
  },
  {
    title: "제2약학관 D10",
    latlng: new kakao.maps.LatLng(35.912143968896096, 128.80413312736945),
    testing: "D10 제2약학관입니다.",
    content: "St. Cosmas Hall\n하양읍 금락리 300",
    image: "./image/D10.jpg",
  },
  {
    title: "성마르타관 D11",
    latlng: new kakao.maps.LatLng(35.91107004016494, 128.8048398059556),
    testing: "D11 성마르타관입니다.",
    content: "사회과학대학\n하양읍 금락리 300",
    image: "./image/D11.jpg",
  },
  {
    title: "미술실습동 D12",
    latlng: new kakao.maps.LatLng(35.90965202147026, 128.8044586787023),
    testing: "D12 미술실습동입니다.",
    content: "Fine Arts Laboratory\n하양읍 금락리 300",
    image: "./image/D12.jpg",
  },
  {
    title: "성카타리나관 D15",
    latlng: new kakao.maps.LatLng(35.9097851616611, 128.80519275869958),
    testing: "D15 성카타리나관입니다.",
    content: "디자인대학\n하양읍 금락리 산 49(지번)",
    image: "./image/D15.jpg",
  },
  {
    title: "아마레갤러리(후생관) D16",
    latlng: new kakao.maps.LatLng(35.90994423843529, 128.80599942872604),
    testing: "D16 아마레갤러리(후생관)입니다.",
    content: "미대식당\n하양읍 금락리 산 48-3",
    image: "./image/D16.jpg",
  },
  {
    title: "성체칠리아관 D17",
    latlng: new kakao.maps.LatLng(35.91001965447435, 128.80697588703975),
    testing: "D17 성체칠리아관(음악대학)입니다.",
    content: "음악,공연예술대학\n하양읍 금락리 300(지번)",
    image: "./image/D17.jpg",
  },
  {
    title: "성안나관 D18",
    latlng: new kakao.maps.LatLng(35.9091794917541, 128.8068183215022),
    testing: "D18 성안나관입니다.",
    content: "St. Anna Hall\n하양읍 금락리 300(지번)",
    image: "./image/D18.jpg",
  },
  {
    title: "용해로실 D19",
    latlng: new kakao.maps.LatLng(35.90919024481781, 128.80640319657638),
    testing: "D19 용해로실입니다.",
    content: "Smelting Laboratory\n하양읍 금락리 300(지번)",
    image: "./image/D19.jpg",
  },
];

D_positions.forEach(function (pos) {
  // D동 마커 관리
  var imageSize = new kakao.maps.Size(15, 23);
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  var marker = new kakao.maps.Marker({
    position: pos.latlng,
    title: pos.title,
    image: markerImage,
  });

  var overlay = createCustomOverlay(pos, map, marker);

  kakao.maps.event.addListener(marker, "click", function () {
    overlay.setMap(map);
  });
});

// B1~B8 마커 배열
var B_positions = [
  {
    title: "취창업관 B1",
    latlng: new kakao.maps.LatLng(35.91039883082829, 128.8090226215729),
    testing: "B1 취창업관입니다.",
    content: "Thaddeus Cho Hall\n하양읍 금락리 산 35(지번)",
    image: "./image/B1.jpg",
  },
  {
    title: "제르맹관 B2",
    latlng: new kakao.maps.LatLng(35.91072695213061, 128.80937347189675),
    testing: "B2 제르맹관입니다.",
    content: "Germain Hall\n하양읍 금락리 300(지번)",
    image: "./image/B2.jpg",
  },
  {
    title: "성당(교목처) B3",
    latlng: new kakao.maps.LatLng(35.90987486205057, 128.80970851680826),
    testing: "B3 성당(교목처)입니다.",
    content: "St. Florian Chapel\n하양읍 금락리 300(지번)",
    image: "./image/B3.jpg",
  },
  {
    title: "국제관 B4",
    latlng: new kakao.maps.LatLng(35.90947165677004, 128.8107516045907),
    testing: "B4 국제관입니다.",
    content: "구 어학교육센터\n하양읍 금락리 산 35(지번)",
    image: "./image/B4.jpg",
  },
  {
    title: "학생군사교육단 B5",
    latlng: new kakao.maps.LatLng(35.909670494009085, 128.81101089782052),
    testing: "B5 학군단입니다.",
    content: "ROTC 회관\n하양읍 금락리 300(지번)",
    image: "./image/B5.jpg",
  },
  {
    title: "박물관 B6",
    latlng: new kakao.maps.LatLng(35.91039703249525, 128.81183051911137),
    testing: "B6 박물관입니다.",
    content: "Museum 역사박물관\n하양읍 금락리 300(지번)",
    image: "./image/B6.jpg",
  },
  {
    title: "강당 B7",
    latlng: new kakao.maps.LatLng(35.91100676218079, 128.81083643957282),
    testing: "B7 강당입니다.",
    content: "Ignatius Cheon Hall\n하양읍 금락리 300(지번)",
    image: "./image/B7.jpg",
  },
  {
    title: "산학협력관 B8",
    latlng: new kakao.maps.LatLng(35.911946586928195, 128.81110709297926),
    testing: "B8 산학협력관입니다.",
    content: "John Choi Hall\n하양읍 금락리 300(지번)",
    image: "./image/B8.jpg",
  },
];

B_positions.forEach(function (pos) {
  // B동 마커 관리
  // 마커 생성
  var imageSize = new kakao.maps.Size(14, 25); // 마커 이미지 크기
  var markerImage = new kakao.maps.MarkerImage(imageB, imageSize); // 마커 이미지를 생성
  var marker = new kakao.maps.Marker({
    position: pos.latlng,
    title: pos.title,
    image: markerImage, // 마커 이미지
  });

  var overlay = createCustomOverlay(pos, map, marker);
});

// E1~E31(기숙사) 마커 배열
var E_positions = [
  {
    title: "성바로오문화관 E1(기숙사관리동)",
    latlng: new kakao.maps.LatLng(35.90917616401846, 128.80763790801947),
    testing: "E1 기숙사관리동입니다.",
    content: "St. Paul Hall\n하양읍 금락리 산 48-3(지번)",
    image: "./image/E1.jpg",
  },
  {
    title: "기숙사 아마레관 E3",
    latlng: new kakao.maps.LatLng(35.9084580304881, 128.80805354908716),
    testing: "E3 아마레관입니다.",
    content: "Amare Hall\n하양읍 금락리 300(지번)",
    image: "./image/E3.jpg",
  },
  {
    title: "기숙사 행정동 E4",
    latlng: new kakao.maps.LatLng(35.908547099781636, 128.8069257804167),
    testing: "E4 기숙사 행정동입니다.",
    content: "Dormitory Administration\n하양읍 금락리 300(지번)",
    image: "./image/E4.jpg",
  },
  {
    title: "기숙사 예지관 E5",
    latlng: new kakao.maps.LatLng(35.908137565519915, 128.8065952516418),
    testing: "E5 예지관입니다.",
    content: "Wisdom Hall\n하양읍 금락리 300(지번)",
    image: "./image/E5.jpg",
  },
  {
    title: "기숙사 세르비레관 E6",
    latlng: new kakao.maps.LatLng(35.907993779342206, 128.8071679524546),
    testing: "E6 세르비레관입니다.",
    content: "Servire Hall\n하양읍 금락리 345-14(지번)",
    image: "./image/E6.jpg",
  },
  {
    title: "기숙사 효성관 E7",
    latlng: new kakao.maps.LatLng(35.90735921671661, 128.807120290333),
    testing: "E7 효성관입니다.",
    content: "Morning Star Hall\n하양읍 금락리 300(지번)",
    image: "./image/E7.jpg",
  },
  {
    title: "기숙사 성김대건관 E8",
    latlng: new kakao.maps.LatLng(35.90711984400354, 128.80775726721257),
    testing: "E8 성김대건관입니다.",
    content: "St. Andrew Kim Dae-gun Hall\n하양읍 금락리 300(지번)",
    image: "./image/E8.jpg",
  },
  {
    title: "기숙사 다솜관 E9",
    latlng: new kakao.maps.LatLng(35.90687784082868, 128.80856863038235),
    testing: "E9 다솜관입니다.",
    content: "Charity Hall\n하양읍 금락리 300(지번)",
    image: "./image/E9.jpg",
  },
  {
    title: "기숙사 참인재관 E10",
    latlng: new kakao.maps.LatLng(35.90825852123887, 128.80873574475774),
    testing: "E10 참인재관입니다.",
    content: "HCC Hall\n하양읍 금락리 300(지번)",
    image: "./image/E10.jpg",
  },
  {
    title: "성이윤일관, 입학처 E11",
    latlng: new kakao.maps.LatLng(35.90810940851914, 128.81085624261019),
    testing: "E11 성이윤일관입니다.",
    content: "Admissions Center\n하양읍 금락리 240-4(지번)",
    image: "./image/E11.jpg",
  },
  {
    title: "대가빌라1동 E12",
    latlng: new kakao.maps.LatLng(35.90738126671768, 128.810739960602),
    testing: "E12 대가빌라1동입니다.",
    content: "Christopher’s House\n하양읍 금락리 241-3(지번)",
    image: "./image/E13.jpg",
  },
  {
    title: "대가빌라2동 E13",
    latlng: new kakao.maps.LatLng(35.907576351934914, 128.81094931793666),
    testing: "E13 대가빌라2동입니다.",
    content: "Clarion House\n하양읍 금락리 241-4(지번)",
    image: "./image/E13.jpg",
  },
];

E_positions.forEach(function (pos) {
  // E동 마커 관리
  // 마커 생성
  var imageSize = new kakao.maps.Size(25, 25); // 마커 이미지 크기
  var markerImage = new kakao.maps.MarkerImage(imageE, imageSize); // 마커 이미지를 생성
  var marker = new kakao.maps.Marker({
    position: pos.latlng,
    title: pos.title,
    image: markerImage, // 마커 이미지
  });

  var overlay = createCustomOverlay(pos, map, marker);
});

// A1~A13 마커 배열
var A_positions = [
  {
    title: "본관 A1",
    latlng: new kakao.maps.LatLng(35.91125642332756, 128.8078735474386),
    testing: "A1 본관입니다.",
    content: "Central Administraton\n하양읍 금락리 산 35(지번)",
    image: "./image/A1.jpg",
  },
  {
    title: "교양관 A2",
    latlng: new kakao.maps.LatLng(35.91171773973859, 128.80685943534394),
    testing: "A2 교양관입니다.",
    content: "Central Administraton\n하양읍 금락리 산 35(지번)",
    image: "./image/A2.jpg",
  },
  {
    title: "종합민원센터 A3",
    latlng: new kakao.maps.LatLng(35.91237953429198, 128.80689387273955),
    testing: "A3 종합민원센터입니다.",
    content: "Student Service Center\n하양읍 금락리 산 30(지번)",
    image: "./image/A3.jpg",
  },
  {
    title: "팔각정 A4",
    latlng: new kakao.maps.LatLng(35.91239026027938, 128.80797688997887),
    testing: "A4 팔각정입니다.",
    content: "Octagonal Pavilion\n하양읍 금락리 산 30(지번)",
    image: "./image/A4.jpg",
  },
  {
    title: "제1학생회관 A6",
    latlng: new kakao.maps.LatLng(35.91324647285549, 128.80736775292746),
    testing: "A6 제1학생회관입니다.",
    content: "Student Union 1\n하양읍 금락리 300(지번)",
    image: "./image/A6.jpg",
  },
  {
    title: "제2학생회관 A7",
    latlng: new kakao.maps.LatLng(35.91346107464277, 128.80687970411043),
    testing: "A7 제2학생회관입니다.",
    content: "Student Union 2\n하양읍 금락리 300(지번)",
    image: "./image/A7.jpg",
  },
  {
    title: "중앙도서관 A8",
    latlng: new kakao.maps.LatLng(35.913133318861476, 128.80635439582338),
    testing: "A8 중앙도서관입니다.",
    content: "Central Library\n하양읍 금락리 300(지번)",
    image: "./image/A8.jpg",
  },
  {
    title: "종합강의동 A9",
    latlng: new kakao.maps.LatLng(35.91280513411869, 128.8054081551566),
    testing: "A9 종합강의동입니다.",
    content: "바이오메디대학\n하양읍 금락리 300(지번)",
    image: "./image/A9.jpg",
  },
  {
    title: "사육장 A10",
    latlng: new kakao.maps.LatLng(35.91373114193103, 128.80465103130695),
    testing: "A10 사육장입니다.",
    content: "Animal Breeding House\n하양읍 금락리 300(지번)",
    image: "./image/A10.jpg",
  },
  {
    title: "영선실 A13",
    latlng: new kakao.maps.LatLng(35.91520177846464, 128.8046789049157),
    testing: "A13 영선실입니다.",
    content: "Carpenter Room\n하양읍 금락리 300(지번)",
    image: "./image/A13.jpg",
  },
];

A_positions.forEach(function (pos) {
  // A동 마커 관리
  // 마커 생성
  var imageSize = new kakao.maps.Size(25, 25); // 마커 이미지 크기
  var markerImage = new kakao.maps.MarkerImage(imageA, imageSize); // 마커 이미지를 생성
  var marker = new kakao.maps.Marker({
    position: pos.latlng,
    title: pos.title,
    image: markerImage, // 마커 이미지
  });

  var overlay = createCustomOverlay(pos, map, marker);
});

// C1~C13 마커 배열
var C_positions = [
  {
    title: "성토마스모어관 C1",
    latlng: new kakao.maps.LatLng(35.91285338996254, 128.81102807409826),
    testing: "C1 성토마스모어관입니다.",
    content: "사회과학대학\n하양읍 금락리 300(지번)",
    image: "./image/C1.jpg",
  },
  {
    title: "성라이문도관 C2",
    latlng: new kakao.maps.LatLng(35.91323722696411, 128.81111990311086),
    testing: "C2 성라이문도관입니다.",
    content: "St. Raymund Hall\n하양읍 금락리 300(지번)",
    image: "./image/C2.jpg",
  },
  {
    title: "체육관 C3",
    latlng: new kakao.maps.LatLng(35.91474991084054, 128.81209319334653),
    testing: "C3 체육관입니다.",
    content: "Gymnasium\n하양읍 금락리 300(지번)",
    image: "./image/C3.jpg",
  },
  {
    title: "성비토관 C4",
    latlng: new kakao.maps.LatLng(35.91483529836176, 128.812704392617),
    testing: "C4 성비토관(무용관)입니다.",
    content: "무용학과\n하양읍 금락리 300(지번)",
    image: "./image/C4.jpg",
  },
  {
    title: "사제관 C5",
    latlng: new kakao.maps.LatLng(35.91548087126881, 128.81261942910663),
    testing: "C5 사제관입니다.",
    content: "Rectory\n하양읍 금락리 300(지번)",
    image: "./image/C5.jpg",
  },
  {
    title: "신학관 C6",
    latlng: new kakao.maps.LatLng(35.91547121516278, 128.81206533949745),
    testing: "C6 신학관입니다.",
    content: "소프트웨어융합대학\n하양읍 금락리 산 35(지번)",
    image: "./image/C6.jpg",
  },
  {
    title: "성예로니모관 C7",
    latlng: new kakao.maps.LatLng(35.91382910493702, 128.80996475774512),
    testing: "C7 성예로니모관입니다.",
    content: "St. Jerome Hall\n하양읍 금락리 300(지번)",
    image: "./image/C7.jpg",
  },
  {
    title: "창고 C8",
    latlng: new kakao.maps.LatLng(35.91401903014382, 128.80932106989695),
    testing: "C8 창고입니다.",
    content: "Warehouse\n하양읍 금락리 300(지번)",
    image: "./image/C8.jpg",
  },
  {
    title: "성요한보스코관 C9",
    latlng: new kakao.maps.LatLng(35.91419160289952, 128.80878221732883),
    testing: "C9 성요한보스코관입니다.",
    content: "사범대학\n하양읍 금락리 300(지번)",
    image: "./image/C9.jpg",
  },
  {
    title: "제3학생식당 C10",
    latlng: new kakao.maps.LatLng(35.914636201876796, 128.80917727680108),
    testing: "제3학생식당입니다.",
    content: "사대식당\n하양읍 금락리 300(지번)",
    image: "./image/C10.jpg",
  },
  {
    title: "미래인재관 C11",
    latlng: new kakao.maps.LatLng(35.91494218325643, 128.8087549999996),
    testing: "C11 미래인재관입니다.",
    content: "Human Resorces Educationn Center\n하양읍 금락리 300(지번)",
    image: "./image/C11.jpg",
  },
  {
    title: "성야고보관 C12",
    latlng: new kakao.maps.LatLng(35.91464888161212, 128.80758797623434),
    testing: "C12 성야고보관입니다.",
    content: "사회과학대학\n하양읍 금락리 300(지번)",
    image: "./image/C12.jpg",
  },
  {
    title: "성마태오관 C13",
    latlng: new kakao.maps.LatLng(35.91512838603868, 128.80716133303733),
    testing: "C13 성마태오관입니다.",
    content: "St. Matthew Hall\n하양읍 금락리 300(지번)",
    image: "./image/C13.jpg",
  },
];

C_positions.forEach(function (pos) {
  // C동 마커 관리
  // 마커 생성
  var imageSize = new kakao.maps.Size(19, 21); // 마커 이미지 크기
  var markerImage = new kakao.maps.MarkerImage(imageC, imageSize); // 마커 이미지를 생성
  var marker = new kakao.maps.Marker({
    position: pos.latlng,
    title: pos.title,
    image: markerImage, // 마커 이미지
  });

  var overlay = createCustomOverlay(pos, map, marker);
});
