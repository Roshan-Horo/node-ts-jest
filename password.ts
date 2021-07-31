const validatePassword = (currentPassword: string) => {


     let validate = false
    //  console.log('password',currentPassword)
     // validate password.length >= 5
     // validate password has one letter
     // validate password has at least one number

     let hasLength = currentPassword.length >= 5

     let hasLetter = /[a-zA-Z]/g.test(currentPassword)

     let hasNumber = /[0-9]/g.test(currentPassword)

     validate = hasLength && hasLetter && hasNumber

     return validate
}

export {
    validatePassword
}