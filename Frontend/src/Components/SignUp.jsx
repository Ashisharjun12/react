import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';

const SignUp = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = async(data) => {

        const userInfo ={
            name:data.name,
            email:data.email,
            password:data.password
        }

        console.log(data)

       await axios.post('http://localhost:3000/user/signUp' ,userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('user created succesfully');
            }
        }).catch(
            (err)=>{
                console.log(err)
            }
        )
       
      }

  return (
    <div>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="Name" className="block text-sm font-medium leading-6 text-white">
                Name
              </label>
              <div className="mt-2">
                <input
                {...register("name", { required: true })} 
                  id="name"
                  name="name"
                 
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                {...register("email", { required: true })} 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                {...register("password", { required: true })} 
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <span className='text-red-500'>This field is required</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            
          </p>
          <a className='text-lg font-bold text-blue-600' href="">SignUp </a>
        </div>
      </div>

    </div>
  )
}

export default SignUp