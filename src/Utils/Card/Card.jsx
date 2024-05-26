import React, { useRef, useEffect, useState } from "react";
import TypingText from "../../Components/Text/TypingText";

const GetPublicUrl = (image) => {
  return process.env.PUBLIC_URL + "/img/" + image;
};

export const CardTimeline = ({ icon, title, description, events }) => {
  return (
    <div className="Timeline h-full">
      <div className="bg-gray-100 dark:bg-slate-700 rounded-lg items-center ring-1 ring-slate-900/5 flex justify-around h-24">
        {icon && (
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900">
            <img src={GetPublicUrl(icon)} alt="icon" className="h-1/2" />
          </div>
        )}
        <div className="flex-col self-center">
          {title && <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{title}</h3>}
          {description && <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{description}</p>}
        </div>
      </div>
      {events && <Timeline events={events} />}
    </div>
  );
};

const Timeline = ({ events }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 m-5 h-max">
      {events.map((event, index) => (
        <li key={index} className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src={GetPublicUrl(event.icon)} alt="icon" className="h-1/2" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {event.title}
            {event.badge && <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">{event.badge}</span>}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{event.date}</time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
          {event.link && (
            <a
              href={event.link.href}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              onMouseDown={() => (window.location.href = event.link.href)}
            >
              {event.link.icon}
              {event.link.text}
            </a>
          )}
        </li>
      ))}
    </ol>
  );
};

export const CardWithImageUrlTitleTextRepositoryLive = ({ title, text, image, alt, repository, live }) => {
  return (
    <div className="card flex flex-col justify-between w-full rounded-xl h-full">
      {image && alt && <img src={GetPublicUrl(image)} alt={alt} className="rounded-xl self-center object-fill  w-full h-28 -xs:h-28 sm:h-28 md:h-28 lg:h-28 xl:h-28 " />}
      <div className="p-6 py-2">
        {title && <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal dark:text-blue-200 text-blue-900 antialiased">{title}</h5>}
        {text && <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{text}</p>}
      </div>
      <div className="p-4 pt-2">
        {repository && (
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 mx-1 py-1 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <a href={repository} onMouseDown={() => (window.location.href = repository)}>
              Repository
            </a>
          </button>
        )}
        {live && (
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 mx-1 py-1 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <a href={live} onMouseDown={() => (window.location.href = live)}>
              Live
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export const CardWithLeftImageTitleText = ({ title, text, image, alt }) => {
  return (
    <div className="card flex flex-row w-full rounded-xl h-full">
      {image && alt && <img src={GetPublicUrl(image)} alt={alt} className="rounded-xl self-center object-fill w-48 h-full" />}
      <div className="p-6 py-2 w-auto">
        {title && <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal dark:text-blue-200 text-blue-900 antialiased">{title}</h5>}
        {text && <TypingText texts={text} speed={100} pause={1500}></TypingText>}
      </div>
    </div>
  );
};

export const SkillCard = ({ Skills, title }) => {
  const scrollContainerRef = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;
    let isScrollingDown = true;

    if (scrollContainer && !hover) {
      scrollInterval = setInterval(() => {
        if (isScrollingDown) {
          if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 1) {
            isScrollingDown = false;
          } else {
            scrollContainer.scrollTop += 1;
          }
        } else {
          if (scrollContainer.scrollTop <= 0) {
            isScrollingDown = true;
          } else {
            scrollContainer.scrollTop -= 1;
          }
        }
      }, 30);
    }

    return () => clearInterval(scrollInterval);
  }, [hover]);

  return (
    <div className="SkillCard flex flex-col gap-1 items-start px-4 py-4 shadow-xl rounded-lg border border-gray-200 dark:border-gray-800 h-full w-full justify-start" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <p className="font-semibold text-xl text-gray-600 dark:text-white mb-2">{title}</p>
      <div className="flex flex-wrap gap-2 overflow-x-hidden no-scrollbar" ref={scrollContainerRef}>
        {Skills.map((skill, index) => (
          <div key={index} className="bg-blue-500 text-white px-2 py-1 rounded-lg">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
