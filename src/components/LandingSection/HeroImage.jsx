export default function HeroImage() {
  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-2 landscape:col-start-2 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 relative landscape:pr-[20%]">
      <img
        src="image-intro-mobile.jpg"
        alt=""
        className="landscape:hidden w-full"
      />
      <img
        src="image-intro-desktop.jpg"
        alt=""
        className="hidden landscape:block pt-[10%] w-full"
      />
    </div>
  );
}
