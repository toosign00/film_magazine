class ParallaxScroll {
    constructor(imgSelector, startScalingAt, scalingSpeed) {
        this.parallaxImg = document.querySelector(imgSelector);
        this.startScalingAt = startScalingAt;
        this.scalingSpeed = scalingSpeed;
        this.bindEvents();
        this.setStartScalingAt();
    }

    bindEvents() {
        document.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.setStartScalingAt.bind(this));
    }

    setStartScalingAt() {
        const screenWidth = window.innerWidth;
        const isImg2 = this.parallaxImg.classList.contains('parallax-img2');

        if (screenWidth >= 1024) {
            this.startScalingAt = isImg2 ? 5600 : 530; // 데스크탑 분기점
        } else if (screenWidth >= 768) {
            this.startScalingAt = isImg2 ? 4700 : 400; // 태블릿 분기점
        } else if (screenWidth >= 480) {
            this.startScalingAt = isImg2 ? 3200 : 300; // 중간 모바일 분기점
        } else {
            this.startScalingAt = isImg2 ? 2400 : 200; // 작은 모바일 분기점
        }
    }

    handleScroll() {
        this.setStartScalingAt(); 
        const scrollPosition = window.scrollY;

        if (scrollPosition > this.startScalingAt) {
            let scale = 1 - (scrollPosition - this.startScalingAt) / this.scalingSpeed;
            scale = scale < 0.65 ? 0.65 : scale;
            this.parallaxImg.style.transform = `scale(${scale})`;
        } else {
            this.parallaxImg.style.transform = 'scale(1)';
        }
    }
}

window.addEventListener('scroll', function () {
    console.log(window.scrollY) // 콘솔에 현재 스크롤 위치 출력
});

const main1ParallaxScroll = new ParallaxScroll('.parallax-img', 0, 1300);
const otherParallaxScroll = new ParallaxScroll('.parallax-img2', 0, 1300);
// 이미지에 마우스 호버시 다른 이미지들을 어둡게 만드는 이벤트 함수
const images = document.querySelectorAll('.img-container img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        images.forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.classList.add('dimmed');
            }
        });
    });

    img.addEventListener('mouseout', () => {
        images.forEach(otherImg => {
            otherImg.classList.remove('dimmed');
        });
    });
});



// IntersectionObserver를 사용하여 요소가 화면에 보이는지 감지
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target;
        if (entry.isIntersecting) {
            title.classList.add('animate'); 
        } else {
            title.classList.remove('animate');
        }
    });
});

// 관찰 대상 요소 선택
const title2 = document.querySelector('.title2');

// 관찰 시작
observer.observe(title2);


// 모달 창 이벤트 함수
const modal = document.getElementById('modal'); // 모달 창
const modalImg = document.getElementById('modal-img'); // 모달 창 이미지
const modalImgImages = document.querySelectorAll('.img-container img'); // 이미지
const closeBtn = document.getElementsByClassName('close')[0]; // 닫기 버튼
const modalContent = document.querySelector('.modal-content'); // 모달 창 내용
const body = document.querySelector('body'); // body

// 이미지 클릭시 모달 창 열기
images.forEach(img => {
    img.onclick = function () { // 이미지 클릭시
        modal.style.display = 'block'; // 모달 창 보이기
        modalImg.src = this.src; // 모달 창 이미지에 클릭한 이미지 소스 넣기
        modalContent.classList.add('modal-content'); // 클래스 추가
        setTimeout(() => { // 0.1초 후에 스케일을 1로 변경
            modalContent.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
        body.style.overflow = 'hidden';
    }
});

// 닫기 버튼 클릭시 모달 창 닫기
closeBtn.onclick = function () {
    modalContent.style.transform = 'translate(-50%, -50%) scale(0)'; // 스케일을 0으로 변경
    setTimeout(() => { // 0.3초 후에 모달 창 닫기
        modal.style.display = 'none'; // 모달 창 숨기기
        modalContent.classList.remove('modal-content'); // 클래스 제거
        body.style.overflow = 'auto'; // 스크롤 가능하게 변경
    }, 300);
}

// 모달 창 외부 클릭시 모달 창 닫기
window.onclick = function (event) {
    if (event.target == modal) {
        modalContent.style.transform = 'translate(-50%, -50%) scale(0)'; // 스케일을 0으로 변경
        setTimeout(() => { // 0.3초 후에 모달 창 닫기
            modal.style.display = 'none'; // 모달 창 숨기기
            modalContent.classList.remove('modal-content'); // 클래스 제거
            body.style.overflow = 'auto'; // 스크롤 가능하게 변경
        }, 300);
    }
}


// 타이핑 효과 함수
let content = "사진, 그 순간을 담다.";
let text = document.querySelector(".typing-text");
let cursor = document.querySelector(".cursor");

let i = 0;

function typing() {
    if (i < content.length) {
        let txt = content[i++];
        text.innerHTML += txt;
    } else {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(typing, 100);