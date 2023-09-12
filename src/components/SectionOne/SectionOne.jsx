import Feature from "./Feature";

export default function SectionOne() {
  return (
    <div className="px-[5%] landscape:px-0">
      <h1 className="text-center text-[400%] font-headings text-very-dark-violet pb-[10%] landscape:text-left landscape:pl-[10%] landscape:pb-[5%]">
        We're different
      </h1>
      <div className="grid gap-[4em] landscape:grid-cols-3 landscape:gap-[2em] landscape:px-[10%]">
        <Feature
          image="icon-snappy-process.svg"
          heading="Snappy Process"
          description="Our application process can be completed in minutes, not hours. Don't
        get stuck filling in tedious forms."
        />
        <Feature
          image="icon-affordable-prices.svg"
          heading="Affordable Prices"
          description="We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
        />
        <Feature
          image="icon-people-first.svg"
          heading="People First"
          description="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
        />
      </div>
    </div>
  );
}
