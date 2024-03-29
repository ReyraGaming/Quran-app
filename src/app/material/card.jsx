const Card = ({name, time}) => {
  return (
    <div className="my-5 p-5 justify-between bg-gradient-to-l from-[#33581b] to-[#5b6409] flex flex-row rounded-xl">
      <h1 className="text-2xl text-[#eaec52] font-bold">{name}</h1>
      <div className="flex flex-row gap-2">
        <p className="text-lg text-[#eaec52]">{time}</p>
        <svg
          className="w-7 h-7 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card
