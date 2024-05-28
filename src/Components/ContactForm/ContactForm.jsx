import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Instagram, Linkedin } from "../../Utils/Icons/Icons";

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
    <div
      className="flex items-center justify-center text-gray-800 bg-gradient-to-r from-sky-200 via-blue-900 to-sky-200
    dark:from-blue-900 dark:via-sky-200 dark:to-blue-900 py-4"
    >
      <div className="text-base w-full max-w-screen--xs bg-blue-600 dark:bg-blue-800 rounded-l-lg p-6 mr-0 mx-10 min-h-96 max-h-96 hidden md:flex md:flex-col justify-between">
        <div className="text-white text-justify font-mono text-sm overflow-auto">
          <h2 className="text-2xl">Get in Touch</h2>
          <p className=" pt-4 ">
            Thank you for visiting my portfolio. I am always excited to connect with new people and explore potential collaborations. If you have any questions, project inquiries, or just want to say hello, please feel free to contact me
          </p>
          <p>For any project or collaboration through the following channels:</p>
        </div>
        <div className="flex justify-center gap-4 ">
          <Github Url={"https://github.com/IgnatiusAlexanderHery"} />
          <Instagram Url={"https://www.instagram.com/alexhery3107/"} />
          <Linkedin Url={"http://www.linkedin.com/in/ignatiusalexanderhery"} />
        </div>
      </div>
      <div className="text-base w-full max-w-screen--xs bg-white rounded-lg sm:rounded-none sm:rounded-r-lg p-6 sm:ml-0 mx-10 min-h-96 max-h-96">
        <h2 className=" font-bold  mb-4 text-center sm:text-2xl">Contact Me</h2>

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
