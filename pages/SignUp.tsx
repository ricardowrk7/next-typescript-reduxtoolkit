import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import Input from "../components/Input";
import Header from "../components/Header";

const SignUp = () => {
  const formik =
    useFormik<{
      name: string;
      email: string;
      password: string;
    }>({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validateOnMount: true,
      onSubmit: (): void => {},
      validationSchema: Yup.object().shape({
        name: Yup.string().min(3).max(20).required("is required"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),

        password: Yup.string().required("is required"),
      }),
    });


    const handleSubmit=(values)=>{

    }


  return (
   <div>
       <Header bg={false}/>
        <div className="w-full md:w-1/3  mx-auto px-5 border-2 border-yellow-400 mt-5 pb-5 rounded-md shadow-lg">
       <div className="flex justify-center"> <h1 className="my-5 font-bold text-4xl text-gray-600">SignUp</h1></div>
     <form onSubmit={formik.handleSubmit}>
     <div className="mt-6">
       <Input name="name" label="name" formik={formik}/>
      </div>
      <div className="my-6">
      <Input name="email" label="email" formik={formik}/>
      </div>
      <div>
      <Input name="password" label="password" formik={formik}/>
      </div>
      <button type="submit" disabled={!formik.isValid} className="mt-6 w-full cursor-pointer disabled:bg-zinc-300 disabled:cursor-not-allowed outline-none bg-yellow-400 text-black py-1 rounded">submit</button>
     </form>
    </div>
   </div>
  );
};

export default SignUp;
