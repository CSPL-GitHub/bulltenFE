"use client";
import { ContactFormApi } from "@/apis/HomePageApis";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
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
      const { email, firstName, phoneNumber, address, message } = data;

      if (email && firstName && phoneNumber && address && message) {
        const response = await ContactFormApi(
          firstName,
          email,
          phoneNumber,
          address,
          message
        );

        if (response?.result?.error) {
          setSuccessMessage("Failed to submit the form. Please try again.");
        } else if (response?.result?.message === "Form successfully submitted : ", firstName) {
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
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(FormSubmit)}
        className="lg:max-w-[95%] sm:max-w-[80%] max-w-full w-full space-y-4 lg:p-6 py-3 p-1"
      >
        <p className="text-bullt-secondary text-4xl text-center">Let’s get in touch</p>

        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("firstName", { required: "First name is required" })}
            className={`mt-1 block w-full px-3 py-3 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-sm shadow-sm focus:outline-none focus:ring-bullt-tertiary focus:border-bullt-tertiary`}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">{errors.firstName.message}</span>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 block w-full px-3 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-sm shadow-sm focus:outline-none focus:ring-bullt-tertiary focus:border-bullt-tertiary`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phoneNumber", { required: "Phone number is required" })}
            className={`mt-1 block w-full px-3 py-3 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-sm shadow-sm focus:outline-none focus:ring-bullt-tertiary focus:border-bullt-tertiary`}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
            className={`mt-1 block w-full px-3 py-3 border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded-sm shadow-sm focus:outline-none focus:ring-bullt-tertiary focus:border-bullt-tertiary`}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">{errors.address.message}</span>
          )}
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            rows={4}
            className={`mt-1 block w-full px-3 py-3 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-sm shadow-sm focus:outline-none focus:ring-bullt-tertiary focus:border-bullt-tertiary`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full font-semibold text-lg bg-bullt-tertiary text-bullt-secondary hover:text-bullt-tertiary py-3 px-4 rounded-sm shadow hover:bg-bullt-text-secondary border-2 border-bullt-tertiary"
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
