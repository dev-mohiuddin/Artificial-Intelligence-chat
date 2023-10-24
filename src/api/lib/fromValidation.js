



export const signUpFromValidation = (user)=>{
    const error = []

    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(user.name === ''){
        error.push({
            name: "Name is Required!"
        })
    }else
    if(user.username === ''){
        error.push({
            username: "Username is Required!"
        })
    }else
    if(user.email === ""){
        error.push({
            email: "Email is Required!"
        })
    }else
    if(!email_pattern.test(user.email)) {
        error.push({
            email: "Email is Required!"
        })
    }else
    if(user.password.length < 7){
        error.push({
            password: "Password must be 8 characters!"
        })
    }else
    if( user.password === user.confirmPassword){

    }else{
        error.push({
            confirmPassword: "Password and confirm password not matched!"
        })
    }

    return error

}