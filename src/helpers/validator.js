let validator = new Object()

validator.genericCheck = (input) => {
    if (input && input != null && input != '' && input != undefined) {
        return true
    }
    return false
}

validator.genericCheckString = (input) => {
    if (input && input != null && input != '' && input != undefined && typeof input === 'string') {
        return true
    }
    return false
}
validator.genericCheckNumber = (input) => {
    if (input && input != null && input != '' && input != undefined && typeof (input) === 'number') {
        return true
    }
    return false
}
validator.emailValidator = (input) => {
    regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input && input != null && input != '' && input != undefined && regexp.test(input)) {
        return true
    }
    return false
}



validator.requestPaymentValidator = async (input) =>{
    if (!validator.genericCheckString(input.userDetails.Name)) {
        return { status: false, message: 'Name is required or invalid type' }
    }
    if (!validator.genericCheckString(input.userDetails.Age)) {
        return { status: false, message: 'Age is required or invalid type' }
    }
    if (!validator.genericCheckString(input.userDetails.Gender)) {
        return { status: false, message: 'Gender is required or invalid type' }
    }
    if (!validator.genericCheckString(input.userDetails.Qualification)) {
        return { status: false, message: 'Qualification is required or invalid type' }
    }
    if (!validator.genericCheckString(input.userDetails.PhoneNumber)) {
        return { status: false, message: 'Phone Number is required or invalid type' }
    }
    if (!validator.emailValidator(input.userDetails.Email)) {
        return { status: false, message: 'Email is required or invalid type' }
    }
    if (!validator.genericCheckString(input.paymentDetails.Password)) {
        return { status: false, message: 'Password is required or invalid type' }
    }
    if (!validator.genericCheckNumber(input.paymentDetails.Nationality)) {
        return { status: false, message: 'Password is required or invalid type' }
    }
    if (!validator.genericCheckNumber(input.paymentDetails.Address)) {
        return { status: false, message: 'Address is required or invalid type' }
    }
    if (!validator.genericCheckNumber(input.paymentDetails.Postalcode)) {
        return { status: false, message: 'postalcode is required or invalid type' }
    }
    return { status: true, message: 'All validation passed' }
}



module.exports = validator