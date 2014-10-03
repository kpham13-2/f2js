var firstName, lastName;

function preferredName(firstName, lastName) {
    if (!firstName && !lastName) {
        return "False: What is your preferred name?";
    } else if (firstName && lastName) {
        return "False: Which name do you want to be called by?";
    } else if (!firstName) {
        return lastName;
    } else {
        return firstName;
    }
}

// JSFIDDLE: http://jsfiddle.net/kpham13/mengu48r/4/
