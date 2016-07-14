# Javascript Cheatsheet

Primitives (true/false), Variables, Data Structures, (Arrays, Objects (Brackets, Dot)), HOF, Flow Control (conditionals), Loops (for, while, for in), operators (math, logical, comparison), functions (parameters vs objects), scope, hoisting, callbacks, string concatenation, computer science (bigO), import/export functions, methods vs functions

## Data Types

### Primitives

A primitive is data that's immutable. In other words, data that can't be changed. Building blocks, Legos!

1.  Boolean - `true` or `false`
1.  Number - integers of floats
1.  String - text
1.  Undefined - value has not been defined
1.  Null - intentional absence of an object value (intentionally valueless)
1.  Symbol - (ES6)

### Variables

Container to store a piece of data (values). Shortcut for storing data.

1.  Declare - using `var`
1.  Naming - can't start with a number, can't have spaces, avoid symbols except `_`, `$`, should be descriptive, use camelCase

## Data Structures

1.  Arrays - container for primitives (and other data structures), accessed via index, maintain order
1.  Objects - key/value oarts, accessed via bracket or dot notation, not ordered

## Programming Paradigms

Procedural vs Functional

1.  Procedural - Javascript renders commands in order (set of instructions)
1.  Functional - break apart code/problem logically, generally separate state from behavior

## Flow Control

Decides which things run based on specific conditions or loops

1.  if else
1.  if
1.  else if
1.  else
1.  Can be nested

## Loops

Runs a piece of code for a certain amount of iterations

1.  Infinite Loop - loop that runs forever, you can run out of memory
1.  For
1.  While
1.  For in
1.  For of
1.  Do While




## scope

Range in which a varible can be accessed

1.  Local and Global (functional/lexical)
1.  Global - accessible everywhere; local accessible only when the function is invoked

```javascript
function foo()
  {
    var test = 'some string';
    function bar()
    {
      console.log(test);
    }
  }
```

## Hoisting

The process by which the computer moves all variable declarations to the top of the applicable scope, so that it never encounters a variable it is unaware of. It's important to note that it does not move the variable assignment to the top of the page.

`var foo = bar;`

moves declarations `var foo;` BUT NOT assignment `var foo = bar;`

## Higher Order Functions

function can take functions; the function thats passed into the higher order function is the callback

async - different code can run at different times

what happens is one function is dependent on another functions output

``` javascript

function testing()
{
  return ing
}

function test()
{
  return 'test' + arg;
}

var x =testing()
test(x)
```

## String Concatenation

used to join 2 or more strings

``` javascript
'test' + 'ing';
```

`'test'.concat('ing')`

you can also use `+=`

## Computer Science

### bigO Notation

Big-O notation is how developers discuss the complexity of an algorithm as a way to understand how fast a program will run given it's input. Big-O notation deals with the worst case scenario for the algorithm. In other words, if the program may run quickly, but there is a chance it could take a long time given some input, then the Big-O runtime will deal with the longer case.

1.  o(n) linear, direclty realted to input size
1.  o(1) - constant time, bound by a constant, regardless of input size runtime remains the same
1. o(n^2) - quadratic time, a nested loops
1.  A "flogaritihm" of a postiive number (n) represent by (log(n)) is the number of digits it has
1.  factorial - complexity is worse then quadratic

[Big O Cheatsheet](http://bigocheatsheet.com/)



## Operators

### Math

1.  (+) Addition
1.  (-) Subtraction
1.  &#42; Multiplication
1.  (/) Division
1.  (%) Modulus
1.  (++)	Increment
1.  (--)	Decrement

### Assignment

1.  =
1.  +=
1.  -=
1.  &#42;=
1.  /=
1.  %=

### Comparison Operators

1.  ==	equal to
1.  ===	equal value and equal type
1.  !=	not equal
1.  !==	not equal value or not equal type
1.  (>)	greater than
1.  (<)	less than
1.  (>=)	greater than or equal to
1.  (<=)	less than or equal to
1.  (?)	ternary operator

### Logical Operators

1.  (&&) both statements are true
1.  (||) either statements are true

### Type Operators

1.  (typeof) Returns the type of a variable
1.  (instanceof) Returns true if an object is an instance of an object type

## Functions

a reusable code block that does one specific thing

1.  methods vs functions - method is a function that is contained within an object
1.  functions are first class citizens and can be used as arguments
1.  can have optional
1.  functions always return somethingl if not explicitly set, then it returns `undefined`


### Parameter

A Parameter is a variable in the signature of a function declaration or definition:

``` javascript
function (parameter) {

}
```

### Argument

An Argument is the value that gets passed to the function when calling it:

``` javascript
function(argument);
```

### Creating Functions

```javascript
function greet() {
  console.log("Hello, World!");
}```

### Invoking Functions

Type the name of the function

`greet`
