/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window\Global binding: This is the console object
* 2. Implicit binding: Call the function using a . in front. Whatever is in front of the . is this
* 3. New Binding: Create a new object using a constructor 
* 4. Explicit binding: it's defined when call or apply is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function winBind(phrase) {
//     console.log(this);
//     return phrase;
// }
// winBind ("This is Window Binding");

// Principle 2

// code example for Implicit Binding

const impBind = {
    pizza: "supreme",
    yourOrder: function(name) {
        console.log(`${name} ordered a ${this.pizza} pizza!`)
    }
}
impBind.yourOrder("Curtis");

// Principle 3

// code example for New Binding

function pizzaOrder (name, pizza, quantity) {
    this.customer = name;
    this.items = pizza;
    this.howMany = quantity;
    this.order = function(){
        console.log(`${this.customer} ordered ${this.howMany} ${this.items} pizzas.`);
    }
}
const curtis = new pizzaOrder("Curtis", "Supreme", 5);
curtis.order();

// Principle 4

// code example for Explicit Binding

function pizzaOrder(name, pizza, quantity) {
    this.customer = name;
    this.items = pizza;
    this.howMany = quantity;
    this.order = function () {
        console.log(`${this.customer} ordered ${this.howMany} ${this.items} pizzas.`);
    }
}
const curtis2 = new pizzaOrder("Curtis", "Supreme", 5);
const samantha = new pizzaOrder("Samantha", "pepperoni", 2);

curtis2.order();
samantha.order();

samantha.order.apply(curtis2);

