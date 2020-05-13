const user = {
    name: 'Ed',
    age: 25, 
    sayName: function(){
        console.log(`my name is ${this.name}`); 

        const fullName = () => console.log(`My name is ${this.name} and my age is ${this.age}`)
        fullName();
    }
}

user.sayName();
