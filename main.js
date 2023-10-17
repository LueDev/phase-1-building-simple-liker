// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  
document.addEventListener('DOMContentLoaded', () => {

  //Hide Error modal by toggling .hidden class
  const errModal = document.querySelector('#modal')
  
  //Var to hold all like-glyphs
  const allHearts = document.querySelectorAll('.like-glyph')
  
  //For each like-glyph, add an event listener.
  //NOTE: The event listener can't be added to a collection, only on an individual element at a time
  allHearts.forEach(heart => heart.addEventListener('click', (event)=>{
    mimicServerCall()
      .then((res) => {
        console.log(res)
        heart.classList.toggle('activated-heart')
      })
      
      .catch((err) => {
        console.log(err)
        errModal.classList.toggle('hidden')
        setTimeout(()=>{
          errModal.classList.toggle('hidden')
        }, 3000)
      })
  }))

})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
