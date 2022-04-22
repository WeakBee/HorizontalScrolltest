gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

const scrollhorizontal = gsap.timeline();

scrollhorizontal.to("#section1-2 .mask4",1, {
  scaleY: 0,
  transformOrigin: "top bottom"
},0).to("#section1-2 .orang",1, {
  scale:1,
  duration:3,
},0).from("#section1-2 .textanim",1, {
  opacity:0,
  x:"7vh",
},0).from("#section1-2 .qualification",1, {
  opacity:0,
  x:"-10vh",
  stagger:0.1
},0).to("#shadowsection .scrollbar",1, { width:"5%"},0);

scrollhorizontal.from("#section1-2 .scrollToExplore",1, {
  opacity:0,
  duration: 1,
},0);

scrollhorizontal.to("#section1-2 .quaimg",1, {
  scale:0
},1).to("#section1-2 .textanim",1, {
  opacity:0,
  x:"7vh",
},1).to("#shadowsection .scrollbar",1, { width:"10%"},1);

scrollhorizontal.from("#section1-2 .quacheck",1, {
  scale:0
},2).from("#section1-2 .textanim2",1, {
  opacity:0,
  x:"7vh",
},2).to("#shadowsection .scrollbar",1, { width:"20%"},2);
// SECTION1-2
scrollhorizontal.to(sections,1, {
  xPercent: -100
},3);
// SECTION1-3
scrollhorizontal.to("#section1-3 .mask4",1, {
  scaleY: 0,
  transformOrigin: "top bottom",
  duration: 1,
},4).from("#section1-3 .orang",1, {
  scale: 0.85,
  transformOrigin: "center bottom",
  duration: 1,
},4).from("#section1-3 .textanim",1, {
  opacity:0,
  x:"3vh",
},4).to("#shadowsection .scrollbar",1, { width:"25%"},4);

scrollhorizontal.from("#section1-3 .animkanan",1, {
  opacity:0,
  x:"-10vh",
  stagger:0.1,
  duration:1,
},5).from("#section1-3 .animkiri",1, {
  opacity:0,
  x:"10vh",
  duration:1,
},5).from("#section1-3 .scrollToExplore",1, {
  opacity:0,
  duration: 1,
},5).to("#shadowsection .scrollbar",1, { width:"30%"},5);

scrollhorizontal.to("#section1-3 .animkanan",1, {
  opacity:0,
  x:"-10vh",
  stagger:0.1,
  duration:1,
},6).to("#section1-3 .animkiri",1, {
  opacity:0,
  x:"10vh",
  duration:1,
},6).to("#section1-3 .textanim",1, {
  opacity:0,
  x:"3vh",
},6).to("#shadowsection .scrollbar",1, { width:"35%"},6);

scrollhorizontal.from("#section1-3 .animkanan_after",1, {
  opacity:0,
  x:"-13vh",
  stagger:0.1,
  duration:1,
},7).from("#section1-3 .animkiri_after",1, {
  opacity:0,
  x:"10vh",
  duration:1,
  stagger:0.1,
},7).to("#section1-3 .scrollToExplore",1, {
  opacity:1,
  duration: 1,
},7).to("#shadowsection .scrollbar",1, { width:"40%"},7);
// SECTION1-3
scrollhorizontal.to(sections,1, {
  xPercent: -200
},8);
// SECTION1-4
scrollhorizontal.to("#section1-4 .changetext5", 1, {
  text: {
    value: "Oops, it appears that this schedule is already full",
    ease: Linear.easeNone,
  }
},9).to("#shadowsection .scrollbar",1, { width:"45%"},9);

scrollhorizontal.to("#section1-4 .changetext5", 1, {
  text: { value: "", ease: Linear.easeNone },
},10).to("#section1-4 .kalender", 1, { x: "-100vh" },10).to("#shadowsection .scrollbar",1, { width:"50%"},10);

scrollhorizontal.to("#section1-4 .changetext5", 1, {
  text: { value: "Don't worry, EVA's here to help", ease: Linear.easeNone },
},11).to("#section1-4 .instruction", 1, { opacity: 1 },11).to("#shadowsection .scrollbar",1, { width:"55%"},11);
// SECTION1-4
scrollhorizontal.to(sections,1, {
  xPercent: -300
},12);
// SECTION2-1
scrollhorizontal.from("#section2-1 .gambarsurat", 1, {
  x:"100vh",
  rotation:-13,
},13).from("#section2-1 .yellowline", 1, {
  scaleX:0,
},13).to("#shadowsection .scrollbar",1, { width:"60%"},13);

scrollhorizontal.from("#section2-1 .notif", 1, {
  scale:0,
  transformOrigin:"top right",
},14).to("#shadowsection .scrollbar",1, { width:"65%"},14);

scrollhorizontal.to("#section2-1 .notif", 1, {
  scale:0,
  transformOrigin:"top right",
},15).to("#shadowsection .scrollbar",1, { width:"80%"},15);

scrollhorizontal.from("#section2-1 .foto-surat1", 1, {
  scale:0,
  transformOrigin:"top left",
},16).to("#shadowsection .scrollbar",1, { width:"90%"},16);

scrollhorizontal.to("#section2-1 .foto-surat1", 1, {
  x:130,
  y:-100,
  rotation:10,
},17).from("#section2-1 .foto-surat2", 1, {
  scale:0,
  transformOrigin:"top left",
},17).to("#shadowsection .scrollbar",1, { width:"100%"},17);

let jingle = gsap.to('.notif',3,{rotation:-10,repeat: -1,yoyo:true});
// SECTION2-1
ScrollTrigger.create({
  animation: scrollhorizontal,
  trigger: ".ccontainer",
  pin: true,
  scrub: 1,
  snap: 1/18,
  end: () => "+=10000" 
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

