
// Overlay search bar// 

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

//********GSAP**********//

var tl = gsap.timeline({});
tl.from(".main_content h1", {opacity: 0, x: -40, duration: 2}, 0)
.from("#lottie", {opacity:0, x:-30, stagger: 0.1, duration: 2},0)
.from(".main_content h2", {opacity: 0, x: 80, duration: 2}, "-=1.5")
.from(".main_content p", {opacity: 0, stagger: 0.3, duration: 2}, "-=1.5")
.from(".signUpBotton", {opacity: 0, stagger: 0.3, duration: 2}, "-=1.5")



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


