// header의 menu icon에 클릭 이벤트를 추가합니다.
let menuIcon = document.querySelector('.menu-icon'); //menuIcon에 menu-icon 클래스를 가져옵니다.
let menu = document.querySelector('.toggleNav'); //menu에 toggleNav 클래스를 가져옵니다.

// menuIcon을 클릭했을 때 menu에 active 클래스를 추가
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
})


// toggleNav 엘리먼트를 가져옵니다.
let toggleNav = document.querySelector('.toggleNav');

// 화면 크기가 변경될 때마다 실행될 함수입니다.
function handleResize() {
    // 현재 화면 너비를 가져옵니다.
    let screenWidth = window.innerWidth;

    // 화면 너비가 767px 이상인 경우에만 toggleNav를 숨깁니다.
    if (screenWidth >= 767) {
        toggleNav.classList.remove('active'); // toggleNav가 열려있다면 닫습니다.
        toggleNav.style.display = 'none'; // toggleNav를 숨깁니다.
    } else {
        toggleNav.style.display = 'block'; // toggleNav를 보이게 합니다.
    }
}

// 초기 화면 크기에 따라 toggleNav를 숨깁니다.
handleResize();

// 화면 크기가 변경될 때마다 handleResize 함수를 실행합니다.
window.addEventListener('resize', handleResize);







// footer의 social icon에 마우스 이벤트를 추가합니다.

let socialIcons = document.querySelectorAll('.social-icon'); // social-icon 클래스를 가진 모든 엘리먼트를 가져옵니다.
socialIcons = Array.from(socialIcons); // NodeList를 배열로 변환합니다.

// 기본 이미지 경로를 배열에 저장합니다.
let defaultImages = [
    './image/instagram-basic.png',
    './image/github-basic.png',
    './image/behance-basic.png'
];

// 마우스 오버 시 변경될 이미지 경로를 배열에 저장합니다.
function handleIconMouseEvents(icon, index) {
    let hoverImages = [
        './image/instagram-hover.png',
        './image/github-hover.png',
        './image/behance-hover.png'
    ];

    // 마우스가 아이콘 위로 올라가면 이미지를 hover 이미지로 변경합니다.
    icon.addEventListener('mouseover', () => {
        icon.src = hoverImages[index];
    });

    // 마우스가 아이콘에서 벗어나면 이미지를 기본 이미지로 변경합니다.
    icon.addEventListener('mouseout', () => {
        icon.src = defaultImages[index];
    });
}

// 각 아이콘에 대해 마우스 이벤트 핸들러를 등록합니다.
socialIcons.forEach((icon, index) => {
    handleIconMouseEvents(icon, index);
});

// Instagram 아이콘 클릭 시 새 창으로 Instagram 페이지를 엽니다.
document.getElementById('instagram').addEventListener('click', () => {
    window.open('https://www.instagram.com/too_sign/');
});

// GitHub 아이콘 클릭 시 새 창으로 GitHub 페이지를 엽니다.
document.getElementById('github').addEventListener('click', () => {
    window.open('https://github.com/toosign00');
});

// Behance 아이콘 클릭 시 새 창으로 Behance 페이지를 엽니다.
document.getElementById('behance').addEventListener('click', () => {
    window.open('https://www.behance.net/692e34e6');
});