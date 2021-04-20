/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections =  document.querySelectorAll('section'); //Nodelist of all sections
const fragment = document.createDocumentFragment();
const headerBar = document.querySelector('#navbar__list');

//Create li, a, innerHTML for a and addEventListener to each a
sections.forEach((section, index) => {
  //create li element
  let li = document.createElement('li');
  //create a element
  let a_Attribute = document.createElement('a');
  //create addEventListener
  a_Attribute.addEventListener("click", ()=>{
    section.scrollIntoView({behavior: 'smooth'});
  })
  //collect the attribute data-nav of each section
  let link = section.getAttribute('data-nav');
  //add the name of the section as text to the node through document.createTextNode()
  let nodeText = document.createTextNode(link);
  li.appendChild(a_Attribute).appendChild(nodeText);
  fragment.appendChild(li);
  //widen the padding of each a
  a_Attribute.style.padding = '1em';
});
//append all created li (inside the fragment) to the ul
headerBar.appendChild(fragment);
//set background color for navbar
headerBar.style.backgroundColor = 'rgba(136,203,171,1)';

//add class to the a in first li
document.querySelector('li').querySelector('a').classList.add('menu__link');
//collect all li and all a
const all_Li = document.querySelectorAll('li');
const all_a = document.querySelectorAll('a');

//Add event listener for the scroll
window.addEventListener('scroll', ()=>{
  //Iterate through the sections
  sections.forEach((s, index) => {
    //Get each section location in the view port
    const rect = s.getBoundingClientRect();
    if(rect.top > 0 && rect.top < 200){
      //Remove class "your-active-class" from all sections through iteration
      sections.forEach((active_s, i) => {
        active_s.classList.remove('your-active-class');
      });
      //add class "your-active-class" to the section in the view port > 0 and <200
      s.classList.add('your-active-class');
      let targetList = document.querySelector('.your-active-class');
      let sectionLinkingToNav = targetList.getAttribute('data-nav');
      //iterate to remove all menu__link class from all a except
      //for the one with the innerHTML = same section
      all_a.forEach((a_tag) => {
        if(sectionLinkingToNav === a_tag.innerHTML){
          a_tag.classList.add('menu__link');
        }else{
          a_tag.classList.remove('menu__link');
        }
      });
    }
  });
});
