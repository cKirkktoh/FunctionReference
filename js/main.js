console.log('Working!');

let theButton = document.querySelector('.greet')
    theDisplay = document.querySelector('message')

// Functions are a re-runnable blocks of code that can be invoked at any time
// the take a name and optionally some arguments that can mae the function
// dynamic -> accept inputs, generate outputs

// this means that a single function can do many things,
// depending on what data you pass to it

function sayHello(message = "hey there! early friday and coding! FUN!!") {
    let displayString = "You said ";

    if (event) { 
        displayString += event.dataset.message; "You said: "
    };

    console.log(displayString);
}

function sum(a, b) {
    console.log(a + b);

    theDisplay.textContent = a + b;
}



theButton.addEventListener('click', sayHello);

// throw some dfferent data at the sum function
sum('one', 'two');

sum(3, 5);
