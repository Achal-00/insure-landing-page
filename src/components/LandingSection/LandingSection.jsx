import HeroImage from "./HeroImage";
import ContentHolder from "./ContentHolder";

export default function LandingSection() {
  return (
    <div className="grid landscape:grid-cols-2">
      <HeroImage />
      <ContentHolder />
      <img
        src="bg-pattern-intro-left-mobile.svg"
        alt=""
        className="col-start-1 col-end-1 row-start-2 row-end-3 landscape:hidden w-[15em]"
      />
      <img
        src="bg-pattern-intro-left-desktop.svg"
        alt=""
        className="hidden landscape:block col-start-1 col-end-2 row-start-1 row-end-3 self-end w-[15em]"
      />
      <div className="col-start-1 col-end-1 row-start-3 row-end-4 landscape:row-start-2 landscape:row-end-3 h-[20dvh] grid content-end justify-items-center pb-[5%] landscape:justify-items-start landscape:pl-[20%]">
        <div className="w-[40%] h-[0.1em] bg-dark-greyish-violet landscape:w-[40%]"></div>
      </div>
      <img
        src="bg-pattern-intro-right-mobile.svg"
        alt=""
        className="col-start-1 col-end-1 row-start-2 row-end-4 justify-self-end self-end landscape:hidden w-[9em]"
      />
      <img
        src="bg-pattern-intro-right-desktop.svg"
        alt=""
        className="hidden landscape:block col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end relative w-[27em]"
      />
    </div>
  );
}
