import { Instagram } from "../../Utils/Icons/Instagram";

export const Footer = () => {
  return (
    <footer className="footer shadow-sm bg-blue-400 dark:bg-blue-800">
      <p className="flex justify-center text-dark">
        Created by&nbsp;<a href="https://www.instagram.com/alexhery3107/">Ignatius Alexander Hery</a>
      </p>
      <div className="flex justify-center gap-4">
        <Instagram Url={"https://github.com/IgnatiusAlexanderHery"} />
        <Instagram Url={"https://www.instagram.com/alexhery3107/"} />
        <Instagram Url={"http://www.linkedin.com/in/ignatiusalexanderhery"} />
      </div>
    </footer>
  );
};
