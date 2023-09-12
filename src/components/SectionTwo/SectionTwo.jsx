import Content from "./Content";

export default function SectionTwo() {
  return (
    <div className="bg-dark-violet grid mx-[5%] mt-[10%] landscape:mt-[5%] landscape:mx-[10%]">
      <Content />
      <img
        src="bg-pattern-how-we-work-mobile.svg"
        alt=""
        className="landscape:hidden col-start-1 col-end-1 row-start-1 row-end-1 justify-self-end"
      />
      <img
        src="bg-pattern-how-we-work-desktop.svg"
        alt=""
        className="hidden landscape:block col-start-1 col-end-1 row-start-1 row-end-1 justify-self-end w-[25em]"
      />
    </div>
  );
}
