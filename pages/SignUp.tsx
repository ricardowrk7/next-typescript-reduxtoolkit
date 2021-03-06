import React, { useState, useEffect } from "react";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import Input from "../components/Input";
import Header from "../components/Header";
import user from "../model/userModel";
import { useAppDispatch, useAppSelector } from "../useHook/useReduxHook";
import { signup } from "../redux/AuthSlice";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.user);
  const Router = useRouter();
  const query=Router.query
  console.log(query)
  const formik = useFormik<{
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      signup({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      })
    );
   
  };
  if (state.successMessage) {
   if(!query.from){
    Router.push({
      pathname: '/',
     
     
  })
   }else{
    Router.push({
      pathname: '/Checkout',
     
     
  })
   }
}
  return (
    <div>
      <Header bg={false} />
      <div className="w-full md:w-1/3 border-0 shadow-none  mx-auto px-5 md:border-2 border-yellow-400 my-5 pb-5 rounded-md sm:shadow-lg">
        <div className="flex justify-center">
          {" "}
          <h1 className="my-5 font-bold text-4xl text-gray-600">SignUp</h1>
        </div>
        {state.successMessage && (
          <div className="flex justify-center bg-blue-500 rounded ">
            <h1 className="text-white py-1">{state.successMessage}</h1>
          </div>
        )}
        {state.erroeSignUpMessage && (
          <div className="flex justify-between">
            <h1 className="text-red-500  text-center">{state.erroeSignUpMessage}</h1>
            <p><Link href="/Login">go to login page</Link></p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <Input name="name" label="name" formik={formik} />
          </div>
          <div className="my-6">
            <Input name="email" label="email" formik={formik} />
          </div>
          <div>
            <Input name="password" label="password" formik={formik} />
          </div>
          <button
            type="submit"
            disabled={!formik.isValid}
            className="mt-6 w-full cursor-pointer disabled:bg-zinc-300 disabled:cursor-not-allowed outline-none bg-yellow-400 text-black py-1 rounded"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
