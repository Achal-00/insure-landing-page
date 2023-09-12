import Content from "./Content";

export default function Footer() {
  return (
    <div className="bg-very-light-grey mt-[20%] grid landscape:mt-[10%]">
      <Content />
      <img
        src="bg-pattern-footer-mobile.svg"
        alt=""
        className="col-start-1 col-end-1 row-start-1 row-end-1 w-full landscape:hidden"
      />
      <img
        src="bg-pattern-footer-desktop.svg"
        alt=""
        className="hidden landscape:block col-start-1 col-end-1 row-start-1 row-end-1"
      />
    </div>
  );
}
