console.log('Working!');

let theBox = document.querySelector('.box');

// gsap is the greenstock animation library (this is called a namespace)
// it has lots of methods you can run (these are all in the documentation)
// the simplest is the "to" method, which takes an options object as its argument and applies the values as specified

gsap.to(theBox, {
        x: 200, 
        y: 150, 
        borderRadius: "50%", 
        rotation: "180deg", 
        backgroundColor: "blue", 
        duration: 1, ease: "elastic.out(1, 0.3)"
    }
);

function myFunc(arg1, arg2) {
    console.log(`do something else here... $(arg1) $(arg2)`);
}