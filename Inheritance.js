
class Person{
    talk(){
        console.log('Talking');
    }
}

const me = new Person();
me.talk(); // Output: Talking

//Note: Person.prototype === me.__proto__

//------------------------

Person.prototype.talk = function(){
    console.log('New and Improved talking');
}
me.talk();

//---------------------------------------------------------------------------------------

Person.age = 12;

me.age = 32;
console.log(Person.age, me.age);

//---------------------------------------------------------------------------------------
// Method vs Property

// Here talk() is a Property and not a method of Person1 and it wont appear in prototype i.e.. talk will get copied to every instance of the child instance.
function Person1(){
    this.talk = function(){
        console.log('A Talking');
    }
}

// Here talk is a method of Person 1. Advantage: If you want to modify the function in the parent object, it will modify all the child instances

function Person2(){
    Person2.prototype.talk = function(){
        console.log('B Talking');
    }
}

const A = new Person1(); 
const B = new Person2();
A.talk(); 
B.talk();

// Usually, all the properties of an object is described using 'this' keyword and all the methods using prototyping
// Example
function Human(age, name, gender){
    this.age = age;
    this.name = name;
    this.gender = gender;


    Human.prototype.run = function(){
        console.log(`${this.name} is running`);
    }

    Human.prototype.eat = function(){

        console.log(`${this.name} is eating`);
    }
}

const C = new Human(32, 'Sam', 'male');
C.run(); // Sam is running


//---------------------------------------------------------------------------------------
// Extends

class Sapien {
    talk(){
        console.log('Talking')
    }
}

class SuperHuman extends Sapien{
    fly(){
        console.log('flying');
    }
} 

//---------------------------------------------------------------------------------------





//---------------------------------------------------------------------------------------
// Factory Function vs Constructor

// Factory Function

function personFactory(name){
    return {
        talk() {
            console.log(`I am ${name}`);
        }
    }
}

const P = personFactory('Nits');
P.talk();

// Constructor

function PersonConstructor(name){
    this.name = name;
    this.talk

}

const Q = new PersonConstructor('Anji');
Q.talk();









