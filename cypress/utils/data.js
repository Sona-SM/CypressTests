import { signUp } from "../pages/autoExercise/Signup"

const data={
    password: "password",
    firstName: "First Name",
    lastName: "Last Name",
    company: "Company",
    address: "Address",
    state: "State",
    city: "City",
    zip: "0000",
    mobilePhone: "1110000000",
    signinEmail: signUp.getSigninEmail,
    loginPassword: signUp.getLoginPassword
}
export{data}