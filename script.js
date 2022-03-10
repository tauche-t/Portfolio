const skillsTab = document.querySelectorAll('.skills_tab li');
const skillsContents = document.getElementsByClassName('skills_content');
let bar = document.getElementsByClassName('bar');

// Scroll
const header = document.getElementById("header");
const headerHidden = document.getElementById("hidden_header");
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  let windowTop = window.scrollY;
  if(windowTop >= headerHeight) {
    headerHidden.classList.add("on");
  }else{
    headerHidden.classList.remove("on");
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
const projectContent = document.querySelectorAll('.project_content');
// const projectContents = projectContent.querySelector('.project_contents');
// const projectOverview = document.querySelector('.project_overview');
const overlay = document.querySelector('.overlay');
const popupContentsBox = document.querySelectorAll('.popup_contents_box');
const popupContents = document.querySelectorAll('.popup_contents_box');

popupContentsBox.forEach((e) => {
  const popupClose = e.querySelector('.popup_close');

  popupClose.addEventListener('click', function() {
    overlay.classList.add('hide');
  });
});

function DetailFadeIn(event) {
  const projectIndex = event.currentTarget.parentNode.parentNode.getAttribute('data-index');

  console.log(projectIndex);

  overlay.classList.remove('hide');

  popupContents.forEach((e) => {
    const popupIndex = e.getAttribute('data-index');
    e.classList.remove("contents_on");

    if(projectIndex === popupIndex) {
      e.classList.add("contents_on");
    }
  });
}

projectContent.forEach((e) => {
  const projectContents = e.querySelector('.project_contents');
  const projectOverview = e.querySelector('.project_overview');
  const detailBtn = e.querySelector('.project_btn li.detail_btn');

  projectContents.addEventListener('click', function(e) {
    const projectIndex = e.currentTarget.parentNode.parentNode.getAttribute('data-index');

    overlay.classList.remove('hide');

    popupContents.forEach((e) => {
      const popupIndex = e.getAttribute('data-index');
      e.classList.remove("contents_on");

      if(projectIndex === popupIndex) {
        e.classList.add("contents_on");
      }
    });
  });

  detailBtn.addEventListener('click', function(e) {
    e.preventDefault();
  
    const projectIndex = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-index');
  
    overlay.classList.remove('hide');
  
    popupContents.forEach((e) => {
      const popupIndex = e.getAttribute('data-index');
      e.classList.remove("contents_on");
  
      if(projectIndex === popupIndex) {
        e.classList.add("contents_on");
      }
    });
  });

  projectContents.addEventListener('mouseenter', function() {
    projectOverview.classList.add("hover");
  });
  projectContents.addEventListener('mouseleave', function() {
    projectOverview.classList.remove("hover");
  });
});

// projectContents.addEventListener('click', function() {
//   overlay.classList.remove('hide');
// });

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

// Text Animation
const textWrapper = document.querySelectorAll('.text_wrapper');

textWrapper.forEach((v) => {
  const letters = v.querySelector('.letters');

  letters.innerHTML = letters.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
  .add({
    targets: '.letters .letter',
    translateY: ["1.2em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.letters',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});

