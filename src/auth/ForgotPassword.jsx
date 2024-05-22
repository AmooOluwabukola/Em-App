import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SignInImg from "../assets/SignUp.png";
import Logo from "../assets/Em-Logo.png";
import "../styles/Sign.css";
import Mail from "../assets/sms.png";

const SignIn = () => {
  useEffect(()=>{
    document.title = 'Password Recovery |Page'
   })
  return (
    <>
      <main className="">
        <section className="d-flex justify-content-center align-items-center row">
          <div className="bg-light  col-md-6">
           
            <img src={SignInImg} alt="em-logo" className="img-fluid w-100 h-50 p-5 d-none d-lg-block" />
          
           
          </div>

          <div className="p-5 col-md-6">
            <div className="text-center">
                <Link to= '/'> <img src={Logo} alt="em logo" className="w-25" /></Link>
             
              <h2 className="text-center">Forgot Password</h2>
              <p className="text-center">Enter email address to recover password</p>
            </div>
            <Form>
              {/* mail */}
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="bg-light ps-5"
                  
                />

                <div className="position-absolute top-0 translate-middle- p-2">
                  <img src={Mail} alt="" className="mb-2" />
                </div>
              </Form.Group>
            
           
              <Button variant="primary" type="submit" className="w-100 rounded-5 mb-3">
                Recover Password
              </Button>
           
            </Form>
           
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;

