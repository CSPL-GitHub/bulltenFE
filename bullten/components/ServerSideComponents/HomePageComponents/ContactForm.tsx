"use client";
import { ContactFormApi } from "@/apis/HomePageApis";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
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
    reset,
  } = useForm<FormData>();
  
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const FormSubmit = async (data: FormData) => {
    try {
      const { email, firstName, lastName, phoneNumber, address, message } = data;

      if (email && firstName && lastName && phoneNumber && address && message) {
        const response = await ContactFormApi(
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          message
        );

        if (response?.result?.error) {
          setSuccessMessage("Failed to submit the form. Please try again.");
        } else if (response?.result?.message === "Form successfully submitted : ",firstName) {
          setSuccessMessage("Form submitted successfully!");
          reset(); // Clear form fields
        } else {
          setSuccessMessage("Form submission was not completed. Please try again.");
        }
      }
    } catch (error) {
      setSuccessMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-transparent">
      <form
        onSubmit={handleSubmit(FormSubmit)}
        className="bg-black/20 rounded-lg shadow-lg lg:max-w-[90%] sm:max-w-full max-w-[90%] w-full space-y-4 lg:p-6 p-1"
      >
        <p className="text-bullt-secondary text-4xl text-center">Let’s get in touch</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName.message}</span>
            )}
          </div>

          <div>
            <label className="block text-white">Last Name</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div>
          <label className="block text-white">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-white">Phone number</label>
          <input
            type="tel"
            {...register("phoneNumber", { required: "Phone number is required" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
          )}
        </div>

        <div>
          <label className="block text-white">Address</label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">{errors.address.message}</span>
          )}
        </div>

        <div>
          <label className="block text-white">Your Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows={4}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full font-semibold text-lg bg-bullt-tertiary text-bullt-secondary hover:text-bullt-tertiary py-3 px-4 rounded-md shadow hover:bg-bullt-text-secondary border-2 border-bullt-tertiary"
        >
          Send Message
        </button>

        {successMessage && (
          <p className="text-center text-bullt-secondary mt-4 text-base">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
