const searchEl = document.querySelector('.search'); 
// 위 내용은 클래스가 .search인 요소를 찾아서 searchEl에 저장하라 는 의미
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    //Logic...
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder',' 통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});




// 스크롤 관련
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
        console.log('scroll!');
        if (window.scrollY > 500){
            //배지 숨기기
            // badgeEl.style.display = 'none';
            // gsap.to(요소,지속시간,옵션)
            gsap.to(badgeEl,.5, {
                opacity: 0,
                display :'none'
            });

            //버튼 보이기;
            gsap.to(toTopEl, .2, {
                x: 0
            });


        }else{
            // 배지 보이기
            // badgeEl.style.display = 'block';
            gsap.to(badgeEl,.5, {
                opacity: 1,
                display :'block'
            });

            //버튼숨기기

            gsap.to(toTopEl, .2, {
                x: 100
            });
         }
    },300));
// _.throttle(함수,시간) - 스크롤 될때 부하가 걸리지 않게 제어해줌.
//gsap은 시각적으로만 사라짐.실제는 아직있는것임.



toTopEl.addEventListener('click',function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});





const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
});
// 이미지가 천천히 하나씩 동적으로 생성되게 만드는 javascript코드


//new Swiper(선택자,옵션)


new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay:true,
    loop:true
});




new Swiper('.promotion .swiper-container', {
    // direction:'horizental ---기본값으로 안적어도 됨.'
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween:2, //슬라이드 사이 여백 10px
    centeredSlide: true, //1번슬라이드가 가운데 보이기
    loop:true,
    autoplay:{
    delay:1000
    },
   pagination:{
       prevEl:'.promotion .swiper-prev',
       nextel:'.promotion .swiper-next'
   }
});


new Swiper('.awards .swiper-container', {
    // direction:'horizontal' 기본값
    autoplay:true,
    loop:true,
    spaceBetween:30,    // 요소 사이 여백을 30px로 하겠다 라는 의미
    slidesPerView:6,     //하나의 화면에 몇개의 슬라이드를 보일것인가?
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }

});




function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }


function floatingObject(selector, delay, size){
    // gsap.to(요소,시간,옵션)
    gsap.to(
        selector,  //선택자
        random(1.5, 2.5), //애니메이션의 동작시간
        { // 옵션
            y:size ,  //y축으로 20px움직임.
            repeat: -1,  //-1은 무한 반복임.
            yoyo:true,   //한번 재생된 애니 메이션을 다시 반복하는것.
            ease: Power1.easeInOut,
            delay:random(0,delay)
        });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);



const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook:.8 //내가 감시하고 있는 요소가 뷰포트에 어떤지점에서 감시되었다는것을 판단할것인가 라는 옵션
       })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());
});


// const thisYear = document.querySelector(".this-year");
// thisYear.textContent = new Date().getFullYear(); //2021

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();