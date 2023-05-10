js// write your code here

// 1. See ramen images in the div with id ramen-menu.
// 2. Click and image in the ramen menu div and see all the info about the ramen in the ramen detail div
// 3. Create a new ramen after submitting the new-ramen form. new ramen added to the  ramen menu div

fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then((data) => main(data))

//data is an array of objects
//each object has key comment id image name rating

function main(data){
    //Access the Div, then add the images to the div
    for (val in data){
       
        //Part 1
        //data out of json
        let ramenID = data[val].id
        let ramenName = data[val].name
        let restaurantName = data[val].restaurant 
        let imgUrl = data[val].image      
        let rating = data[val].rating
        let comment = data[val].comment

        let imgTAG = document.createElement("img")
        imgTAG.src = imgUrl
        imgTAG.id = ramenID

        let ramenMenuDiv = document.querySelector("#ramen-menu")
       
        
        //Part 2
        //If we click on the image we get info in ramen detail div
        //Add event listener to each image
        imgTAG.addEventListener("click", (e) =>{
            let ratingLoc = document.querySelector("#rating-display")
            ratingLoc.textContent = rating
            let commentLoc = document.querySelector("#comment-display")
            commentLoc.textContent = comment
            let imageLoc = document.querySelector(".detail-image")
            imageLoc.src = imgUrl
            let rName = document.querySelector(".restaurant")
            rName.textContent = restaurantName
            let ramName = document.querySelector(".name")
            ramName.textContent = ramenName
            console.log('edit')
        })

        ramenMenuDiv.appendChild(imgTAG)

           //Each click only showing the last value need to fix this 
            //only adding the final      
    }
}


let newRamen = document.querySelector("#new-ramen")
newRamen.addEventListener("submit", (e)=> {
    e.preventDefault()
    //console.log('test')   
    console.log(e)
    console.log(e.target[0].value) //this should get value on 0
    //console.log(e.target."name".value) 
    console.log(e.target.restaurant.value) //gets the value in resturant


    // e is the form, need to get the data in the text boxes
    //e.target.input#new-name
    //e.target.name theres some way to target it but ill have to find it later

    let inputname = document.querySelector("#new-name").value
    let inputRestaurant = document.querySelector("#new-restaurant").value
    let inputImage = document.querySelector("#new-image").value
    let inputRating = document.querySelector("#new-rating").value
    let inputComment = document.querySelector("#new-comment").value
    //console.log(inputname,inputRating,inputRestaurant,inputImage,inputComment)

    //now need to put the data into the div
     let ramenMenuDiv = document.querySelector("#ramen-menu")
     let imgTAG = document.createElement("img")
     imgTAG.src = inputImage
    // console.log(imgTAG.src)
     imgTAG.alt = 'no image'
     ramenMenuDiv.appendChild(imgTAG)
    //these divs dont have the event listener, for part 2 added onto it. 
})