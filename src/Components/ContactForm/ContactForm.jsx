import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    if (e.target.user_name.value === "" || e.target.user_email.value === "" || e.target.message.value === "") {
      setStateMessage("Please fill all the fields");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      return;
    }
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY).then(
      (result) => {
        setStateMessage("Message sent!");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      },
      (error) => {
        setStateMessage("Something went wrong, please try again later");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      }
    );
    e.target.reset();
  };
  return (
    <div className="flex flex-col items-center justify-center 2xl:disabled:flex">
      <div className="text-base min-w-96 bg-white rounded-lg shadow-md p-6 mx-auto sm:w-1/3 2xl:text-xl">
        <h2 className=" font-bold text-gray-800 mb-4 2xl:text-center">Contact Me</h2>

        <form onSubmit={sendEmail} className="text-black flex flex-col pb-4">
          <label>Name</label>
          <input type="text" name="user_name" className="border border-slate-950" />
          <label>Email</label>
          <input type="email" name="user_email" className="border border-slate-950" />
          <label>Message</label>
          <textarea name="message" className="border border-slate-950 resize-none" />
          <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" disabled={isSubmitting}>
            Sent
          </button>
          {stateMessage && <p className="text-red-600">{stateMessage}</p>}
        </form>
      </div>
    </div>
  );
};
