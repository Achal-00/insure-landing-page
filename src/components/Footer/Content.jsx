export default function Content() {
  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-1 py-[20%] relative z-10 px-[5%] grid gap-[3em] landscape:py-[5%] landscape:px-[10%] landscape:grid-cols-4">
      <div className="flex flex-col items-center gap-[2em] landscape:flex-row landscape:justify-between landscape:col-start-1 landscape:col-end-5">
        <img src="logo.svg" alt="" />
        <div className="flex gap-[2em] landscape:gap-[1em]">
          <img src="icon-facebook.svg" alt="" />
          <img src="icon-twitter.svg" alt="" />
          <img src="icon-pinterest.svg" alt="" />
          <img src="icon-instagram.svg" alt="" />
        </div>
      </div>
      <div className="w-full h-[0.01em] bg-very-dark-violet landscape:col-start-1 landscape:col-end-5"></div>
      <div className="text-center grid gap-[2em] font-others font-bold landscape:text-left">
        <h1 className="text-dark-greyish-violet">OUR COMPANY</h1>
        <div className="grid gap-[0.5em] text-very-dark-violet">
          <p className="hover:underline hover:cursor-pointer">HOW WE WORK</p>
          <p className="hover:underline hover:cursor-pointer">WHY INSURE?</p>
          <p className="hover:underline hover:cursor-pointer">CHECK PRICE</p>
          <p className="hover:underline hover:cursor-pointer">REVIEWS</p>
        </div>
      </div>
      <div className="text-center grid gap-[2em] font-others font-bold landscape:text-left">
        <h1 className="text-dark-greyish-violet">HELP ME</h1>
        <div className="grid gap-[0.5em] text-very-dark-violet">
          <p className="hover:underline hover:cursor-pointer">FAQ</p>
          <p className="hover:underline hover:cursor-pointer">TERMS OF USE</p>
          <p className="hover:underline hover:cursor-pointer">PRIVACY POLICY</p>
          <p className="hover:underline hover:cursor-pointer">COOKIES</p>
        </div>
      </div>
      <div className="text-center grid gap-[2em] font-others font-bold landscape:text-left landscape:self-start">
        <h1 className="text-dark-greyish-violet">CONTACT</h1>
        <div className="grid gap-[0.5em] text-very-dark-violet">
          <p className="hover:underline hover:cursor-pointer">SALES</p>
          <p className="hover:underline hover:cursor-pointer">SUPPORT</p>
          <p className="hover:underline hover:cursor-pointer">LIVE CHAT</p>
        </div>
      </div>
      <div className="text-center grid gap-[2em] font-others font-bold landscape:text-left landscape:self-start">
        <h1 className="text-dark-greyish-violet">OTHERS</h1>
        <div className="grid gap-[0.5em] text-very-dark-violet">
          <p className="hover:underline hover:cursor-pointer">CAREERS</p>
          <p className="hover:underline hover:cursor-pointer">PRESS</p>
          <p className="hover:underline hover:cursor-pointer">LICENSES</p>
        </div>
      </div>
    </div>
  );
}
