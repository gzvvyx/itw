/**
 * @author xnespo10
 * @brief js function that work with IntersectionObserver
*/

//header observer
const nav = document.querySelector("nav");//global
const header = document.querySelector("header");//global

const headerOptions = {
  threshold: "0.9",
};

const headerObserver = new IntersectionObserver(function(
  entries,
  self
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
},
headerOptions);

headerObserver.observe(header);
//end of header observer
//
//
//section observer
window.addEventListener("resize", function(){
  if(window.innerWidth > 568){


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("li");
const sectionConfig = {
  threshold: 0.2,
};

const sectionObserver = new IntersectionObserver(function
(entries, self) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLi.forEach((link) => {
        if(entry.target.id === link.dataset.ref){
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    } else {
      if(entry.target.id === "about"){
        navLi.forEach((link) => {
          link.classList.remove("active");
        })
      }
    }
  });
}, sectionConfig);

sections.forEach(section => {
  sectionObserver.observe(section);
});

}
});
//end of section observer
//
//
//start of togglebutton
const toggleButton = document.querySelector(".navbtn");
const navbarLinks = document.querySelector(".navlinks");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("navshow");
  toggleButton.classList.toggle("color");
})