"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data to your backend or an email service

    const res = await fetch("api/contact", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const { msg } = await res.json();
    setResponseMsg(msg);
    console.log(responseMsg);
  };

  return (
    <form
      className="flex w-full m-auto justify-between flex-wrap gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-4">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
          type="text"
          placeholder="Name"
          className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          id="phone"
          type="tel"
          className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
          placeholder="Phone Number"
        />
      </div>
      <div className="w-full">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
          placeholder="youremail@website.com"
        />
      </div>
      <div className="w-full">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          id="message"
          className="text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border! border-border border-solid! focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
          placeholder="Let us know about your project"
        ></textarea>
      </div>
      <div className="flex">
        <input
          id="wp-comment-cookies-consent"
          name="wp-comment-cookies-consent"
          type="checkbox"
          value="yes"
          className="hover:opacity-1 checked:bg-primary checked:opacity-1 relative border-2 border-solid border-primary rounded-xs bg-none cursor-pointer leading-none mr-2 outline-0 p-0! align-text-top h-[1.25rem] sm:w-[1.25rem] w-[2.25rem] opacity-[0.5] before:content-[''] before:absolute before:right-1/2 before:top-1/2 before:w-1 before:h-2 before:z-2 before:-mt-[0.0625rem] before:-ml-[0.0625rem] before:-mr-[0.0625rem] before:transform before:rotate-45 before:translate-x-[-50%] before:translate-y-[-50%] dark:focus:border-primary"
        />
        <div className="text-grey dark:text-white/50">
          I have read and acknowledge the{" "}
          <p className="text-primary inline cursor-pointer">
            Terms and Conditions{" "}
          </p>
        </div>
      </div>
      <div className="w-full">
        <button
          className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg"
          type="submit"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
