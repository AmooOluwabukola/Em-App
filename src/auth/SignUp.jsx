import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SignInImg from "../assets/SignUp.png";
import Logo from "../assets/Em-Logo.png";
import "../styles/Sign.css";
import Mail from "../assets/sms.png";
import User from "../assets/user.png";
import Lock from "../assets/lock.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { regFormSchema } from "../utils/ValidationSchema";
import toast from "react-hot-toast";
const SignUp = () => {
  const [serverError, setServerError] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign Up |Page";
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(regFormSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  console.log(errors);
  const onSubmit = async (data) => {
    console.log(data);
    setIsClicked(true);
    try {
      setsuccessMsg("");
      setServerError("");
      const req = await fetch("http://localhost:5780/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      if (!res.success) {
        const errorData = await res;
        setServerError(errorData.message);
        setIsClicked(true);
      }
      if (res.success) {
        setsuccessMsg(res.message);
        toast.success(res.message);
        navigate("/signin");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsClicked(false);
    }
  };

  const btnText = isClicked ? "Loading..." : "Sign Up";

  return (
    <>
      <main className="container ">
        <section className="d-flex justify-content-center align-items-center row">
          <div className="bg-light col-md-6">
            <img
              src={SignInImg}
              alt="em-logo"
              className="img-fluid w-100 p-5 d-none d-lg-block"
            />
          </div>

          <div className="p-5 col-md-6">
            <div className="text-center">
              <img src={Logo} alt="em logo" className="w-25" />
              <h2 className="text-center">Welcome to EM</h2>
              <p className="text-center">Sign Up for Free</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
              {/* username */}
              <Form.Group className="mb-3 position-relative" controlId="">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className="ps-5 sms bg-light"
                  {...register("userName", { required: true })}
                />

                <div className="position-absolute top-0 translate-middle- p-2">
                  <img src={User} alt="" className="mb-2" />
                </div>
                <p className="text-start fs-6 text-danger  fw-light">
                  {errors.userName?.message}
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
              {/* confirm password */}
              <Form.Group className="mb-3 position-relative">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className="lock ps-5  bg-light"
                  {...register("confirmPassword", { required: true })}
                />
                <div className="position-absolute top-0 translate-middle- p-2">
                  <img src={Lock} alt="" className="mb-2" />
                </div>
                <p className="text-start fs-6 text-danger  fw-light">
                  {errors.confirmPassword?.message}
                </p>
              </Form.Group>

              {serverError && <p className="text-danger">{serverError}</p>}
              {successMsg && <p className="text-success">{successMsg}</p>}

              {/* Signup btn */}
              <Button
                variant="primary"
                type="submit"
                className="w-100 rounded-5 mb-3"
                disabled={isSubmitting}
              >
                {btnText}
              </Button>
              <h6 className="text-secondary mb-3">
                Already have an account?{" "}
                <Link to="/SignIn" className="text-decoration-none">
                  Sign In
                </Link>
              </h6>
              <p className="text-center text-secondary">
                By signing up you accept our Privacy Policy, Terms & Licensing
                Agreement. Protected by reCAPTCHA. Google Privacy
                Policy & Terms apply.
              </p>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
