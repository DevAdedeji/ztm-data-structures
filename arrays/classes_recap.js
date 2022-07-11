// Reference types
// Objects are called reference types in Javascript.
// 1, null, "string", true, undefined etc are primitive types in Javascript.

// Two data types. Reference types and primitive types.
const object1 = {
	value: 15
};

const object2 = object1;
// object2 refernces object1. So object1 === object2 will return true.

const object3 = {
	value: 10
}

// Arrays are objects at the end of the day. They are passed by reference.
// [] === [] will return false since both empty arrays refer to new arrays being created


// Context
// Context !== Scope
// Rule of thumb is that scope is created when there is a curly bracket.
// Scope, for example refers to varibles declared in a function. They don't exist outside of that functions scope.

// Context tells where we are within the object.
// This is where the this keyword comes in.
// This just refers to what object a value is inside of.
const object4 = {
	a: () => {
		console.log(this)
	}
}
// Function being referred to in a now has object4 as its context.

// Instantiation

// Instantiation refers to when you make a copy of an object and reuse the code.
class Player {
	constructor(name, type) {
		console.log(this)
		this.name = name;
		this.type = type;
	}

	introduceSelf() {
		console.log(`Hi, I'm ${this.name} and I'm a ${this.type}`)
	}
}
// Whenever the player clsss is made reference to, the constructor method will run first and create the player object.

class Wizard extends Player {
	// Classes have constructors
	constructor(name, type) {
		super(name, type)
		// Uing super with the inherited parameters whenever we extend from a class.
		// THis makws a reference to the parameters in the extended class.
	}
	play() {
		console.log(`Hola! I'm a ${this.type}`)
	}
}

const wizard1 = new Wizard('Yenmefer', 'Mage');
const wizard2 = new Wizard('Arduro', 'Healer');

wizard1.play();
wizard2.introduceSelf()


// The extend keyword "extends" the player class. Allow adding extra stuff to the Player class.