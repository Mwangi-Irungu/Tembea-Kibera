
function reveal(){
    // change to a position where the effect will be aplied
    const offset = 100

    document.querySelectorAll(".reveal").forEach(item => {
               
        if (item.getBoundingClientRect().top - window.innerHeight < -(offset)){
            item.classList.add("active")
        }
    })

    //when scrolling back and reaching the beginning of the page every object revealed will be hidden again in order to start the animation again
    if (window.scrollY==0){
        document.querySelectorAll(".reveal").forEach(item => {
            item.classList.remove("active")
        })
    }
}

//adding the function on the scroll event of the browser
window.addEventListener("scroll", reveal)

const swiper = new Swiper('.swiper', {
    loop: true, 
    slidesPerView: "auto",
    centeredSlides: true,
    observeParents: !0,
    observer: !0
  });