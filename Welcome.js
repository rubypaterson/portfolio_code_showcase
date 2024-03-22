//OverLay search//
$(".closebtn").on("click",function(){
    $(".overlay").css("display","none");
});


$(".openbtn").on("click",function(){
    $(".overlay").css("display","flex");
});

$(".scrollToTop").on("click",function(){
    var rootElement=document.documentElement;
    rootElement.scrollTo({
    top:0,
    behavior:"smooth"
})
});

//Change the H1 font size 
$(".Greeting").on("click",function(){
   $(".Greeting h1").css("font-size","100px");
});

// change the background to Username
// $(".Username").on("mouseover", function(){
//     $(".Air").css("opacity","0%")
  

// });

// change background image to shoe hover
 $(".Username").on("mouseenter", function(){
    $(".shoe").css("opacity","100%")
});

// Greeting name && remove input text box
$(".question_name_box").on("click",function(){
    var text = $(".textbox").val();
    $(".Username h3").html(text);
});

// .Shoe animation
var Shoe_tl = gsap.timeline();

Shoe_tl.from(".Shoe", {
    // x:300, 
    opacity:0,
    duration: 4,
    repeat:1,
    ease:"bounce.inOut",x:800 })


// User press return tricker the interaction 
$(".textbox").on("keyup", function(event){
    
if (event.keyCode == 13) {
    var text = $(".textbox").val();
    $(".Username h3").html(text);
    $(".question_name_box input").remove();
    $(".Greeting h1").html("Let's go");
    $("body").css("background-color","white");   
    $(".Air").remove();
}
});

//********GSAP******** *//

// handwriting animation
var timeline = gsap.timeline({});

timeline.to(".JDI", {
  stagger: 0.6,
  strokeDashoffset: -3,
  duration: 5,
  ease: "power4.easeOut"
})


// Greeting animation
var tl = gsap.timeline({});
tl.from(".Greeting h1", {opacity: 0, x: -40, duration: 2}, 0)
.from(".Greeting h2", {opacity: 0, x: 80, duration: 2}, "-=1.5")
.from(".question_name_box", {opacity: 0, x: -40, duration: 2}, "-=1.5")



// Remove the animation and bring back the origanally page 
$(".JDI").on("click", function(event){
    $(".JDI_name").remove();
    $(".Air img").css("opacity","100%");
    $(".Greeting").css("opacity","100%");
});

//*****************Lottie Animation code ******************//

var animationData = {"v":"5.9.0","fr":60,"ip":0,"op":300,"w":400,"h":400,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":400,"h":400,"u":"images/","p":"img_0.jpg","e":0},{"id":"image_1","w":400,"h":433,"u":"images/","p":"img_1.jpg","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"Nike.jpeg","cl":"jpeg","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[80]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":64,"s":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[60]},{"t":86,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2,"l":2},"a":{"a":0,"k":[200,200,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"Jordan.jpeg","cl":"jpeg","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":54,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":64,"s":[80]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":73,"s":[50]},{"t":80,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33,"s":[0]},{"t":75,"s":[360]}],"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2,"l":2},"a":{"a":0,"k":[200,216.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":300,"st":0,"bm":0}],"markers":[]};
var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: animationData
};

var anim;

anim = lottie.loadAnimation(params);
var nike_logo = false;

$("#lottie").on("mouseenter", function(){
    if(nike_logo == false){
        anim.setDirection(1);
        anim.play();
    }
        if(nike_logo == true){
            anim.setDirection(-1);
            anim.play();
    }
    nike_logo =!nike_logo;
})

