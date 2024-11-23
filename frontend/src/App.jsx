import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerHandle = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5002/api/register",
        data
      );

      setUser(response.data);
      toast.success("Başarıyla kayıt oldunuz.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginHandle = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5002/api/login",
        data
      );

      setUser(response.data);
      toast.success("Başarıyla giriş yaptınız.");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(user);

  return (
    <div>
      <Toaster />
      <div className="min-h-screen flex-grow flex justify-center items-center font-inter gap-x-5">
        <Register registerHandle={registerHandle} loading={loading} />
        <Login loginHandle={loginHandle} loading={loading} />
      </div>
    </div>
  );
};

export default App;
