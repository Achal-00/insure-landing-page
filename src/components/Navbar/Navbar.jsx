import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".overlay").classList.remove("hidden");
      document.querySelector(".menu-icon").src = "icon-close.svg";
    } else {
      document.querySelector(".overlay").classList.add("hidden");
      document.querySelector(".menu-icon").src = "icon-hamburger.svg";
    }
  }, [menu]);

  return (
    <div className="p-[5%] landscape:px-[10%] landscape:py-[2%]">
      <div>
        <div className="flex justify-between items-center landscape:lg:hidden relative z-50">
          <img src="logo.svg" alt="" className="w-[9em]" />
          <img
            src="icon-hamburger.svg"
            alt=""
            className="w-[2.5em] menu-icon"
            onClick={() => setMenu((prev) => !prev)}
          />
        </div>
        <div className="bg-dark-violet absolute left-0 top-[2%] w-full h-full z-30 hidden overlay">
          <div className="min-h-[90dvh] grid relative">
            <div className="text-center text-very-light-grey font-other text-[150%] flex flex-col gap-[1em] tracking-[0.1em] pt-[20%]">
              <p>HOW WE WORK</p>
              <p>BLOG</p>
              <p>ACCOUNT</p>
              <button className="border-2 border-very-light-grey w-[90%] mx-auto p-[0.5em] tracking-[0.1em]">
                VIEW PLANS
              </button>
            </div>
            <img
              src="bg-pattern-mobile-nav.svg"
              alt=""
              className="absolute right-0 bottom-0 w-full"
            />
          </div>
        </div>
      </div>
      <div className="hidden landscape:lg:flex justify-between items-center">
        <img src="logo.svg" alt="" className="w-[9em]" />
        <div className="flex gap-[4em] font-others text-dark-greyish-violet font-bold items-center">
          <p className="hover:cursor-pointer hover:text-very-dark-violet">
            HOW WE WORK
          </p>
          <p className="hover:cursor-pointer hover:text-very-dark-violet">
            BLOG
          </p>
          <p className="hover:cursor-pointer hover:text-very-dark-violet">
            ACCOUNT
          </p>
          <p className="text-very-dark-violet border-2 border-very-dark-violet px-[2em] py-[0.5em] hover:bg-very-dark-violet hover:text-very-light-grey hover:cursor-pointer">
            VIEW PLANS
          </p>
        </div>
      </div>
    </div>
  );
}
