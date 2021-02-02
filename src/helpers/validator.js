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
    if (!validator.genericCheckString(input.userDetails.firstName)) {
        return { status: false, message: 'First Name is required or invalid type' }
    }
    if (!validator.genericCheckString(input.userDetails.lastName)) {
        return { status: false, message: 'Last Name is required or invalid type' }
    }
    if (!validator.genericCheckString(input.userDetails.phoneCode)) {
        return { status: false, message: 'Phone Code is required or invalid type' }
    }
    if (!validator.genericCheckString(input.userDetails.phoneNumber)) {
        return { status: false, message: 'Phone Number is required or invalid type' }
    }
    if (!validator.emailValidator(input.userDetails.email)) {
        return { status: false, message: 'Email is required or invalid type' }
    }
    if (!validator.genericCheckString(input.paymentDetails.tripName)) {
        return { status: false, message: 'Trip Name is required or invalid type' }
    }
    if (!validator.genericCheckNumber(input.paymentDetails.amount)) {
        return { status: false, message: 'amount is required or invalid type' }
    }
    return { status: true, message: 'All validation passed' }
}



module.exports = validator