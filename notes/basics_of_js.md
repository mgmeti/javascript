JavaScript is case-sensitive and uses the Unicode character set.
In JavaScript, instructions are called statements and are separated by semicolons (;).

The source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments, or whitespace.

#### Comments:
// a one line comment

/* this is a longer,
 * multi-line comment
 */

 #### Declarations:
 JavaScript has three kinds of variable declarations.

var
Declares a variable, optionally initializing it to a value.

let
Declares a block-scoped, local variable, optionally initializing it to a value.

const
Declares a block-scoped, read-only named constant( Has to initialize it while declaration time).

#### Variables:
You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). 

Subsequent characters can also be digits (0 – 9). 
Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).

Note:
With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables, depending on the execution context.

With the keyword const or let. For example, let y = 13. This syntax can be used to declare a block-scope local variable.

You can declare variables to unpack values using the destructuring assignment syntax. For example, 
const foo = { bar : "Variable"}
const { bar } = foo; // un packing

Variables should always be declared before they are used. JavaScript used to allow assigning to undeclared variables, which creates an undeclared global variable. This is an error in strict mode and should be avoided altogether.

Declaration and initialization
In a statement like let x = 42, the let x part is called a declaration, and the = 42 part is called an initializer. 
The declaration allows the variable to be accessed later in code without throwing a ReferenceError, while the initializer assigns a value to the variable. 
In var and let declarations, the initializer is optional. If a variable is declared without an initializer, it is assigned the value undefined.
const declarations always need an initializer, because they forbid any kind of assignment after declaration

#### Variable scope:
A variable may belong to one of the following scopes:

Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.
In addition, variables declared with let or const can belong to an additional scope:

Block scope: The scope created with a pair of curly braces (a block).

When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. 
When you declare a variable within a function, it is called a local variable, because it is available only within that function.

However, variables created with var are not block-scoped, but only local to the function (or global scope) that the block resides within.


#### Variable hoisting
var-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet. You can see var declarations as being "lifted" to the top of its function or global scope. However, if you access a variable before it's declared, the value is always undefined, because only its declaration and default initialization (with undefined) is hoisted, but not its value assignment.

Referencing the variable in the block before the variable declaration always results in a ReferenceError, because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

Unlike var declarations, which only hoist the declaration but not its value, function declarations are hoisted entirely — you can safely call the function anywhere in its scope.


#### Global variables
Global variables are in fact properties of the global object.

In web pages, the global object is window, so you can read and set global variables using the window.variable syntax.


#### Constants
You can create a read-only, named constant with the const keyword. 

A constant cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value. 

However, const only prevents re-assignments, but doesn't prevent mutations. The properties of objects assigned to constants are not protected.

Also, the contents of an array are not protected,

### Data structures and types
#### Data types
    -> Seven data types that are primitives:

        Boolean =>  true and false.
        null => A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
        undefined => A top-level property whose value is not defined.
        Number => An integer or floating point number. For example: 42 or 3.14159.
        BigInt => An integer with arbitrary precision. For example: 9007199254740992n.
        String => A sequence of characters that represent a text value. For example: "Howdy".
        Symbol => A data type whose instances are unique and immutable.

    -> Object 
    While 'functions' are technically a kind of object, you can think of objects as named containers for values, and functions as procedures that your script can perform.

#### Data type conversion
JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

let answer = 42;   

answer = "Thanks for all the fish!";

#### Numbers and the '+' operator
In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.

x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"

"37" - 7; // 30
"37" * 7; // 259

Converting strings to numbers
In the case that a value representing a number is in memory as a string, there are methods for conversion.

parseInt()
parseFloat()

parseInt("101", radix=2); // 5

#### Literals
Literals represent values in JavaScript. 
1. Array literals:
An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

const coffees = ["French Roast", "Colombian", "Kona"]; // 3

Note: Array literals create Array objects.

2. Boolean literals:
The Boolean type has two literal values: true and false.

3. Numeric literals:
JavaScript numeric literals include integer literals in different bases as well as floating-point literals in base-10.

#### Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

##### Enhanced Object literals
Object literals support a range of shorthand syntaxes that include setting the prototype at construction, shorthand for foo: foo assignments, defining methods, making super calls, and computing property names with expressions.

const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};

##### String literals
A string literal is zero or more characters enclosed in double (") or single (') quotation marks. 

'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"

You can call any of the String object's methods on a string literal value. JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object. 

Note: Template literals provide syntactic sugar for constructing strings.
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
const name = 'Lev', time = 'today';
`Hello ${name}, how are you ${time}?`