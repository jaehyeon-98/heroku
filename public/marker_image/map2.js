// 지도 생성
var mapContainer = document.getElementById("map");
var mapOption = {
  center: new kakao.maps.LatLng(35.9117, 128.8076),
  level: 3,
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var marker = null; // 초기에 마커를 생성하지 않음

// 현재 위치로 이동하는 버튼 추가
var btnGeo = document.createElement("button"); // 버튼 생성
btnGeo.textContent = "현재 위치";
btnGeo.classList.add("lbutton-style");

var currentOverlay = null;

// 버튼 이벤트 추가
btnGeo.addEventListener("click", goToMyLocation);

// 버튼 지도에 추가
mapContainer.appendChild(btnGeo);

// 현재 위치로 이동하는 함수
function goToMyLocation() {
  if (navigator.geolocation) {
    // 위치 정보 가져오기
    navigator.geolocation.getCurrentPosition(function (position) {
      // 현재 위치로 지도 이동
      var latlng = new kakao.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      map.setCenter(latlng);

      if (marker === null) {
        marker = new kakao.maps.Marker({
          position: latlng,
          image: new kakao.maps.MarkerImage(
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            new kakao.maps.Size(24, 35),
            { offset: new kakao.maps.Point(13, 34) }
          ),
          latlng: latlng, // 위치 정보 추가
        });
      
        marker.setMap(map);
      } else {
        marker.setPosition(latlng);
      }
      
    });
  } else {
    alert("현재 위치 정보를 가져올 수 없습니다");
  }
}

// 버튼 클릭 시 현재 위치로 이동
btnGeo.addEventListener("click", goToMyLocation);


// 커스텀 오버레이 생성 함수
function createCustomOverlay(pos, map, marker) {

  // content HTMLElement 생성
  var content = document.createElement("div");
  content.className = "wrap";

  var info = document.createElement("div");
  info.className = "info";

  var title = document.createElement("div");
  title.className = "title";
  title.appendChild(document.createTextNode(pos.title));

  var closeBtn = document.createElement("div");
  closeBtn.className = "close";
  closeBtn.title = "닫기";
  // 닫기 이벤트 추가
  closeBtn.onclick = function () {
    overlay.setMap(null);
  };

  title.appendChild(closeBtn);
  info.appendChild(title);

  var body = document.createElement("div");
  body.className = "body";

  var imgDiv = document.createElement("div");
  imgDiv.className = "img";

  var img = document.createElement("img");
  img.src = pos.image; // 마커별 이미지 URL 설정
  img.width = 80;
  img.height = 80;
  imgDiv.appendChild(img);

  var desc = document.createElement("div");
  desc.className = "desc";

  var ellipsis1 = document.createElement("div");
  ellipsis1.className = "ellipsis";
  ellipsis1.appendChild(document.createTextNode(pos.testing));

  var ellipsis2 = document.createElement("div");
  ellipsis2.className = "jibun ellipsis";
  ellipsis2.appendChild(document.createTextNode(pos.content));

  var link = document.createElement("a");
  // 마커 위치를 이용하여 링크 동적 생성
  var latLng = marker.getPosition();

  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var isAndroid = /Android/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS || isAndroid) {
    var appLink = "kakaomap://route?sp=" +
    "&ep=" +
    latLng.getLat() +
    "," +
    latLng.getLng() +
    "&by=FOOT";
  
    link.href = appLink;

    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = appLink;
      setTimeout(function() {
      }, 3000); 
    });
  } else {
    link.href =
      "https://map.kakao.com/link/to/" + pos.title +
      latLng.getLat() +
      "," +
      latLng.getLng();
  }

  // 길찾기 버튼 클릭 이벤트 추가
  link.addEventListener("click", function (event) {
    event.preventDefault();

    if (isIOS || isAndroid) {
      window.location.href = link.href;
    } else {
      window.open(link.href);
    }
  });

  link.appendChild(document.createTextNode("길찾기"));

  desc.appendChild(ellipsis1);
  desc.appendChild(ellipsis2);
  desc.appendChild(link);
  body.appendChild(imgDiv);
  body.appendChild(desc);
  info.appendChild(body);
  content.appendChild(info);

   // 커스텀 오버레이 생성
   var overlay = new kakao.maps.CustomOverlay({
    content: content,
    position: pos.latlng, // pos 객체의 위치 정보 사용
  });


  // 지도에 마커를 추가
  marker.setMap(map);

  // 마커 클릭 이벤트 추가
  kakao.maps.event.addListener(marker, "click", function () {
    if (currentOverlay !== null) {
      currentOverlay.setMap(null);
    }
    // 커스텀 오버레이를 표시
    overlay.setMap(map);

    currentOverlay = overlay;
  });
  

  return overlay;
}

