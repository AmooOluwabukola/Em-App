import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SignInImg from "../assets/SignUp.png";
import Logo from "../assets/Em-Logo.png";
import "../styles/Sign.css";
import Mail from "../assets/sms.png";
import Lock from "../assets/lock.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/ValidationSchema";
import toast from "react-hot-toast";
const SignIn = () => {
  useEffect(()=>{
    document.title = 'Sign In |Page'
   });
   const [isClicked, setIsClicked] = useState(false);
 const navigate = useNavigate()

   const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data) => {
    console.log(data);
    setIsClicked(true)

    try {
      const request = await fetch("https://em-server-3xek.onrender.com//api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await request.json();
      console.log(response);
      if (!response.success) {
        toast.error(response.message)
      }
      if (response.success) {
        toast.success(response.message);
        localStorage.setItem("clientToken" ,response.user.token)
        navigate("/");
      }
      
    } catch (error) {
      
    } finally {
      setIsClicked(false);
    }
    
  console.log(errors);
  }

  const buttonText = isClicked ? "Loading..." : "Sign In";
  return (
    <>
      <main className="">
        <section className="d-flex justify-content-center align-items-center row ">
          <div className="bg-light  col-md-6">
            <img src={SignInImg} alt="em-logo" className="img-fluid w-100 h-75 p-5 d-none d-lg-block" />
          </div>

          <div className="p-5 col-md-6">
            <div className="text-center">
              <img src={Logo} alt="em logo" className="w-25" />
              <h2 className="text-center">Welcome to EM</h2>
              <p className="text-center">Sign in to your account</p>
            </div>
            <Form  onSubmit={handleSubmit(handleSignIn)}>
              {/* mail */}
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="bg-light ps-5"
                  {...register("email", { required: true })}
                  
                />

                <div className="position-absolute top-0 translate-middle- p-2">
                  <img src={Mail} alt="" className="mb-2" />
                </div>
                <p className="text-start fs-6 text-danger  fw-light">
                  {errors.email?.message}
                </p>
              </Form.Group>
             
              {/* password */}
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="lock ps-5  bg-light"
                  {...register("password", { required: true })}
                />
                <div className="position-absolute top-0 translate-middle- p-2">
                  <img src={Lock} alt="" className="mb-2" />
                </div>
                <p className="text-start fs-6 text-danger  fw-light">
                  {errors.password?.message}
                </p>
              </Form.Group>
              {/* check */}
              <div className="d-flex justify-content-between ">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Keep me signed in" /> 
           </Form.Group>
           <Link to='/ForgotPassword' className="text-dark"><span> Forgot Password</span></Link>
              </div>
             
            
              {/* SignIn btn */}
              <Button variant="primary" type="submit" className="w-100 rounded-5 mb-3" disabled={isSubmitting}>
                {buttonText}
              </Button>
              <h6 className="text-secondary mb-3">Already have an account? <Link to="/SignUp" className="text-decoration-none">Sign Up</Link></h6>
              <p className="text-center text-secondary">By signing up you accept our Privacy Policy, Terms & Licensing Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms apply.</p>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;

