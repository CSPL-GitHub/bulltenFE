"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  phoneNumber: string;
  address: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center border-t-[4px] border-t-bullt-tertiary bg-transparent">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black/20 rounded-lg shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">
          We’d love to hear from you!
        </h2>
        <p className="text-white">Let’s get in touch</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className={`mt-1 block w-full px-1 py-2 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-white">Company</label>
            <input
              type="text"
              {...register("company")}
              className="mt-1 block w-full px-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-white">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={`mt-1 block w-full px-1 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-white">Phone number</label>
          <input
            type="tel"
            {...register("phoneNumber")}
            className="mt-1 block w-full px-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-white">Your Message</label>
          <textarea
            {...register("message", { required: true })}
            rows={4}
            className={`mt-1 block w-full px-1 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-bullt-tertiary text-white py-2 px-4 rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
