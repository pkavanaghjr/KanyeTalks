
var controller;

$(document).ready(function() {
	

	// VARIABLES
	var controller = new ScrollMagic();
	
	
	// INITIALIZATION				
navigator.sayswho= (function(){
	var ua= navigator.userAgent, tem, 
	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1])){
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}
	if(M[1]=== 'Safari'){
		window.location = "getChrome.html";
		tem= ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'Opera '+tem[1];
	}
	if(M[1]=== 'Firefox'){
		window.location = "getChrome.html";
		tem= ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'Opera '+tem[1];
	}
	if(M[1]=== 'msie'){
		window.location = "getChrome.html";
		tem= ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'Opera '+tem[1];
	}
	if(M[1]=== 'Opera'){
		window.location = "getChrome.html";
		tem= ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'Opera '+tem[1];
	}
	
	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	return M.join(' ');
})();	

	
	
	// EVENT HANDLERS	
	$("#")
		

	
	// FUNCTIONS

//========================= LANDING FMA ================

	function pulseHeart(){
			var pulseHeart = TweenMax.fromTo('#heartScroll',.5,{scale:1,}, {scale:1.2,repeat:-1,repeatDelay:0.1,yoyo:true,ease:Linear.easeInOut});
	};
	pulseHeart();
	
	function startFma(){
		$("#fmaAngle1").stop(true).delay(0).animate({top:"540px"},750,"easeInOutExpo");
		$("#fmaKanye").stop(true).delay(130).animate({height:"602px", opacity: 1,},750,"easeInOutExpo");					
		$("#fmaAngle2").stop(true).delay(450).animate({top:"320px"},750,"easeInOutExpo");
		$("#fma h1").stop(true).delay(550).animate({top:"225px"},750,"easeInOutExpo");
		$("#fmaAngle3").stop(true).delay(650).animate({top:"90px"},750,"easeInOutExpo");		
		var tweenTitle = TweenMax.to("#fma h1", 1, {text:"Kanye West", delay: 2, color:"#f1eeb7", repeat:-1, repeatDelay:3, yoyo:true, ease:Linear.easeNone});
		var tweenNotes = TweenMax.to("#fma h3", 1, {delay: 4, opacity:1, color:"#f1eeb7", repeat:-1, repeatDelay:.8, yoyo:true, ease:Linear.easeNone});		
	};

	// initialize fma animation
	startFma();

//========================= PARALLAX SCROLL MAGIC ================
	// build tween
	var fmaParallax = new TimelineMax ()
	.add([
		TweenMax.fromTo("#fmaKanye", 1, { }, {left: -500, ease: Linear.easeNone}),
		TweenMax.fromTo("#fma h1", 1, { }, {top: 700, autoAlpha: .01, ease: Linear.easeNone}),
		//TweenMax.fromTo("#fmaAngle1", 1, { }, {top: -300, ease: Linear.easeNone}),
		TweenMax.fromTo("#fmaAngle2", 1, { }, {top: -400, autoAlpha: .4, ease: Linear.easeNone}),
		TweenMax.fromTo("#fmaAngle3", 1, { }, {top: 2000, autoAlpha: .01, ease: Linear.easeNone}),
		TweenMax.to("#navList", 1, {left:"1%", ease:Back.easeInOut}),		
		TweenMax.to("#fma h3", 1, {opacity:0, ease:Back.easeInOut}),		
	]);
	
	// build scene
	var fmaScene = new ScrollScene({
		triggerElement: "#fma",
		offset:0,
		triggerHook:0,
		duration: 1300
	})
	.setTween(fmaParallax)
	.addTo(controller);

	
	
