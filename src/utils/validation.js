export const checkValidateData = (email, password) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Check if email is valid
    if (!emailRegex.test(email.toLowerCase())) {
        return "Email is not valid";
    }

    // Check if password is valid
    if (!passwordRegex.test(password)) {
        return "Password is not valid";
    }

    // If both email and password are valid, return true
    return true;
};
