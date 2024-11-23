import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ registerHandle, loading }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(registerHandle)}
    >
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
      <input
        className="border px-4 py-2 rounded-md"
        type="text"
        placeholder="Username"
        {...register("username")}
      />
      <input
        className="border px-4 py-2 rounded-md"
        type="text"
        placeholder="PhoneNumber"
        {...register("phoneNumber")}
      />
      <input
        className="border px-4 py-2 rounded-md"
        type="text"
        placeholder="DisplayName"
        {...register("displayName")}
      />
      <button
        type="submit"
        className="bg-green-500 px-4 py-2 rounded-md text-white"
      >
        {loading ? "Yükleniyor.." : "Kayıt Ol"}
      </button>
    </form>
  );
};

export default Register;
