console.log ('You\'re JS Is connected to your html file')

const gridCtner = document.querySelector('#gridContainer')

for(let i=0 ; i < 256 ; i++) { 
  
  let divForGrid = document.createElement('div') // i create a new div stored in a variable
  divForGrid.setAttribute('class' , 'squareDivs') // each new div i create i need to add a class to it
  gridCtner.appendChild(divForGrid) // then i need to append it to the gridctner
}
// This loop works because each iteration creates a new div and assigns it to the variable ; this is just reassigning the variable to a new div.
// When the variable is redeclared in the next iteration, it now points to the new div,
// but the previous div remains in the DOM even though the variable no longer references it.

let canDraw = false 

gridCtner.addEventListener('dragstart', (e) => e.preventDefault());


gridCtner.addEventListener('mousedown' , function (e) {
 canDraw = true
 //let , const , and var is declaring a variable , don't use it if you want to reassign a variable value
 //just type the variable name
}
)

function getRandomNeonColor() {
  const hue = Math.floor(Math.random() * 360); // 0-359
  const saturation = '100%'; // full saturation = bright color
  const lightness = '50%';   // middle brightness
  return `hsl(${hue}, ${saturation}, ${lightness})`;
}

// Usage in your hover handler:
// e.target.style.backgroundColor = getRandomNeonColor();

let colorNormal = true 
let colorNeon = false 
const squares = document.querySelectorAll('.squareDivs')


gridCtner.addEventListener('mousemove', function (e){
  if (!canDraw) {return}
  if (!e.target.classList.contains('squareDivs')) {return}
  if (colorNormal === true && colorNeon === false ) {
    e.target.style.backgroundColor = 'black'
    // document.body.style.backgroundColor = 'white';
    
  }
  if(colorNeon === true && colorNormal === false ) {
  // document.body.style.backgroundColor = '#111111';
  e.target.style.backgroundColor = getRandomNeonColor();
  e.target.style.boxShadow = `0 0 10px ${e.target.style.backgroundColor}, 0 0 20px ${e.target.style.backgroundColor}`;}
  })

// gridCtner.addEventListener('mouseup', function (e){
//   canDraw = false 
// })

window.addEventListener('mouseup', () => canDraw = false);


let normalMode = document.createElement('button')
normalMode.textContent = 'Normal Mode'
normalMode.addEventListener('click' , function (e){
colorNormal = true 
colorNeon = false 
document.body.style.backgroundColor = 'white';
squares.forEach(square => {
  square.style.backgroundColor = 'white'
  square.style.boxShadow = 'none'
}
)


})

let darkMode = document.createElement('button')
darkMode.textContent= 'Dark Mode'
darkMode.addEventListener('click', function (e){
  colorNeon = true 
  colorNormal = false
  document.body.style.backgroundColor = '#111111';
  squares.forEach( square => {
    square.style.backgroundColor = '#242424'
    square.style.boxShadow = 'none'}

  )


})

let reset = document.createElement('button')
reset.textContent = 'Reset'
reset.addEventListener('click', function (e) {
  if (colorNormal === true && colorNeon === false) {
   squares.forEach(square =>
    square.style.backgroundColor = 'white'
   )}
  if (colorNormal === false && colorNeon === true) {
    squares.forEach( square => {
      square.style.backgroundColor = '#242424'
      square.style.boxShadow = 'none'
    }
    )
  

  }
})

// gridCtner.append(normalMode)
// gridCtner.append(darkMode)

gridCtner.parentNode.insertBefore(normalMode, gridCtner);
gridCtner.parentNode.insertBefore(darkMode, gridCtner);
gridCtner.parentNode.insertBefore (reset,gridCtner)




//next step here is to append these buttons at the top of the grid container





