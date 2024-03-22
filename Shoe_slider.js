

// Overlay search hover dropdown//
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

//Shoe_details 
var shoe_info = {
    1985: {
        title: "Nike Cortez",
        description: "The Nike Cortez Basic TXT VDAY celebrates love with a slightly shiny design. Lightweight foam cushions your feet for all-day comfort..",
        price: 190,
        released: 1985
    },
    1991: {
        title: "Nike Air Jordan",
        description: "Inspired by the original that debuted in 1985,classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.",
        price: 145,
        released: 1991
    },
    2004: {
        title: "NikeAir MAx 1",
        description: "We launched our Nike Air Max 1 trainers back in 1987. Since then, they've set the standard for supportive footwear that gives you the power to move with confidence.",
        price: 135,
        released: 2004
    },
    2013: {
        title: "Nike Air Max 97",
        description: "Full-length Max Air cushioning will have you feeling like you're walking on air.",
        price: 215,
        released: 2013
    },
    2000: {
        title: "Shox",
        description: "Crossing fashion with sport, London-based designer Martine Rose merges classic formalwear with the renowned look of Nike Shox",
        price: 185,
        released: 2000
    }
}


// shoe slide//
var imageNumber = 0;

$(".year").on("click",function(){
   
   var year = $(this).data("year"); // referencing the one is been click in this case,by using (this)

    if(year ==1985){
        imageNumber = 0;
    }
    else if (year == 1991){
        imageNumber = 1;
    }
    else if (year == 2004){
        imageNumber = 2;
    }

    else if (year == 2013){
        imageNumber = 3;
    }
    else if (year == 2000){
    imageNumber = 4;
    }

var pixelsacross = (imageNumber* 800 * -1)+"px";
$(".image_inner").css({"transform":`translate(${pixelsacross},0px)`})

    //UPDATE TEXT
    var title = shoe_info[year]["title"];
    var description = shoe_info[year]["description"];
    var released =shoe_info[year]["released"];
    var price = shoe_info[year]["price"];
    $(".title").html(title);
    $(".description").html(description);
    var info =` This shoe was released in ${released} for the price of $${price}.`;
    $(".info").html(info);

});

var timer ;
 function startTimer(){
   timer= setInterval(function(){
   
     var pixelsacross = (imageNumber* 800 * -1)+"px";
      $(".image_inner").css({"transform":`translate(${pixelsacross},0px)`})
       imageNumber++;

        if(imageNumber > 4){
             imageNumber =0;
         }
           }, 2000);
 }
 startTimer();

$(".image_container").on("mouseenter", function(){
        clearInterval(timer);
    }); 
$(".image_container").on("mouseleave", function(){
   startTimer();
});


// delete button  & text_popup_container//
$(".delete").click(function(){
    $(".text_popup_container").hide();
});

$(".button_container").on("click",function(){
    $(".text_popup_container").show();
});

$(".text_popup_container").on("click",function(){
    $(".delete p").css("opacity","100%");
});

$(".button_container").on("click",function(){
    $(".slider .text_popup_container").css("opacity","100%");
});

// When visitor want to see the shoe & shoe infor.
// Stop the slide and take to the interested shoe image//

function choiceShoeInfo(){

$(".button_container").on("click",function(){
    (".button_container .year" )== imageNumber
    clearInterval(timer);
});

$(".delete").on("click",function(){
    startTimer();
 });

}
choiceShoeInfo()

//********GSAP**********//
var tl = gsap.timeline({});
tl.from(".back_ground_graphic", {opacity:0.5,duration:2},0.5)
tl.from(".slider", {opacity: 0, duration:3},1.5)

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

