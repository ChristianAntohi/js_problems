function validatePassword(password) {
    // Verificăm lungimea minimă
    if (password.length < 8) {
        console.log("pass too short")
        return false;
    }
    // Verificăm dacă conține cel puțin o literă mare
    if (!/[A-Z]/.test(password)) {
        console.log("at least one Upper case")
        return false;
    }
    // Verificăm dacă conține cel puțin o literă mică
    if (!/[a-z]/.test(password)) {
        console.log("at least one lower case")
        return false;
    }
    // Verificăm dacă conține cel puțin un caracter special
    if (!/[@#$%^&+!=]/.test(password)) {
        console.log("at least one special character")
        return false;
    }
    return true;
}

console.log(validatePassword("xsCece!12"))