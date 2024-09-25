var hcontainer = document.querySelector(".site-header > .container")

document.addEventListener("DOMContentLoaded", function() {
    let linkItems = document.querySelectorAll(".links");

    linkItems.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            gsap.to(hcontainer, {
                height: "250px",
                duration:0.5,
                ease: "power4.out"
            })
        });

        link.addEventListener("mouseleave", function() {
            gsap.to(hcontainer, {
                height: "40px",
                duration:0.5,
                ease: "power4.out"
            })
        });
    });


   
});


document.addEventListener("DOMContentLoaded", function() {
    let anchors = document.querySelectorAll(".link a");
    anchors.forEach(function(a) {
        a.addEventListener("mouseenter", function() {
            gsap.to(a, {
                y: 100,
                duration: 0.5 // Optional: specify the duration of the animation
            });
        });
        a.addEventListener("mouseleave", function() {
            gsap.to(a, {
                y: 0,
                duration: 0.5 // Optional: specify the duration of the animation
            });
        });
    });
});

// gsap.from(".product-design-left img, .product-design-right img", {
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger: ".product-design-left img",
//         scroller: "body",
//         markers:true, 
//         scrub:4,
//         start: "top 50%",
//         end: "top 10%"
//     }
// });


let proList = document.querySelectorAll(".product-design-right li")

proList.forEach(function(citem){

citem.addEventListener("mouseenter", function(){
    gsap.to(citem.childNodes[5],{
       opacity:1,
       scale:1
    });
});

citem.addEventListener("mouseleave", function(){
    gsap.to(citem.childNodes[5],{
       opacity:0,
       scale:0
    });
});
citem.addEventListener("mousemove", function(dets){
//    citem.querySelector("img").style="opacity", "1"

// let img = citem.querySelector("img");
// if (img) {
//     img.style.opacity = "1";
// }

// citem.childNodes[2];
// console.log(citem.childNodes[5])

// console.log(citem.getBoundingClientRect().y)


gsap.to(citem.childNodes[5],{
    x:dets.x - citem.getBoundingClientRect().x - 50,
    y:dets.y - citem.getBoundingClientRect().y - 50 
});
   
});
});

let video = document.querySelector(".video-sec video")
let  playBtn = document.querySelector(".playbtn")

playBtn.addEventListener("click", function(){
video.play();
gsap.to(video,{
    scale:1,
    opacity:1,
    duration:1
});
});

video.addEventListener("click", function(){
    video.pause();
    gsap.to(video,{
        scale:0,
        opacity:0,
        duration:1
    });
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})



function smoothScroll (){
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
}
smoothScroll()

let hoverVideo = document.querySelectorAll(".hover-video");
hoverVideo.forEach(function(hvideo){
hvideo.addEventListener("mouseenter", function(){
//    console.log(hvideo.childNodes)
   hvideo.childNodes[5].style.opacity = 0;
   hvideo.childNodes[3].currentTime = 0;
   hvideo.childNodes[3].play();
   gsap.to(hvideo.childNodes[1],{
    scale:1
   });
});
hvideo.addEventListener("mouseleave", function(){
    hvideo.childNodes[5].style.opacity = 1;
       hvideo.childNodes[3].pause();
       gsap.to(hvideo.childNodes[1],{
        scale:0
       });
    });

hvideo.addEventListener("mousemove", function(dets){
    gsap.to(hvideo.childNodes[1],{
        x: dets.x - hvideo.getBoundingClientRect().x - 70,
        y: dets.y - hvideo.getBoundingClientRect().y -70
       });
});

});

let videoIt = document.querySelectorAll(".video-card-sec .item");

videoIt.forEach(function(item) {
  let videoCard = item.querySelector(".video-card-video");
  let vid = item.querySelector("video");

  item.addEventListener("mouseenter", function() {
    gsap.to(videoCard, {
      height: 500,
      y: -200,
      duration: 0.5
    });

    vid.currentTime = 0; // Reset video to the start
    vid.play(); // Play the video
  });

  item.addEventListener("mouseleave", function() {
    gsap.to(videoCard, {
      height: 300,
      y: 0,
      duration: 0.5
    });

    vid.pause(); // Pause the video
  });
});



// faq start 

$(document).ready(function(){
    $(".accordion").click(function(){
        $(this).next().slideToggle(300).siblings(".panel").slideUp(300);
        $(this).toggleClass("active").siblings().removeClass("active");
    });
});

// process label 

gsap.from(".process-wrap .grid .item li",{
x:0,
duration:1.5,
stagger:{
amount: -0.3
},
scrollTrigger:{
    trigger: ".process-wrap .grid .item li",
    scroller: "body",
    start: "top 80%",
    end: "top 0%",
    scrub: true
}
});

gsap.to(".process-wrap .grid .item hr", {
    height: "100%",
    duration:1.5,
    scrollTrigger:{
        trigger: ".process-wrap .grid .item hr",
        scroller:"body",
        start: "top 80%",
        end: "top 0%",
        scrub: true
    }
});