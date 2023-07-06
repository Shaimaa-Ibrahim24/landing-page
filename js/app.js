/**
 * 
 * Manipulating the DOM exercise. 
 
 * Exercise programmatically builds navigation,
 
 class navBar
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

}
 * Define Global Variables
 *
*/   
// Select all sections
const sections = document.querySelectorAll('section'); 
// Get the unordered list<ul> by Its Id
const myList = document.getElementById('navbar__list'); 
// Create documentFragment() to append created nav items 
const docFrag = document.createDocumentFragment(); 
let numberOfListElements = sections.length;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/   
// Make function to create lists
function createLists() {
	for (section of sections) { 
	//Create li elements
         listElements = document.createElement('li');  
		 //Use value of each section attribute(data-nav) to create text inside each anchor<a>tag
		 secText = section.getAttribute('data-nav'); 
		 //Use value of each section id attribute to create the value of anchor href
		 secValue = section.getAttribute('id');
		 
		 listElements.innerHTML = `<a class='menu__link' href='#${secValue}'>${secText}</a>`  
		 //Append listElements to previously created docFrag
		 docFrag.appendChild(listElements); 
		 // Then append docFrag to myList(unorderd list<ul>)
		 myList.appendChild(docFrag);
	}
}

createLists();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/ 
function getBound() {
for(section of sections){  

let secTop = section.getBoundingClientRect();
	if(secTop.top > 0 && secTop.top <= 200) { 
	   section.classList.remove('your-active-class');
		section.classList.add('your-active-class');
	
		
	
} 
}
} 
window.addEventListener('scroll', getBound);



// build the nav 



// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */  

 

// Build menu 

// Scroll to section on link click

// Set sections as active


