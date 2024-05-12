import React from "react";

export const CardTimeline = ({ icon, title, description, events }) => {
  return (
    <div className="Timeline">
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">{icon}</span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{description}</p>
      </div>
      <Timeline events={events} />
    </div>
  );
};

const Timeline = ({ events }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 m-5">
      {events.map((event, index) => (
        <li key={index} className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">{event.icon}</span>
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
    <div className="card relative flex w-80 flex-col rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
      {image && alt && <img src={image} alt={alt} className="rounded-xl self-center object-fill h-48 w-96" />}
      <div className="p-6">
        {title && <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</h5>}
        {text && <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{text}</p>}
      </div>
      <div className="p-6 pt-0">
        {repository && (
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 mx-1 py-1 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <a href={repository}>Repository</a>
          </button>
        )}
        {live && (
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 mx-1 py-1 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <a href={live}>Live</a>
          </button>
        )}
      </div>
    </div>
  );
};

export const SkillCard = ({ Skills }) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-start w-[280px] px-4 py-4 shadow-xl rounded-lg bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
      <p className="font-semibold text-xl text-gray-600 dark:text-white mb-2">Skils</p>
      <div className="flex flex-wrap gap-2">
        {Skills.map((skill, index) => (
          <div key={index} className="bg-blue-500 text-white px-2 py-1 rounded-lg">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
