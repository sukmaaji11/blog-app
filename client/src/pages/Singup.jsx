import { Button, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { Label } from "flowbite-react";

export default function Singup() {
  return (
    <div className="min-h-sreen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className="">
          <Link className="font-bold dark: text-white text-4xl" to="/">
            <span className="px-2 py-1 bg-gradient-to-r from-green-700 to-blue-500 rounded-lg text-white">
              Jadi Cuan
            </span>
          </Link>
          <p className="text-sm mt-5">
            Master the Markets: Your Ultimate Resource for Trade and Finance
            Education
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your usename" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div className="">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput type="password" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="greenToBlue" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
