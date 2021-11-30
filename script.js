var tl = gsap.timeline();
tl

.from('#back',{
    ease:Expo.easeInOut,
    duration:4,
    x:90,
    // y:80
},'-=2.5')

.from('#back img',{
    ease:Expo.easeInOut,
    duration:3,
    x:20,
    // y:-190,
     opacity:0,
    delay:1

},"-=1.4")