const yup = require("yup")


function validate(data){
    const userSchema=yub.object().shape({
        username:yup.String().required("Please fill").min(2).max(50),
        email:yup.String().email().required("").min(8).max(30),
        password:yup.String().required().min(8).max(100)
        
    })
}