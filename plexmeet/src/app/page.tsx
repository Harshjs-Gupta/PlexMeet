// import Image from "next/image";

import Shadow from "@/components/home-background/shadow";
import HomeImage from "@/components/homePageImage/home-image";
import Navbar from "@/components/homePageImage/navbar";
import Image from "next/image";
import keyboardIcon from "@/assets/icon/keyboardIcon.png";
import mailIcon from "@/assets/icon/mail.png";

export default function Home() {
  return (
    <div className="background relative overflow-hidden">
      <Shadow />
      <div className="relative p-3">
        <Navbar />
      </div>
      <div className="relative flex gap-32 items-center">
        <HomeImage />
        <div className=" relative right-0 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-5xl text-[#353B51] font-bold">
              Video calls and meetings
            </span>
            <span className="text-5xl text-[#353B51] font-bold">
              for everyone
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#737373] text-3xl">
              Connect, Collaborate and celebrate from
            </span>
            <span className="text-[#737373] text-3xl">
              anywhere with Plex Meet
            </span>
          </div>
          <form className="flex gap-5">
            <div className="flex gap-2 h-10 w-44 bg-white items-center justify-center p-2 rounded-md border-2 border-black">
              <Image src={mailIcon} alt="mailIcon" className="h-5 w-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className=" h-8 w-32 text-sm text-black outline-none bg-transparent placeholder:font-semibold placeholder:text-[#353B51]"
              />
            </div>
            <div className="flex gap-2 h-10 w-44 bg-white items-center justify-center p-2 rounded-md border-2 border-black">
              <Image src={keyboardIcon} alt="mailIcon" className="h-5 w-5" />
              <input
                type="email"
                placeholder="Enter a code"
                className=" h-8 w-32 text-sm text-black outline-none bg-transparent placeholder:font-semibold placeholder:text-[#353B51]"
              />
            </div>
            <button className="h-10 w-28 bg-[#5d7afb] border-black border rounded-md text-[#353B51] font-semibold">
              Enter Room
            </button>
          </form>
          <div className="w-[500px] border-b-2 border-black"></div>
        </div>
      </div>
    </div>
  );
}
