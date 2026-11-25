"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        console.log(data, "data");

        const {data : res, error} = await authClient.signIn.email({
          email : data.email,
          password : data.password,
          rememberMe : true,
          callbackURL : "/"
        })

        console.log(res, error);
    }

    // console.log(watch("email"));

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl  bg-white">
        <h2 className="text-2xl font-bold mb-6">Login your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input" {...register("email", {required: "Email is required"})} placeholder="Type here email" />
            {errors.email && <p>{errors.email.message}</p>}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input type={isShowPassword ? "text" : "password"} className="input" {...register("password", {required : "Password is required"})} placeholder="Type here password" />
            <span className="absolute right-1 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <p>{errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-4">Dont have an account ? <Link href={"/register"} className="underline text-blue-500">Register</Link> </p>
      </div>
    </div>
  );
};

export default LoginPage;
