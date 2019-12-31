const hamb = document.querySelector('.menu--nav');
const list = hamb.firstElementChild.classList;
hamb.addEventListener('click', (e) => {
	if ( e.target !== e.currentTarget ) return
	if ( list.contains('active') )
		list.remove('active');
	else
		list.add('active');
});

TweenMax.from('.hero--category', 5, { x: -100, opacity: 0 });

var controller = new ScrollMagic.Controller();
var heroAnimation = new TimelineMax()
	.to('.hero--title', 1, { y: 180, scale: 1.1})
	.to('.hero--title-back', 1, { y: -160, scale: .9 }, .2)

new ScrollMagic.Scene({
  triggerElement: '.hero',
  triggerHook: 0,
  duration: "100%"
}).setTween(heroAnimation).addTo(controller);




let cardsAnimation = new TimelineMax()
	.to('.people.first', 1, { x: -20 })
	.to('.people.second', 1, { x: -20 })
	.to('.people.third', 1, { x: -20 })

new ScrollMagic.Scene({
  triggerElement: '.section.cards',
 	triggerHook: .3,
  duration: "340%"
}).setTween(cardsAnimation).addTo(controller);




let footerAnimation = new TimelineMax({ repeat: -1, yoyo: true })
	.to('.footer--thing > span:first-child', 1, { x: -30 })

new ScrollMagic.Scene({
  triggerElement: '.footer',
 	triggerHook: .5,
  duration: "100%"
}).setTween(footerAnimation).addTo(controller);