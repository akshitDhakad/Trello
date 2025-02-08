"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const SignUp: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-4 flex justify-center">
          <Link href={"/"} className="m-auto">
            <Image
              height={32}
              width={32}
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              className="object-cover"
              priority
            />
          </Link>
        </div>
        <h1 className="mb-6 text-center text-xl font-bold uppercase">
          Trello Welcome
        </h1>

        {step === 1 && (
          <form>
            <label className="mb-1 block text-sm text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-2.5 py-1.5 focus:outline-blue-500"
              placeholder="Enter your name"
              required
            />
            <button
              onClick={nextStep}
              className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
            >
              Next
            </button>
          </form>
        )}

        {step === 2 && (
          <form>
            <label className="mb-1 block text-sm text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-lg border px-2.5 py-1.5 focus:outline-blue-500"
              placeholder="Enter company name"
              required
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={prevStep}
                className="rounded-lg bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form>
            <label className="mb-1 block text-sm text-sm text-gray-600">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full rounded-lg border px-2.5 py-1.5 focus:outline-blue-500"
              placeholder="Enter your age"
              required
            />
            <label className="mb-1 mt-4 block text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-2.5 py-1.5 focus:outline-blue-500"
              placeholder="Enter your email"
              required
            />
            <label className="mb-1 mt-4 block text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border px-2.5 py-1.5 focus:outline-blue-500"
              placeholder="Enter your password"
              required
            />
            <div className="mt-4 w-full space-y-4">
              <button
                onClick={handleSubmit}
                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Sign Up
              </button>
              <button className="mt-5 flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray px-4 py-2 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                <Image
                  height={24}
                  width={24}
                  src="/images/icon/icon-google.svg"
                  alt="Logo"
                  className="object-cover"
                  priority
                />
                Sign up with Google
              </button>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Create a new account
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
