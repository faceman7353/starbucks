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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022