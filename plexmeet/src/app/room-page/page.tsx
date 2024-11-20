import Navbar from "@/components/homePageImage/navbar";

function RoomPage() {
  return (
    <div className=" p-5 h-screen w-screen bg-[#BDBAFF]">
      <div className="flex items-center justify-between">
        <Navbar />
        <div className="flex gap-2">
          <span className="text-3xl text-[#000000] font-semibold">
            You are connected to
          </span>
          <sub className="text-xl text-[#353B51] ">xyz@gmail.com</sub>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex flex-col gap-5">
          <span className="text-2xl text-[#353B51] font-semibold">You</span>
          <div className="h-72 w-[500px] rounded-lg border border-black"></div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-2xl text-right text-[#353B51] font-semibold">
            xyz@gmail.com
          </span>
          <div className="border border-black h-72 w-[500px] rounded-lg"></div>
        </div>
      </div>
      <button className="mt-5 bg-[#938EFF] p-2 rounded-md text-[#353B51] font-semibold border border-black">
        Share my video
      </button>
    </div>
  );
}
export default RoomPage;
