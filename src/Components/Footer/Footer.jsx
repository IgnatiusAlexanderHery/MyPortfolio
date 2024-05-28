import { Github, Instagram, Linkedin } from "../../Utils/Icons/Icons";

export const Footer = () => {
  return (
    <footer
      className="footer shadow-sm bg-gradient-to-r from-sky-200 via-blue-900 to-sky-200
    dark:from-blue-900 dark:via-sky-200 dark:to-blue-900"
    >
      <p className="flex justify-center dark:text-black text-white">
        Created by&nbsp;<a href="https://www.instagram.com/alexhery3107/">Ignatius Alexander Hery</a>
      </p>
      <div className="flex justify-center gap-4">
        <Github Url={"https://github.com/IgnatiusAlexanderHery"} />
        <Instagram Url={"https://www.instagram.com/alexhery3107/"} />
        <Linkedin Url={"http://www.linkedin.com/in/ignatiusalexanderhery"} />
      </div>
    </footer>
  );
};
