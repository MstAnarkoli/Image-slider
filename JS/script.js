let slides = document.querySelectorAll(".slide")
let slidesArray = Array.from(slides)
let prev = document.querySelector(".prevarrow")
let next = document.querySelector(".nextarrow")


//Identify active, previous and next Slide

function prevnext(){

    let activeSlide = document.querySelector(".active")
    let currentIndex = slidesArray.indexOf(activeSlide)
    

let prev;
let next;
prev = slidesArray[currentIndex - 1]
next = slidesArray[currentIndex + 1]


if(currentIndex == 0){
    prev = slidesArray[slidesArray.length - 1]
}else{
    prev = slidesArray[currentIndex - 1]
}

if(currentIndex == slidesArray.length - 1){
    next = slidesArray[0]
}else{
    next = slidesArray[currentIndex + 1]
}

return[prev, next]

}
prevnext()

// Slide positioning

function movement(){
    let activeSlide = document.querySelector(".active")
    let currentIndex = slidesArray.indexOf(activeSlide)

    let [prev, next] = prevnext()
    
    slidesArray.map((slide,index)=>{

        if(currentIndex == index){
            slide.style.transform = "translateX(0)"
        }else if(slide == prev){
            slide.style.transform = "translateX(-100%)"
        }else if(slide == next){
            slide.style.transform = "translateX(100%)"
        }

        slide.addEventListener("transitionend",function(){

            slide.classList.remove("smooth")
        })
    })

   }  



    next.addEventListener("click", function(){

        let activeSlide = document.querySelector(".active")
        let [prev, next] = prevnext()

        activeSlide.style.transform = "translateX(-100%)"
        activeSlide.classList.remove("active")
        activeSlide.classList.add("smooth")

        next.style.transform = "translateX(0%)"
        next.classList.add("smooth")
        next.classList.add("active")
        movement()
        

    }) 

    prev.addEventListener("click", function(){

        let activeSlide = document.querySelector(".active")
        let [prev, next] = prevnext()

        activeSlide.style.transform = "translateX(100%)"
        prev.style.transform = "translateX(0)"
        activeSlide.classList.remove("active")
        prev.classList.add("active")
        activeSlide.classList.add("smooth")     
        prev.classList.add("smooth")
        movement()

    }) 
