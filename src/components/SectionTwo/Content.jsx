export default function Content() {
  return (
    <div className="px-[10%] py-[20%] text-center col-start-1 col-end-1 row-start-1 row-end-1 landscape:text-left landscape:pl-[8%] landscape:py-0 self-center landscape:flex landscape:items-center landscape:justify-between">
      <h1 className="text-very-light-grey font-headings text-[350%] leading-none pb-[15%] landscape:pb-0">
        Find out more
        <br className="hidden landscape:block" /> about how we work
      </h1>
      <button className="font-other text-very-light-grey border-2 border-very-light-grey px-[3em] py-[0.5em] relative hover:bg-very-light-grey hover:text-very-dark-violet">
        HOW WE WORK
      </button>
    </div>
  );
}
