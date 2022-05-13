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
  end: () => "+=7000" 
});

function stopscroll() {
  $('body').addClass('stop-scrolling')
  setTimeout(function() {
    $('body').removeClass('stop-scrolling');
  }, 2000);
}

function stopscroll2() {
  $('body').addClass('stop-scrolling')
  setTimeout(function() {
    $('body').removeClass('stop-scrolling');
  }, 3000);
}

const sec_1 = gsap.timeline();

sec_1.to("#section1-2 .mask4",0.5, {
  scaleY: 0,
  transformOrigin: "top bottom"
},0).to("#section1-2 .orang",1, {
  scale:1,
  duration:3,
},0).from("#section1-2 .textanim",0.5, {
  opacity:0,
  x:"7vh",
  lazy: false,
},0).from("#section1-2 .qualification",0.5, {
  opacity:0,
  x:"-10vh",
  stagger:0.1,
  lazy: false,
},0).fromTo("#section1-2 .scrollToExplore",1, {
  opacity:0,
},{
  opacity:1,
},0).to("#shadowsection .bscroll5,#shadowsection .bscroll4,#shadowsection .bscroll3,#shadowsection .bscroll2",1,{
  display:"none",
},0).fromTo("#shadowsection .bscroll1",1,{
  display:"none",
},{
  display:"block",
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"0",
}, { 
  width:"5%"
},0).to("#shadowsection .sfase1,#shadowsection .sfase2,#shadowsection .sfase3,#shadowsection .sfase4",1,{
  opacity:0,
},0).fromTo("#shadowsection .sfase5",1,{
  opacity:0,
} ,{ 
  opacity:1,
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},0).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},1);

ScrollTrigger.create({
  animation: sec_1,
  trigger: ".ccontainer",
  // markers:true,
  start: '100px center',
  end: '100px center',
  toggleActions: "play none none reverse"
});

const sec_1_2 = gsap.timeline();

sec_1_2.to("#section1-2 .quaimg",1, {
  scale:0
},0).fromTo("#section1-2 .textanim",1, {
  x:"0",
},{
  opacity:0,
  x:"7vh",
},0).fromTo("#section1-2 .quacheck",1, {
  scale:0
},{
  scale:1
},1).fromTo("#section1-2 .textanim2",1, {
  opacity:0,
  x:"7vh",
},{
  opacity:1,
  x:"0",
},1);

ScrollTrigger.create({
  animation: sec_1_2,
  trigger: "#section1-2",
  // markers:true,
  start: '700px center',
  end: '700px center',
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
  // onEnterBack: self => self.disable(),
  toggleActions: "play none none reverse"
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
},0).fromTo("#shadowsection .bscroll5,#shadowsection .bscroll4,#shadowsection .bscroll3,#shadowsection .bscroll1",1,{
  display:"block",
},{
  display:"none",
},0).to("#shadowsection .bscroll2",0.1,{
  display:"block",
},0).fromTo("#shadowsection .sfase5",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase4",1,{
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"5%"
}, { 
  width:"25%"
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},0).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},1);

ScrollTrigger.create({
  animation: sec_2,
  trigger: "#section1-2",
  // markers:true,
  start: '1800px center',
  end: '1800px center',
  toggleActions: "play none none reverse"
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
},0).from("#section1-3 .animkanan_after",1, {
  opacity:0,
  x:"-13vh",
  lazy: false,
},1).from("#section1-3 .animkiri_after",1, {
  opacity:0,
  x:"10vh",
  lazy: false,
},1);
ScrollTrigger.create({
  animation: sec_2_2,
  trigger: "#section1-2",
  // markers:true,
  start: '2800px center',
  end: '2800px center',
  toggleActions: "play none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
  // onEnterBack: self => self.disable()
});

const sec_2to3 = gsap.timeline();

sec_2to3.fromTo("#shadowsection .bscroll5,#shadowsection .bscroll4,#shadowsection .bscroll2,#shadowsection .bscroll1",1,{
  display:"block",
},{
  display:"none",
},0).to("#shadowsection .bscroll3",0.1,{
  display:"block",
},0).fromTo("#shadowsection .sfase4",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase3",1, {
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"25%"
}, { 
  width:"50%"
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},0).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},1);

