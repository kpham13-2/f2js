// Person class, the constructor.
var Person = function(firstName, parentName, age) {
    this.firstName = firstName;
    this.parentName = parentName;
    this.age = age;
};

// isDead method
Person.prototype.isDead = function () {
    console.log('Is this person dead?');
    if (this.age === undefined) {
        console.log('This person is dead.');
        return true;
    } else if (this.age === 0) {
        console.log('This person is not born yet.');
        return false;
    } else if (this.age > 120) {
        console.log(this.age + "... incredible! I don't believe it!");
        return true;
    } else {
        console.log('This person is not dead.');
        return false;
    }
};

// JSFIDDLE: http://jsfiddle.net/kpham13/5nb9fs7d/1/
