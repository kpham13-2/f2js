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


// Given the following data structure
// implement a oldestLivingParent method
// that will return the name of the oldest
// living parent.

function oldestLivingParent(people) {
    // 1. Save list of parent names in parents object
    var parents = {};
    people.forEach(function(person) {
        if (person.parent) {
            parents[person.parent] = true;
        }
    });

    // 2. Searches for oldest parents
    var oldestParentName = "";
    var oldestAge = 0;
    people.forEach(function(person) {
        // Set oldest parent properties if person is found in parents object and age is higher than the oldestAge
        if (parents[person.name] && person.age > oldestAge) {
            oldestAge = person.age;
            oldestParentName = person.name;
        }
    });
    
    // 3. Return name of oldest parent
    console.log('Oldest living parent: ' + oldestParentName);
    console.log('Age: ' + oldestAge);
    return oldestParentName;
}

oldestLivingParent(people);
// -> 'Don'

// JSFIDDLE: http://jsfiddle.net/kpham13/y3ss8pkt/1/
