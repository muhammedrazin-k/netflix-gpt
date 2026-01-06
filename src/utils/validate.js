export const checkValidData=(email,password)=>{
    const isEmailvalid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)


    if(!isEmailvalid) return "Email id is not valid.."
    if(!isPasswordValid) return "password is not valid"
    

    return null
}