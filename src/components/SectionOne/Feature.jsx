export default function Feature(props) {
  return (
    <div className="grid justify-items-center gap-[1em] grid-rows-[1fr_0.2fr_1fr] landscape:justify-items-start">
      <img src={props.image} alt="" className="w-[6.5em] self-center" />
      <h1 className="font-headings text-[200%] text-very-dark-violet">
        {props.heading}
      </h1>
      <p className="font-others text-[110%] text-center text-dark-greyish-violet landscape:text-left">
        {props.description}
      </p>
    </div>
  );
}
