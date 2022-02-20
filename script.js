const skillsTab = document.querySelectorAll('.skills_tab li');
const skillsContents = document.getElementsByClassName('skills_content');
let bar = document.getElementsByClassName('bar');

// Scroll
const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  let windowTop = window.scrollY;
  if(windowTop >= headerHeight) {
    header.classList.add("scrollActive");
  }else{
    header.classList.remove("scrollActive");
  }
});

Array.from(skillsTab).forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const tabNum = tab.getAttribute('data-num');
    
    Array.from(skillsTab).forEach((v) => {
      v.classList.remove('on');
    });
    Array.from(skillsContents).forEach((t) => {
      t.classList.remove('on');
    });
    tab.classList.add('on');
    Array.from(skillsContents)[tabNum].classList.add('on');

    onTabBar(e);
  });
});

function onTabBar(item) {
  bar[0].style.left = item.currentTarget.offsetLeft + "px";
  bar[0].style.width = item.currentTarget.offsetWidth + "px";
  bar[0].style.top = item.currentTarget.offsetTop +  item.currentTarget.offsetHeight + "px";
}



// Project PopUp & Hover
const projectContents = document.querySelector('.project_contents');
const projectOverview = document.querySelector('.project_overview');
const overlay = document.querySelector('.overlay');
const popupClose = document.querySelector('.popup_close');

projectContents.addEventListener('mouseenter', function() {
  projectOverview.classList.add("hover");
});
projectContents.addEventListener('mouseleave', function() {
  projectOverview.classList.remove("hover");
});
projectContents.addEventListener('click', function() {
  overlay.classList.remove('hide');
});
popupClose.addEventListener('click', function() {
  overlay.classList.add('hide');
})

// FAQ accordion
const faqContent = document.getElementsByClassName('faq_content');

Array.from(faqContent).forEach((v) => {
  v.children[0].addEventListener('click', (e) => {
    Array.from(faqContent).forEach((item) => {
      if(item !== v) {
        item.children[1].classList.remove('active');
      }
    });

    e.target.nextElementSibling.classList.toggle('active');
  });
});
