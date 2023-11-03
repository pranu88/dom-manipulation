let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
 const mainEl = document.querySelector('#main-title')
 mainEl.textContent = 'Practice DOM'
  // Part 2
  
  const bodyEl = document.querySelector('body')
  bodyEl.style.backgroundColor = 'pink'

  // Part 3
  const favEl = document.querySelector('#favorite-things')
  favEl.removeChild(favEl.children[5])
  // Part 4
  const specialEl = document.querySelectorAll('.special-title')
  specialEl.forEach((element)=>
  element.style.fontSize = '2rem')
  // Part 5
  const pastRaces =document.querySelector('#past-races')
  pastRaces.removeChild(pastRaces.children[3])

  // Part 6
  const newLi = document.createElement('li')
  newLi.textContent = 'Pittsburgh'
  pastRaces.appendChild(newLi)

  // Part 7
  const blogPost = document.querySelector('.main')
  const newdiv = document.createElement('div')
  newdiv.setAttribute('class','blog-post purple') 
  let newh1 = document.createElement('h1')
  newh1.textContent = 'Pittsburgh'  
  const newP = document.createElement('p')
  newP.textContent = 'Fall is a beautiful season to go on a drive through pittsburgh'
  blogPost.appendChild(newdiv)
  newdiv.appendChild(newh1)
  newdiv.appendChild(newP)  
  // Part 8
  const quote = document.querySelector('#quote-title')
  quote.addEventListener('click', randomQuote)

  // Part 9
  const newClass = document.querySelectorAll('.blog-post')
  
  newClass.forEach(blog => {
    blog.addEventListener('onmouseout', () => {blog.classList.toggle('.purple');})
    blog.addEventListener('click',() => {blog.classList.toggle('.red');}) 
    
  }); 
  


});
