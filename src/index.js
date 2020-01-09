// console.log('%c HI', 'color: firebrick')
window.addEventListener('load',() => {
  fetchPics()
  fetchBreeds()

})
// window.addEventListener('load',function(){fetchBreeds();})

function fetchPics() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then( res => res.json() )
    .then( json => getImage(json))  
}

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then( res => res.json() )
    .then( json => getBreed(json))
}


function getImage(dogPics) {
  let dogDisplay = document.getElementById('dog-image-container')
  dogPics.message.forEach(dogphotoURL => {
    let newDogImgDiv = document.createElement('img')
    newDogImgDiv.src = dogphotoURL
    dogDisplay.appendChild(newDogImgDiv)
  }) 
}

function getBreed(dogBreeds) {
  dogBreedsList = Object.keys(dogBreeds["message"])
  let dogBreedUl  = document.getElementById('dog-breeds')
  dogBreedsList.forEach( breed => {
  
    let dogBreedLi = document.createElement('li')
    dogBreedLi.onclick = () => {
      dogBreedLi.style.color = "green"
    }
    // dogBreedLi.addEventListener('click', function(){
    // })
    dogBreedLi.innerText = breed
    dogBreedUl.appendChild(dogBreedLi) 
    let dropDown = document.getElementById("breed-dropdown")
    dropDown.onchange = (e) => { 
      document.querySelectorAll("li").forEach( breed => {
      
        if ( breed.innerText.charAt(0) != e.target.value) {
          //console.log(dogBreedLi)
          breed.style.display = "none"}
          else {breed.style.display = "block"}
      })
      
    }
  })}




