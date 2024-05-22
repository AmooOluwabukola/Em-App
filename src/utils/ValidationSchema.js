import * as yup from "yup"





export const regFormSchema = yup
.object({
  email: yup.string().required("Email is required").email("invalid email format"),
  userName: yup.string().required("Username is required"),
  password: yup.string().required("password is required").min(8, "minimum lenght must be atleast 8 characters"),
  confirmPassword: yup.string().required("confirm password is required").min(8, "minimum lenght must be atleast 8 charaacters").oneOf([yup.ref("password")], "password do not match"),
})
.required()



export const signInSchema = yup
.object({
  email: yup.string().required("Email is required").email("invalid email format"),
  password: yup.string().required("password is required").min(8, "minimum lenght must be atleast 8 characters"),
 
})
.required()


