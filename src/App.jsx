import { useState } from "react";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Home from "./pages/Home";
import ForgotPassword from "./auth/ForgotPassword";
import Navbar from "./layouts/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import FriendProfile from "./pages/FriendProfile";
import { Toaster } from "react-hot-toast";
import Community from "./pages/Community";
import SingleUserProfile from "./pages/SingleUserProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/community" element={<Community />} />
          <Route path="/singleuserprofile/:userId" element={<SingleUserProfile />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/EditProfile" element={<EditProfile />} />

          <Route path="/FriendProfile" element={<FriendProfile />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
