gsap.registerPlugin(ScrollTrigger);
// SECTION 1-2
let sections = gsap.utils.toArray(".panel");

const scrollhorizontal = gsap.timeline();

// SECTION1-2
scrollhorizontal.to(sections,1, {
  xPercent: -0
},0);
scrollhorizontal.to(sections,1, {
  xPercent: -100
},1);
// SECTION1-3

// SECTION1-3
scrollhorizontal.to(sections,1, {
  xPercent: -100
},2);
scrollhorizontal.to(sections,1, {
  xPercent: -200
},3);
scrollhorizontal.to(sections,1, {
  xPercent: -200
},4);
// SECTION1-4

scrollhorizontal.to(sections,1, {
  xPercent: -300
},5);
scrollhorizontal.to(sections,1, {
  xPercent: -300
},6);
// SECTION2-1

let jingle = gsap.to('.notif',3,{rotation:-10,repeat: -1,yoyo:true});
// SECTION2-1
ScrollTrigger.create({
  animation: scrollhorizontal,
  trigger: ".ccontainer",
  pin: true,
  scrub: 1,
  end: () => "+=4000" 
});

function stopscroll() {
  $('body').addClass('stop-scrolling')
  setTimeout(function() {
    $('body').removeClass('stop-scrolling');
  }, 1500);
}

const sec_1 = gsap.timeline();

sec_1.to("#section1-2 .mask4",1, {
  scaleY: 0,
  transformOrigin: "top bottom"
},0).to("#section1-2 .orang",1, {
  scale:1,
  duration:3,
},0).from("#section1-2 .textanim",1, {
  opacity:0,
  x:"7vh",
  lazy: false,
},0).from("#section1-2 .qualification",1, {
  opacity:0,
  x:"-10vh",
  stagger:0.1,
  lazy: false,
},0).fromTo("#section1-2 .scrollToExplore",1, {
  opacity:0,
},{
  opacity:1,
},0);

ScrollTrigger.create({
  animation: sec_1,
  trigger: ".ccontainer",
  markers:true,
  start: "20% center",
  end: "20% center",
});

const sec_1_2 = gsap.timeline();

sec_1_2.to("#section1-2 .quaimg",1, {
  scale:0
},0).fromTo("#section1-2 .textanim",1, {
  x:"0",
},{
  opacity:0,
  x:"7vh",
},0);

ScrollTrigger.create({
  animation: sec_1_2,
  trigger: "#section1-2",
  markers:true,
  start: "70% center",
  end: "70% center",
});

const sec_1_3 = gsap.timeline();

sec_1_3.fromTo("#section1-2 .quacheck",1.5, {
  scale:0
},{
  scale:1
},0).fromTo("#section1-2 .textanim2",1.5, {
  opacity:0,
  x:"7vh",
},{
  opacity:1,
  x:"0",
},0);

ScrollTrigger.create({
  animation: sec_1_3,
  trigger: "#section1-2",
  markers:true,
  onEnter: stopscroll,
  start: "90% center",
  end: "90% center",
});

const sec_2 = gsap.timeline();

sec_2.to("#section1-3 .mask4",1, {
  scaleY: 0,
  transformOrigin: "top bottom",
},0).fromTo("#section1-3 .orang",1, {
  scale: 0.85,
  transformOrigin: "center bottom",
},{
  scale: 1,
  transformOrigin: "center bottom",
},0).from("#section1-3 .textanim",1, {
  opacity:0,
  x:"3vh",
},0).fromTo("#section1-3 .animkanan",1, {
  opacity:0,
  x:"-10vh",
  duration:1,
},{
  opacity:1,
  x:"0",
  stagger:0.1,
  duration:1,
},0).from("#section1-3 .animkiri",1, {
  opacity:0,
  x:"10vh",
  duration:1,
},0).from("#section1-3 .scrollToExplore",1, {
  opacity:0,
  duration: 1,
},0);

ScrollTrigger.create({
  animation: sec_2,
  trigger: "#section1-2",
  markers:true,
  start: "170% center",
  end: "170% center",
});

const sec_2_2 = gsap.timeline();

sec_2_2.fromTo("#section1-3 .animkanan",1, {
  x:"0vh",
},{
  opacity:0,
  x:"-13vh",
},0).fromTo("#section1-3 .animkiri",1, {
  x:"0",
},{
  opacity:0,
  x:"10vh",
},0).fromTo("#section1-3 .textanim",1, {
  x:"0",
},{
  opacity:0,
  x:"3vh",
},0);
ScrollTrigger.create({
  animation: sec_2_2,
  trigger: "#section1-2",
  markers:true,
  start: "215% center",
  end: "215% center",
});

const sec_2_3 = gsap.timeline();

sec_2_3.from("#section1-3 .animkanan_after",1, {
  opacity:0,
  x:"-13vh",
  lazy: false,
},0).from("#section1-3 .animkiri_after",1, {
  opacity:0,
  x:"10vh",
  lazy: false,
},0);
ScrollTrigger.create({
  animation: sec_2_3,
  trigger: "#section1-2",
  markers:true,
  start: "235% center",
  end: "235% center",
});

var $toggle = 0;
$("#section1-4 .people-schedule").click(function () {
  if ($toggle == 0) {
    if ($(this).hasClass("peoples1")) {
      $(".peoples1").hide();
      $(".onclickcontent1 .hilang1").addClass("muncul");
      $(".onclickcontent1 p").removeClass("hilangp");
    } else if ($(this).hasClass("peoples2")) {
      $(".peoples2").hide();
      $(".onclickcontent1 .hilang2").addClass("muncul");
      $(".onclickcontent1 p").removeClass("hilangp");
    }
    $toggle = 1;
  } else if ($toggle == 1) {
    if ($(this).hasClass("peoples1")) {
      $(".peoples1").hide();
      $(".onclickcontent2 .hilang1").addClass("muncul");
      $(".onclickcontent2 p").removeClass("hilangp");
      $(".instruction").hide();
      $(".bawah").show();
    } else if ($(this).hasClass("peoples2")) {
      $(".peoples2").hide();
      $(".onclickcontent2 .hilang2").addClass("muncul");
      $(".onclickcontent2 p").removeClass("hilangp");
      $(".instruction").hide();
      $(".bawah").show();
    } 
    $toggle = 2;
  }
});
$("#section1-4 .x").click(function () {
  $(".instruction").hide();
});
let cursortext = gsap.to('.cursortext',{opacity:0,ease:"power2.inOut",repeat: -1});
// SECTION 1-4