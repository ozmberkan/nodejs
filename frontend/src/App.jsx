import React, { useState } from "react";
import axios from "axios";
import Toaster, { toast } from "react-hot-toast";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  const registerHandle = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5002/api/register",
        data
      );

      setUser(response.data);
      toast.success("Başarıyla kayıt oldunuz.");
    } catch (error) {
      toast.error("Bir hata oluştu.");
    }
  };

  const loginHandle = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5002/api/login",
        data
      );

      setUser(response.data);
      toast.success("Başarıyla giriş yaptınız.");
    } catch (error) {
      toast.error("Bir hata oluştu.");
    }
  };

  console.log(user);

  return (
    <div>
      <Toaster />
      <div className="min-h-screen flex-grow flex justify-center items-center font-inter gap-x-5">
        <Register registerHandle={registerHandle} />
        <Login loginHandle={loginHandle} />
      </div>
    </div>
  );
};

export default App;
