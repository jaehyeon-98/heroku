

// 검색창과 검색 결과를 출력할 요소 가져오기
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');
const searchButton = document.getElementById('search-button');

// 결과 창 숨김 상태 변수 추가
let isSearchResultVisible = false;



// 검색 창 입력 이벤트 등록하기
searchInput.addEventListener('input', function() {
    const keyword = searchInput.value;
    if (keyword.length > 0) {
        showSearchResult();
        search(keyword); // 검색 결과 업데이트
    } else {
        hideSearchResult();
        clearSearchResult(); // 검색 결과 초기화
    }
});


// 결과 창 보이기 함수
function showSearchResult() {
    if (!isSearchResultVisible) {
        searchResult.style.maxHeight = '200px';
        isSearchResultVisible = true;
    }
}

// 결과 창 숨기기 함수
function hideSearchResult() {
    if (isSearchResultVisible) {
        searchResult.style.maxHeight = '20px';
        isSearchResultVisible = false;
    }
}


// 검색 버튼 클릭 이벤트 등록하기
searchButton.addEventListener('click', function() {
    const keyword = searchInput.value;
    if (keyword.trim() === '') {
        clearSearchResult(); // 이전 검색 결과 지우기
        return;
    }
    search(keyword);
    moveToLocation(keyword);
});

// 검색 엔터 이벤트 등록하기
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const keyword = searchInput.value;
        if (keyword.trim() === '') {
            clearSearchResult(); // 이전 검색 결과 지우기
            return;
        }
        search(keyword);
        moveToLocation(keyword);
    }
});

// 이전 검색 결과 지우기 함수
function clearSearchResult() {
    searchResult.innerHTML = ''; // 결과 창 내용 비우기
}



// 전역 변수로 이전 마커와 커스텀 오버레이 선언
var previousMarker = null;
var previousOverlay = null;

// 검색 결과를 클릭하면 해당 마커로 지도 중심 이동
function moveToLocation(keyword) {
    // 이전에 생성된 마커와 커스텀 오버레이 제거
    if (previousMarker) {
        previousMarker.setMap(null);
        previousMarker = null;
    }
    if (previousOverlay) {
        previousOverlay.setMap(null);
        previousOverlay = null;
    }

    var matches = getMatchingMarkers(keyword);
    if (matches.length > 0) {
        var marker = new kakao.maps.Marker({
            position: matches[0].latlng,
            map: map
        });

        var position = marker.getPosition();
        map.setCenter(position);

        var overlay = createCustomOverlay(matches[0], map, marker);
        overlay.setMap(map);

        // 이전 마커와 커스텀 오버레이 저장
        previousMarker = marker;
        previousOverlay = overlay;
    }
}




  
// 검색 함수 정의하기
function search(keyword) {
    var query = keyword;
    var matches = getMatchingMarkers(query); // 일치하는 마커 가져오기

    // 검색 결과 초기화
    searchResult.innerHTML = "";

    // 검색 결과가 없을 경우
    if (matches.length == 0) {
        searchResult.innerHTML = "검색 결과가 없습니다.";
        return;
    }

    // 검색 결과 출력
    matches.forEach(function (marker) {
        var div = document.createElement("div");
        div.innerHTML = marker.title;
        div.addEventListener("click", function () {
            // 검색 결과를 클릭하면 해당 마커로 지도 중심 이동
            var position = marker.latlng; // 마커의 위치 가져오기
            map.setCenter(position); // 지도 중심 이동

            // 이전에 생성된 마커와 커스텀 오버레이 제거
            if (previousMarker) {
                previousMarker.setMap(null);
                previousMarker = null;
            }
            if (previousOverlay) {
                previousOverlay.setMap(null);
                previousOverlay = null;
            }

            var overlay = createCustomOverlay(marker, map);
            overlay.setMap(map);

            // 이전 마커와 커스텀 오버레이 저장
            previousMarker = marker;
            previousOverlay = overlay;
        });
        searchResult.appendChild(div);
    });
}



function getMatchingMarkers(keyword) {
    var query = keyword;
    var matches = []; // 일치하는 마커를 저장할 배열

    // D_positions 배열에서 검색어와 일치하는 마커 찾기
    var dMatches = D_positions.filter(function (marker) {
        return marker.title.includes(query);
    });
    matches.push(...dMatches); // 일치하는 마커를 matches 배열에 추가

    // B_positions 배열에서 검색어와 일치하는 마커 찾기
    var bMatches = B_positions.filter(function (marker) {
        return marker.title.includes(query);
    });
    matches.push(...bMatches); // 일치하는 마커를 matches 배열에 추가

    // E_positions 배열에서 검색어와 일치하는 마커 찾기
    var eMatches = E_positions.filter(function (marker) {
        return marker.title.includes(query);
    });
    matches.push(...eMatches); // 일치하는 마커를 matches 배열에 추가

    // A_positions 배열에서 검색어와 일치하는 마커 찾기
    var aMatches = A_positions.filter(function (marker) {
        return marker.title.includes(query);
    });
    matches.push(...aMatches); // 일치하는 마커를 matches 배열에 추가

    // C_positions 배열에서 검색어와 일치하는 마커 찾기
    var cMatches = C_positions.filter(function (marker) {
        return marker.title.includes(query);
    });
    matches.push(...cMatches); // 일치하는 마커를 matches 배열에 추가

    return matches;
}