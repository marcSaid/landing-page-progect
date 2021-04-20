# Project summary

Building the JavasScript code to control dynamically the contents of the basic HTML and CSS

## Edits implemented on basic HTML & CSS codes

1- HTML basic code had 3 section nodes, I added 2 more.

2- No changes performed on the basic CSS code  

## General description
Using selector through all sections through the tag <section>

```
document.querySelectorAll('section')
```
then determining the navbar location inside ul
```
document.querySelector('#navbar__list')
```

after that started the creation of the navbar elements (li, a) and adding event listener to the elements to scroll the view port to the corresponding section
```
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
```
The CSS code had styling for menu__link class, so I attached the class to the <a> that is corresponding to the section in the view port
```
//add class to the a in first li
document.querySelector('li').querySelector('a').classList.add('menu__link');

```

in the end it was the creation of the logic of adding the event listener to each section while in the view port (>0 && <200) to add a class= "your-active-class", and remove the same class from all other sections using iteration
and to do the same to the corresponding nevbar targets using class = "menu__link" to follow the section in the view port
```
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
```

## Resources
www.w3schools.com

https://javascript.info/dom-attributes-and-properties

https://stackoverflow.com

https://developer.mozilla.org
