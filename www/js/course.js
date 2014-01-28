// full example listing from http://autotelicum.github.io/Smooth-CoffeeScript/literate/js-intro.html

// --- A simple variable declaration
var foo = 'hello world';

// --- Whitespace has no meaning outside of quotation marks
var foo =         'hello world';

// --- Parentheses indicate precedence
2 * 3 + 5;    // returns 11; multiplication happens first
2 * (3 + 5);  // returns 16; addition happens first

// --- Tabs enhance readability, but have no special meaning
var foo = function() {
    console.log('hello');
};
foo();

// --- Concatenation
var foo = 'hello';
var bar = 'world';
console.log(foo + ' ' + bar); // 'hello world'

// --- Multiplication and division
console.log(2 * 3);
console.log(2 / 3);

// --- Incrementing and decrementing
var i = 1;
var j = ++i;  // pre-increment:  j equals 2; i equals 2
var k = i++;  // post-increment: k equals 2; i equals 3
console.log(i, j, k)

// --- Addition vs. concatenation
var foo = 1;
var bar = '2';
console.log(foo + bar);  // 12. uh oh

// --- Forcing a string to act as a number
var foo = 1;
var bar = '2';

// coerce the string to a number
console.log(foo + Number(bar));

// --- Forcing a string to act as a number (using the unary-plus operator)
console.log(foo + +bar);

// --- Logical AND and OR operators
var foo = 1;
var bar = 0;
var baz = 2;

console.log(foo || bar);   // returns 1, which is true
console.log(bar || foo);   // returns 1, which is true

console.log(foo && bar);   // returns 0, which is false
console.log(foo && baz);   // returns 2, which is true
console.log(baz && foo);   // returns 1, which is true

// --- Comparison operators
var foo = 1;
var bar = 0;
var baz = '1';
var bim = 2;

console.log(foo == bar);   // returns false
console.log(foo != bar);   // returns true
console.log(foo == baz);   // returns true; careful!

console.log(foo === baz);             // returns false
console.log(foo !== baz);             // returns true
console.log(foo === parseInt(baz));   // returns true

console.log(foo > bim);    // returns false
console.log(bim > baz);    // returns true
console.log(foo <= baz);   // returns true

// --- Flow control
var foo = true;
var bar = false;

if (bar) {
    // this code will never run
    console.log('hello!');
}

if (bar) {
    // this code won't run
    console.log('bar is true');
} else {
    if (foo) {
        console.log('bar is false, foo is true');
        // this code will run
    } else {
        // this code would run if foo and bar were both false
        console.log('bar is false, foo is false');
    }
}

// At this point you should have enough understanding of what's going on to
// follow along the text by yourself. Create a new file and include it from
// your HTML document.
