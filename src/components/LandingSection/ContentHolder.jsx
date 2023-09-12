export default function ContentHolder() {
  return (
    <div className="bg-dark-violet grid grid-cols-2 col-start-1 col-end-1 row-start-2 row-end-3 landscape:col-start-1 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 landscape:px-[10%] self-start">
      <div className="col-start-1 col-end-3 text-center px-[5%] py-[20%] landscape:col-end-2 landscape:px-0 landscape:text-left landscape:py-[30%] landscape:pr-[10%]">
        <h1 className="font-headings text-very-light-grey text-[400%] leading-none landscape:lg:text-[500%]">
          Humanizing your insurance.
        </h1>
        <p className="font-others text-very-light-grey py-[2em] text-[110%]">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="text-very-light-grey border-2 border-very-light-grey px-[3em] py-[0.5em] tracking-[0.2em] hover:bg-very-light-grey hover:text-dark-violet">
          VIEW PLANS
        </button>
      </div>
    </div>
  );
}