ScrollTrigger.create({
  animation: sec_2to3,
  trigger: "#section1-2",
  // markers:true,
  start: '4100px center',
  end: '4100px center',
  toggleActions: "play none none reverse",
});

const sec_3 = gsap.timeline();

sec_3.to("#section1-4 .changetext5", 1.5, {
  text: {
    value: "Ups,ternyata jadwal interview saat ini sudah terisi penuh",
    ease: Linear.easeNone,
  },
  yoyo: true,
  repeat:1
},0);

ScrollTrigger.create({
  animation: sec_3,
  trigger: "#section1-2",
  // markers:true,
  start: '4300px center',
  end: '4300px center',
  toggleActions: "play none none reverse",
  onEnter: stopscroll2,
});

const sec_3_2 = gsap.timeline();

sec_3_2.to("#section1-4 .changetext5", 1.5, {
  text: {
    value: "Jangan khawatir, EVA ada untuk membantu",
    ease: Linear.easeNone,
  },
},0).to("#section1-4 .kalender", 1.5, { 
  x: "-100vh" 
},0).to("#section1-4 .instruction", 1, { 
  opacity: 1 
},1);

ScrollTrigger.create({
  animation: sec_3_2,
  trigger: "#section1-2",
  // markers:true,
  start: '5000px center',
  end: '5000px center',
  toggleActions: "play none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
});

const sec_4_1 = gsap.timeline();

sec_4_1.fromTo("#section2-1 .notif", 1,{
  scale:1,
  transformOrigin:"top right",
},{
  scale:0,
  transformOrigin:"top right",
},0).fromTo("#section2-1 .foto-surat1", 1, {
  scale:0,
  transformOrigin:"top left",
},{
  scale:1,
  transformOrigin:"top left",
},1);

ScrollTrigger.create({
  animation: sec_4_1,
  trigger: "#section1-2",
  // markers:true,
  start: "6800px center",
  end: "6800px center",
  toggleActions: "play none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
});

const sec_41 = gsap.timeline();

sec_41.fromTo("#section2-1 .notif", 0.5, {
  scale:0,
  transformOrigin:"top right",
},{
  scale:1,
  transformOrigin:"top right",
},1);

ScrollTrigger.create({
  animation: sec_41,
  trigger: "#section1-2",
  // markers:true,
  toggleActions: "play none none reverse",
  start: "6300px center",
  end: "6300px center",
  onEnter: stopscroll,
});

const sec_4 = gsap.timeline();

sec_4.fromTo("#section2-1 .gambarsurat", 1, {
  x:"100vh",
  rotation:-13,
},{
  x:"0",
  rotation:0,
},0).fromTo("#shadowsection .bscroll5,#shadowsection .bscroll3,#shadowsection .bscroll2,#shadowsection .bscroll1",1,{
  display:"block",
},{
  display:"none",
},0).to("#shadowsection .bscroll4",0.1,{
  display:"block",
},0).fromTo("#shadowsection .sfase3",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase2",1,{
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"50%"
}, { 
  width:"75%"
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},0).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},1);

ScrollTrigger.create({
  animation: sec_4,
  trigger: "#section1-2",
  // markers:true,
  toggleActions: "play none none reverse",
  start: "6000px center",
  end: "6000px center",
});

const sec_4_2 = gsap.timeline();

sec_4_2.fromTo("#section2-1 .foto-surat1", 1, {
  x:0,
  y:0,
  rotation:0,
},{
  x:130,
  y:-100,
  rotation:10,
},0).fromTo("#shadowsection .bscroll3,#shadowsection .bscroll4,#shadowsection .bscroll2,#shadowsection .bscroll1",1,{
  display:"block",
},{
  display:"none",
},0).to("#shadowsection .bscroll5",0.1,{
  display:"block",
},0).fromTo("#shadowsection .sfase2",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase1",1, {
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"75%"
}, { 
  width:"100%"
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},0).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},1).fromTo("#section2-1 .foto-surat2", 1, {
  scale:0,
  transformOrigin:"top left",
},{
  scale:1,
  transformOrigin:"top left",
},1);

ScrollTrigger.create({
  animation: sec_4_2,
  trigger: "#section1-2",
  // markers:true,
  start: "7000px center",
  end: "7000px center",
  toggleActions: "play none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
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