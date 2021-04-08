let init = () => {
   let container = document.getElementsByClassName("jumbo-slider__container")[0],
   slides = document.getElementsByClassName("jumbo-slider__slide"),
   circles = document.getElementsByClassName("jumbo-slider__circle"),
   links = document.getElementsByClassName("jumbo-slider__link");
   current = 1,
   time = 6000;

   
// add animation class to slide
   slides[0].classList.add("jumbo-slider__slide--active")
   links[current-1].classList.add("jumbo-slider__link--active")
   circles[current-1].classList.add("jumbo-slider__link--active")

// update elipsis and link
   let updateNav = (current) => {
      // console.log(`update current: ${current}`)
      for (let index=0; index < slides.length; index++){
         links[index].classList.remove('jumbo-slider__link--active');
         circles[index].classList.remove('jumbo-slider__circle--fill');

      } //remove animation from the previous slide
      
      links[current-1].classList.add("jumbo-slider__link--active");
      circles[current-1].classList.add('jumbo-slider__circle--fill');
 
   }
   
   let startSlinding = () => {
     
      setInterval(() => {//set Interval to run this forever
         // console.log(`current: ${current}`) //see what is the current slide
         
         //remove class active from the first slide and add it to the second slide, so the second can become first with class activated
         
         slides[1].classList.add("jumbo-slider__slide--active")
         slides[0].classList.remove("jumbo-slider__slide--active")

         //clone the first slide and place it on the last space.
         container.appendChild(slides[0].cloneNode([true]));
         //the remove the first slide after it has been cloned
         container.removeChild(slides[0]);

         // console.log(`slides: ${slides.length}`)
         if( current < slides.length){
            current++
            updateNav(current)
         } else {
            current = 1
            updateNav(current)
         }
         

      }, time)
   }
   startSlinding()
 
}

init();



 