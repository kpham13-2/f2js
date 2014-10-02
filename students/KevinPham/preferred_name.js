function preferredName (firstName, lastName) {
	if (!firstName && !lastname || firstName && lastName) {
		return false;
	// if (not firstName and not lastName or firstName and lastName)
	}
	else if (!firstName) {
		return lastName;
	// if (not firstName), return lastName
	}
	else {
		return firstName;
	// else, return firstName
	}
};
