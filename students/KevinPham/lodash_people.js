var _ = require ('lodash');

var people = [
    {
        name: 'Hank',
        age: 29,
        parent: 'Don'
    },
    {
        name: 'Deborah',
        age: 30,
        parent: 'Don'
    },
    {
        name: 'Danny',
        age: 24,
        parent: 'Don'
    },
    {
        name: 'Don',
        age: 64,
        parent: 'Haskell'
    },
    {
        name: 'Kathy',
        age: 75,
        parent: 'Lenora'
    },
    {
        name: 'Haskell',
        parent: 'Finus'
    },
    {
        name: 'Finus'
    }
];


// Given the above data structure. Implement
// a function that will return the oldest age.

oldestAge = function(people) {
    var highestAge = _.max(people, function(person) {
        return person.age;
    });
    console.log('Oldest age:');
    console.log(highestAge.age); // age property's value
};

oldestAge(people);
// -> 75


// Also given the above data structure. Implement
// a function that will return an array of the names
// of all living people.

living = function(people) {
    var livingPeopleList = _.filter(people, 'age'); // filter people with age property
    var livingPeopleNames = _.pluck(livingPeopleList, 'name'); // retrieve their names
    console.log('Living people:');
    console.log(livingPeopleNames);
};

living(people);
// -> ['Hank', 'Danny', 'Deborah', 'Kathy', 'Don']


// Also give then data structure implement a function
// that will return the name of the oldest living person.

oldestLivingPerson = function(people) {
    var oldestPerson = _.max(people, function(person) {
        return person.age;
    });
    console.log('Oldest living person:');
    console.log(oldestPerson.name);
};

oldestLivingPerson(people);
// -> 'Kathy'

// JSFIDDLE: http://jsfiddle.net/kpham13/zv7apt4w/1/
