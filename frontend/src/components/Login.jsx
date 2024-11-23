import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ loginHandle, loading }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(loginHandle)}>
      <input
        className="border px-4 py-2 rounded-md"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <input
        className="border px-4 py-2 rounded-md"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <button
        type="submit"
        className="bg-green-500 px-4 py-2 rounded-md text-white"
      >
        {loading ? "Yükleniyor.." : "Giriş Yap"}
      </button>
    </form>
  );
};

export default Login;
