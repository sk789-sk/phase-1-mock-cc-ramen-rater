
fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => main(data))

function main(data){
    for (idx in data){
        renderImage(data[idx])
    }
}

function renderImage(obj){  //takes 1 object
        let ramenObj = {    //extracts the info in the object
             imgURL : obj.image,
             ramenName : obj.name,
             ramenID : obj.id,
             ramenComment : obj.comment,
             ramenRating : obj.rating,
             ramenRestaurant : obj.restaurant
        }
        let ramenImage = document.createElement('img') //create image element    
        ramenImage.src = ramenObj.imgURL //add image values
        ramenImage.id = ramenObj.ramenID
        ramenImage.addEventListener("click", () =>displayinfo(ramenObj)) //display info event listener fcn using the ramen obj 
        document.querySelector("#ramen-menu").appendChild(ramenImage) //adds to display
    }
function displayinfo(object){ //event listener function to change the values
    let ramenNameLoc = document.querySelector(".name")
    ramenNameLoc.textContent = object.ramenName

    let ramenRestLoc = document.querySelector(".restaurant")
    ramenRestLoc.textContent = object.ramenRestaurant

    let ramenRatingLoc = document.querySelector("#rating-display")
    ramenRatingLoc.textContent = object.ramenRating

    let ramenCommentLoc = document.querySelector("#comment-display")   
    ramenCommentLoc.textContent = object.ramenComment

    let ramenIMGloc = document.querySelector(".detail-image")
    ramenIMGloc.src = object.imgURL
}

//Part 3
let form = document.querySelector("#new-ramen")
form.addEventListener("submit", (e)=>addRamen(e))

function addRamen(e){ //function takes an even that we get form the event listener
    e.preventDefault()
    let ramenObj = {
        "id" : 2,
        "image" : e.target.image.value,
        "name" : e.target.name.value,
        "comment" : e.target["new-comment"].value,
        "rating" : e.target.rating.value,
        "restaurant" : e.target.restaurant.value
   }
   renderImage(ramenObj)
   e.target.reset()
}


