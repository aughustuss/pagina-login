function isPasswordValid(password){
    //verify if password is smaller than 8 caract
    if(password.length < 8 ){
        return false
    }
    // verify if have caps key
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // verify down key
    if (!/[a-z]/.test(password)) {
        return false;
    }
    // verify if have a number
    if (!/\d/.test(password)) {
        return false;
    }
    // verify caract special
    if (!/[-+_!@#$%^&*.,?]/.test(password)) {
        return false;
    }
    return true;

}

export default isPasswordValid;