//========================= SCROLL MAGIC ONE ================
		
	// QUOTE 1 ______
	var tweenLine1 = new TimelineMax ()
	.add([
TweenMax.fromTo('#quoteOne h1',100,{left:"0%",top:110,opacity:0}, {left:"-11.8%",top:120,opacity:1,delay:0,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteOne h2',100,{left:"0%",top:155,opacity:0}, {left:"-12.5%",top:165,opacity:1,delay:10,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteOne #qoneThree',100,{scale:0,}, {scale:1,delay:30,ease:Back.easeInOut}), // tition ani
TweenMax.fromTo('#quoteOne h3',100,{left:"0%",top:200,opacity:0}, {left:"-5%",top:210,opacity:1,delay:20,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteOne h4',100,{left:"0%",top:245,opacity:0}, {left:"-13%",top:255,opacity:1,delay:70,ease:Back.easeInOut}),
TweenMax.fromTo("#quoteOne #qoneFour",100,{color:"#ededed"}, {text:"Picasso.",color:"#f1eeb7",delay:150,}),
TweenMax.fromTo('#quoteOne h5',100,{left:"0%",top:300,opacity:0}, {left:"-17%",top:310,opacity:1,delay:120,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteOne #qoneFive',100,{rotation:200, scale:0}, {rotation:360,scale:1,delay:100}), //pyramid
TweenMax.fromTo('#backBarQuoteOne',500,{top:1700,opacity:1}, {top:900,opacity:1,delay:30,ease:Linear.easeNone}),//backBar
TweenMax.staggerTo('.animateOne',120, {left:"-50%",opacity:0,delay:380,ease:Back.easeInOut},0.4)	
	])
	
	
	// SCENE: QUOTE 1 ______
	var scene1 = new ScrollScene({
		triggerElement: '#quoteOne',
		offset: 250, 
		duration: 1600
	})
	.setTween(tweenLine1)
	.setPin("#quoteOne")
	.setClassToggle("#sectionOne", "activeSection")	
	.addTo(controller);
	
	
	//  Build Tween
	var objects1 = new TimelineMax ()
	.add([
TweenMax.fromTo('#pyramidYe',5,{right:"-5%",top:1150,opacity:1}, {right:"15%",top:2200,opacity:1,delay:0,ease:Linear.easeInOut}),
TweenMax.fromTo('#wipeQuoteOne',5,{top:1600,opacity:1}, {top:2700,opacity:1,delay:0,ease:Linear.easeInOut}),
	])

	
	// SCENE: QUOTE 1 ______
	var sceneObjects1 = new ScrollScene({
		triggerElement: '#quoteOne',
		offset: 0, 
		duration: 2300
	})	.setTween(objects1)
	.addTo(controller);
	
	
//========================= SCROLL MAGIC TWO ================
	
	// QUOTE 2 ______
	var tweenLine2 = new TimelineMax ()
	.add([
/*		TweenMax.fromTo('#quoteTwo h1',100,{top:300,left:"-11.4%",text:{value:""}}, {top:310,text:{value:"I am God's vessel.", delimiter:""},}),
		TweenMax.fromTo('#quoteTwo h2',100,{top:345,left:"-2.5%",text:{value:""}}, {top:355,text:{value:"But my greatest pain in life", delimiter:""},}),
		TweenMax.fromTo('#quoteTwo #qtwoOne',100,{scale:1}, {scale:10,}),	
		TweenMax.fromTo('#quoteTwo h3',100,{top:390,left:"-5.8%",text:{value:""}}, {top:400,text:{value:"is that I will never", delimiter:""},}),
		TweenMax.fromTo('#quoteTwo h4',100,{top:435,left:"6%",text:{value:""}}, {top:445,text:{value:"be able to see myself perform live.", delimiter:""},}),
		TweenMax.fromTo('#quoteTwo h5',100,{top:750,text:{value:""}}, {top:750,text:{value:"- KANYE WEST -", delimiter:""},}),
		TweenMax.to('.animateTwo',50,{delay:150,text:{value:""},opacity:0},0.1),
*/

/*		TweenMax.fromTo('#quoteTwo h1',100,{top:300,left:"3%",}, {top:305,left:"5%",opacity:1,delay:0,ease:SlowMo.ease}),
		TweenMax.fromTo('#quoteTwo h2',100,{top:345,left:"3%",}, {top:350,left:"14%",opacity:1,delay:10,ease:Power2.easeIn}),
		TweenMax.fromTo('#quoteTwo #qtwoOne',60,{scale:1.5, opacity:0, color:"#fff"}, {scale:1,color:"#f1eeb7",opacity:1,delay:50}),//	
		TweenMax.fromTo('#quoteTwo h3',100,{top:390,left:"3%",}, {top:395,left:"11%",opacity:1,delay:20,ease:Elastic.easeIn}),
		TweenMax.fromTo('#quoteTwo h4',100,{top:435,left:"3%",}, {top:440,left:"23%",opacity:1,delay:30,ease:Circ.easeIn}),
		TweenMax.fromTo('#quoteTwo #qtwoTwo',25,{scale:0.93, color:"#f1eeb7",rotation:0}, {scale:1.04,color:"#bf3d16",rotation:1.5,delay:200,repeat:10,repeatDelay:.4,yoyo:true}),	//
		TweenMax.fromTo('#quoteTwo h5',100,{top:490,left:"3%"}, {top:495,left:"14%",opacity:1,delay:40,ease:Expo.easeIn}),
		TweenMax.fromTo('#backBarQuoteTwo',500,{top:4000,}, {top:3000,delay:30,ease:Linear.easeNone}),//backBar
		TweenMax.staggerTo('.animateTwo',50,{opacity:0,delay:380,},0.1),
*/

TweenMax.fromTo('#quoteTwo h1',150,{top:820,left:"-1%",scale:1.4,}, {top:365,left:"0%",opacity:1,scale:1,delay:0,ease:Power3.easeInOut}),
TweenMax.fromTo('#quoteTwo h2',150,{top:865,left:"-1%",scale:1.4,}, {top:410,left:"10%",opacity:1,scale:1,delay:10,ease:Power3.easeInOut}),
TweenMax.fromTo('#quoteTwo #qtwoOne',60,{scale:2, opacity:0, color:"#fff"}, {scale:1,color:"#f1eeb7",opacity:1,delay:100}),//	
TweenMax.fromTo('#quoteTwo h3',150,{top:910,left:"-1%",scale:1.4,}, {top:455,left:"7%",opacity:1,scale:1,delay:20,ease:Power3.easeInOut}),
TweenMax.fromTo('#quoteTwo h4',150,{top:955,left:"-1%",scale:1.4,}, {top:500,left:"19%",opacity:1,scale:1,delay:30,ease:Power3.easeInOut}),
//TweenMax.fromTo('#quoteTwo #qtwoTwo',25,{scale:1, color:"#f1eeb7",rotation:0}, {scale:1.1,color:"rgba(191,61,22,.5)",rotation:1.5,delay:200,repeat:10,repeatDelay:2,yoyo:true}),	//
TweenMax.fromTo('#quoteTwo h5',150,{top:1010,left:"-1%",scale:1.4,}, {top:555,left:"10%",opacity:1,scale:1,delay:40,ease:Power3.easeInOut}),
TweenMax.fromTo('#backBarQuoteTwo',500,{top:4000,}, {top:3500,delay:30,ease:Linear.easeNone}),//backBar
//TweenMax.staggerTo('.animateTwo',125,{opacity:0,left:"40%",top:100,delay:380,},0.4),
TweenMax.staggerTo('.animateTwo',125,{opacity:0,scale:0,top:300,left:"18%",delay:380,ease:Power3.easeIn},5),
	])
	
	
	// SCENE: QUOTE 2 ______
	var scene2 = new ScrollScene({
		triggerElement: '#quoteTwo',
		offset: 500,
		duration: 2000
	})
	.setTween(tweenLine2)
	.setPin("#quoteTwo")
	.setClassToggle("#sectionTwo", "activeSection")	
	.addTo(controller);
	
	
	
	//  Build Tween
	var objects2 = new TimelineMax ()
	.add([
TweenMax.fromTo('#godYe',5,{left:"-30%",top:3010,}, {left:"20%",top:4580,ease:Linear.easeInOut}),
TweenMax.fromTo('#wipeQuoteTwo',5,{top:3310,}, {top:4890,delay:0,ease:Linear.easeInOut}),
	])
	
//TweenMax.fromTo('#pyramidYe',5,{right:"-5%",top:1050,opacity:1}, {right:"15%",top:2100,opacity:1,delay:0,ease:Linear.easeInOut}),
//TweenMax.fromTo('#wipeQuoteOne',5,{top:1500,opacity:1}, {top:2600,opacity:1,delay:0,ease:Linear.easeInOut}),

	// SCENE: QUOTE 2 ______
	var sceneObjects2 = new ScrollScene({
		triggerElement: '#quoteTwo',
		offset: 0, 
		duration: 2600
	})	
	.setTween(objects2)
	.addTo(controller);		
			

//========================= SCROLL MAGIC THREE ================
		
	// QUOTE 3 ______
	var tweenLine3 = new TimelineMax ()
	.add([
TweenMax.fromTo('#quoteThree h1',200,{left:"-23%",top:700,opacity:0}, {left:"-23%",top:380,opacity:1,delay:0,ease:Sine.easeInOut}),
TweenMax.fromTo('#quoteThree h2',200,{left:"-8.5%",top:750,opacity:0}, {left:"-8.5%",top:425,opacity:1,delay:10,ease:Sine.easeInOut}),
TweenMax.fromTo('#quoteThree h3',400,{left:"-65%",top:470,opacity:1}, {left:"-20%",top:470,opacity:1,delay:30,ease:Sine.easeInOut}),
TweenMax.fromTo('#quoteThree h4',200,{left:"-15%",top:850,opacity:0}, {left:"-15%",top:515,opacity:1,delay:30,ease:Sine.easeInOut}),
TweenMax.fromTo('#quoteThree h5',200,{left:"-15%",top:900,opacity:0}, {left:"-15%",top:560,opacity:1,delay:40,ease:Sine.easeInOut}),
TweenMax.fromTo('#quoteThree h6',200,{left:"-17%",top:950,opacity:0}, {left:"-17%",top:615,opacity:1,delay:90,ease:Sine.easeInOut}),
TweenMax.fromTo('#backBarQuoteThree',500,{top:6400,}, {top:5800,delay:30,ease:Linear.easeNone}),//backBar
TweenMax.staggerFromTo('.animateThree',100,{}, {top:100,opacity:0,delay:450,ease:Sine.easeInOut},4)	
		// time spacer
	])
	
	// SCENE: QUOTE 3 - IN ______
	var scene3 = new ScrollScene({
		triggerElement: '#quoteThree',
		offset: 500, 
		duration: 2000
	})
	.setTween(tweenLine3)
	.setPin("#quoteThree")
	.setClassToggle("#sectionThree", "activeSection")
	.addTo(controller);
	
	
	//  Build Tween
	var objects3 = new TimelineMax ()
	.add([
TweenMax.fromTo('#waterYe',5,{top:5500,right:"-60%",}, {top:6500,right:"20%",delay:0,ease:Linear.easeInOut}),
TweenMax.fromTo('#wipeQuoteThree',5,{top:6000,}, {top:6930,delay:0,ease:Linear.easeInOut}),
	])
	
//TweenMax.fromTo('#pyramidYe',5,{right:"-5%",top:1050,opacity:1}, {right:"15%",top:2100,opacity:1,delay:0,ease:Linear.easeInOut}),
//TweenMax.fromTo('#wipeQuoteOne',5,{top:1500,opacity:1}, {top:2600,opacity:1,delay:0,ease:Linear.easeInOut}),

	// SCENE: QUOTE 3 ______
	var sceneObjects3 = new ScrollScene({
		triggerElement: '#quoteThree',
		offset: 0, 
		duration: 2600
	})	
	.setTween(objects3)
	.addTo(controller);		
	
	
	
//========================= SCROLL MAGIC FOUR ================
		
	// QUOTE 4 ______
/*	var tweenLine4 = new TimelineMax ()
	.add([
TweenMax.fromTo('#quoteFour h1',100,{left:"0%",top:110,opacity:0}, {left:"-11.8%",top:340,opacity:1,delay:0,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteFour h2',100,{left:"0%",top:155,opacity:0}, {left:"-12.5%",top:385,opacity:1,delay:10,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteFour h3',100,{left:"0%",top:200,opacity:0}, {left:"-5%",top:430,opacity:1,delay:20,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteFour h4',100,{left:"0%",top:245,opacity:0}, {left:"-13%",top:475,opacity:1,delay:70,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteFour h5',100,{left:"0%",top:300,opacity:0}, {left:"-17%",top:520,opacity:1,delay:120,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteFour h6',100,{left:"0%",top:300,opacity:0}, {left:"-17%",top:565,opacity:1,delay:120,ease:Back.easeInOut}),
TweenMax.fromTo('#quoteFour p',100,{left:"0%",top:300,opacity:0}, {left:"-17%",top:610,opacity:1,delay:120,ease:Back.easeInOut}),
TweenMax.fromTo('#backBarQuoteFour',500,{top:1700,opacity:1}, {top:900,opacity:1,delay:30,ease:Linear.easeNone}),//backBar
TweenMax.staggerTo('.animateFour',120, {left:"0%",opacity:0,delay:380,ease:Back.easeInOut},0.4)	
	])
	
	
	// SCENE: QUOTE 4 ______
	var scene4 = new ScrollScene({
		triggerElement: '#quoteFour',
		offset: 500, 
		duration: 2000
	})
	.setTween(tweenLine4)
	.setPin("#quoteFour")
	.setClassToggle("#sectionFour", "activeSection")	
	.addTo(controller);
	
	
	//  Build Tween
	var objects4 = new TimelineMax ()
	.add([
TweenMax.fromTo('#wipeQuoteFour',5,{top:6000,opacity:1}, {top:7000,opacity:1,delay:0,ease:Linear.easeInOut}),
	])

	
	// SCENE: QUOTE 4 ______
	var sceneObjects4 = new ScrollScene({
		triggerElement: '#quoteFour',
		offset: 0, 
		duration: 2300
	})	
	.setTween(objects4)
	.addTo(controller);
*/	
	
	
//========================= SCROLL MAGIC FINAL ================
	//  Build Tween
	var objects5 = new TimelineMax ()
	.add([
TweenMax.fromTo('#footer h1',1000,{top:400,text:"",}, {top:1580,text:"Relive the Glory",delay:250,}),
TweenMax.fromTo('#footerYe',1000,{top:1300,left:"-20%",}, {top:1500,left:"10%",delay:150,ease:Linear.easeInOut}),
TweenMax.fromTo('#backBarQuoteFooter',1100,{top:1000,}, {top:400,delay:30,delay:0,ease:Linear.easeNone}),//backBar
	])
	
//TweenMax.fromTo('#pyramidYe',5,{right:"-5%",top:1050,opacity:1}, {right:"15%",top:2100,opacity:1,delay:0,ease:Linear.easeInOut}),
//TweenMax.fromTo('#wipeQuoteOne',5,{top:1500,opacity:1}, {top:2600,opacity:1,delay:0,ease:Linear.easeInOut}),

	// SCENE: QUOTE 3 ______
	var sceneObjects5 = new ScrollScene({
		triggerElement: '#footer',
		triggerHook: 1,
		offset: 750, 
		duration: 1290
	})	
	.setTween(objects5)
//	.setPin("#footer")
	.addTo(controller);		
	
	
	
	controller.scrollTo(function (newpos) {
		console.log("scroll");
		TweenMax.to(window, 1, {scrollTo: {y: newpos}});
		
	});
	

//========================= SCROLL NAVIGATION ================
	// scene 1
	$("#heartScroll").on("click",function(event){
		event.preventDefault();
		controller.scrollTo("#fma");
	});



	// scene 1
	$("#sectionOne").on("click",function(event){
		event.preventDefault();
		console.log("click1");
		var destination = $(this).attr("href");
		console.log(destination);	
		controller.scrollTo(destination);
	});
		
	// scene 2
	$("#sectionTwo").on("click",function(event){
		event.preventDefault();
		console.log("click1");
		var destination = $(this).attr("href");
		console.log(destination);	
		controller.scrollTo(destination);
	});
		
	// scene 3
	$("#sectionThree").on("click",function(event){
		event.preventDefault();
		console.log("click1");
		var destination = $(this).attr("href");
		console.log(destination);	
		controller.scrollTo(destination);
	});



//	fmaScene.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "FMA"});
/*	sceneObjects1.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "PYR YE"});
	sceneObjects2.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "LIVE YE"});
	sceneObjects3.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "WATER YE"});
	sceneObjects4.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "DONT YE"});
	scene1.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "1 Q1"});	
	scene2.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "2 Q2"});	
	scene3.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "3 Q3"});	
	scene4.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "3 Q3"});	
*/

});