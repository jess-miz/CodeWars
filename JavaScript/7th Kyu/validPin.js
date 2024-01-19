/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. 
*/

// Answer // 
function validatePIN (pin) {
    let isNumber = /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6)
    return isNumber
}
