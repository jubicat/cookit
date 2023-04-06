import React from "react";
import Input from "./Input";
import { Form, Formik } from "formik";
import { detailSchema } from "validation";
import classNames from "classnames";
import { supabase } from "config/supabase_config";

import {toast} from "react-hot-toast"

import {useSelector} from "react-redux"
const DetailForm = () => {
 
    const {user} = useSelector(state => state.auth)
    console.log(user)
  const handleSubmit = async (values, action) => {
    const {firstName, lastName, username} = values;
    const { error} =  await supabase.auth.updateUser({
        data: {
            firstName: firstName,
            lastName: lastName,
            username: username
        }
    })

    if (!error){

        toast.success("Updated successfully!")
    } else {
        toast.error("There occured a problem...")
    }
    
    
    window.location.reload()
   

  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={detailSchema}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <Form className="flex flex-col gap-y-3 ">
          <Input name="firstName" label={"First Name"}/>
          <Input name="lastName" label={"Last Name"}/>
          <Input name="username" label={"Username"}/>
          <button
            type="submit"
            disabled={!dirty || isSubmitting || !isValid}
            className={classNames({
                "h-8 rounded-md bg-green-500 transition-all duration-300 hover:bg-opacity-80 disabled:bg-opacity-50 ": true
            })}
          >
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DetailForm;
