"use client"
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async(data) => {
    console.log(data, "data");
    const {name, photo, email, password} = data;
    console.log(name, photo);

    const {data : res, error} = await authClient.signUp.email({
      name : name,
      email : email,
      password : password,
      image : photo,
      callbackURL : "/",
    })

    console.log(res, error);
    if(error){
      alert(error.message);
    }

    if(res){
      alert("Signup successful");
    }

  }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl  bg-white">
        <h2 className="text-2xl font-bold mb-6">Register your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input type="text" className="input" {...register("name", {required: "Name is required"})} placeholder="Type here name" />
            {errors.name && <p>{errors.name.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input type="text" className="input" {...register("photo", {required : "Photo URL field is required"})} placeholder="Type here photo URL" />
            {errors.photo && <p>{errors.photo.message}</p>}
          </fieldset>
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
      </div>
    </div>
  );
};

export default RegisterPage;
