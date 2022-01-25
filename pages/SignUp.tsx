import React, { useState,useEffect } from "react";
import { useFormik} from "formik";
import * as Yup from "yup";
const SignUp=()=>{

    const { handleChange, handleBlur, values, errors, touched, isValid } =
    useFormik<{
      name: string;
      link: string;
      id: string;
    }>({
      initialValues: {
        name: "",
        link: "",
        id: "",
      },
      validateOnMount:true,
      onSubmit: (): void => {},
      validationSchema: Yup.object().shape({
        name: Yup.string().min(3).max(20).required("is required"),
        link: Yup.string().min(10).max(250).required("is required"),

        id: Yup.string().required("is required"),
      }),
    });
    return (

    )
}

export default SignUp