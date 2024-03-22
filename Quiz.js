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

// Quiz game 

var totalA;
var totalB;
var totalC;
var final_personality = "";

var user_answers = {
    q1: "",
    q2: "",
    q3: ""
}

var personality_types = {
    a: {
        image: "../images/New_Air_Max1.png",
        heading: "Sporty",
        subheading: "Sporty types are competitive.",
        description: "Air Max 97 is the type of shoe for you."
    },
    b: {
        image: "../images/New_Cortez.png",
        heading: "Elegant",
        subheading: "Elegant types are stylish.",
        description: "Air Jordan 2 is the type of shoe for you."
    },
    c: {
        image: "../images/New_Air_Max97.png",
        heading: "Minimal",
        subheading: "Minimals types are quiet.",
        description: "Air Max 00 is the type of shoe for you."
    },
    mixed: {
        image: "../images/New_Air_Jordan.png",
        heading: "Culture",
        subheading: "Culture type are intersting.",
        description: "Air Max 1 is the type of shoe for you."
    },
    not_enough:{
        
        heading: "Not Enough",
        subheading: "Please choice 3 boxes to get test result.",
        description: "We can't give you an answer..."
    },
    
}

$(".answer").on("click",function(){
    $(this).siblings().removeClass("answeroutline");
    $(this).addClass("answeroutline");

    var code = $(this).data("answer");
    var question = $(this).parent().data("question");
    user_answers[question] = code;

    calculateResults();
    checkPersonality();
    fillPersonality();
    notMatch();

})


function calculateResults(){
    totalA = 0;
    totalB = 0;
    totalC = 0;
    for(key in user_answers){
        if(user_answers[key] == "A"){
            totalA++;
        }
        else if (user_answers[key] == "B"){
            totalB++;
        }
        else if (user_answers[key] == "C"){
            totalC++;
        }
    }
    console.log(`A:${totalA} B:${totalB} C:${totalC}`);
}
// Created the A, B, C type with you in class, also want to solve when user are mixed type 
// and not seleted enough boxes. 

function checkPersonality(){
   
    if(totalA == 3) {
        final_personality = personality_types["a"];
    }
    else if(totalB == 3) {
        final_personality = personality_types["b"];
    }
    else if(totalC == 3) {
        final_personality = personality_types["c"];
    }
    else if(totalA == 2 && totalB ==1 ) {
        final_personality = personality_types["mixed"];
    }
    else if(totalA == 1 && totalB ==2 ) {
        final_personality = personality_types["mixed"];
    }
    else if(totalB == 2 && totalC ==1 ) {
        final_personality = personality_types["mixed"];
    }
    else if(totalB == 1 && totalC ==2 ) {
        final_personality = personality_types["mixed"];
    }
    else if(totalC == 2 && totalA ==1 ) {
        final_personality = personality_types["mixed"];
    }
    else if(totalC == 1 && totalA ==2 ) {
        final_personality = personality_types["mixed"];
    }
    else {
        final_personality = personality_types["not_enough"];
    }
    console.log(final_personality);
};

// This section is when user answers match with A,B,C and mixed type. 
function fillPersonality(){
   
    if(final_personality != personality_types["not_enough"]){

    $(".result-container").html("")
     
    var image = $("<div class='result-image'></div>");
    image.append(`<img src='img/${final_personality["image"]}' />`)

    var heading = $("<div class='result-heading'></div>");
    heading.append(final_personality["heading"]);

    var subheading = $("<div class='result-subheading'></div>");
    subheading.append(final_personality["subheading"]);

    var description = $("<div class='result-description'></div>");
    description.append(final_personality["description"]);

    $(".result-container").append(image);
    $(".result-container").append(heading);
    $(".result-container").append(subheading);
    $(".result-container").append(description);
}}

// This section is a reminder when user have not selected 3 boxes //
function notMatch(){
   
if(final_personality == personality_types["not_enough"]){

    $(".result-container").html("")
    var heading = $("<div class='result-heading'></div>");
    heading.append(final_personality["heading"]);

    var subheading = $("<div class='result-subheading'></div>");
    subheading.append(final_personality["subheading"]);

    var description = $("<div class='result-description'></div>");
    description.append(final_personality["description"]);

    $(".result-container").append(heading);
    $(".result-container").append(subheading);
    $(".result-container").append(description);
}}

//********GSAP**********//

var tl = gsap.timeline({});
tl.from(".slide", {opacity: 0, x: -40, duration: 2}, 0)
tl.from(".slide .question ", {opacity: 0, x: 80, duration: 2},0.5)
.from(".slide .answer ", {opacity: 0, stagger: 0.3, duration: 2}, "-=1.5")



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
