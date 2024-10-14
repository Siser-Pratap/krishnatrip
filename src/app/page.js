import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Side from "./components/Side";
export default function Home() {
  return (
    <>
    <div className="relative h-[100vh] w-full overflow-hidden">
      <img className="absolute inset-0 z-[-1] opacity-70 object-cover w-full h-full " src="/images.jpg" />
      <div className="relative z-[10] h-full w-full ">
          <Navbar />
          <Header  />
          <Side />
      </div>
    </div>
    <div className="h-[20vh] w-full flex justify-center flex-col gap-[2rem] mt-32 items-center overflow-visible">
      <h1>THE ADVENTURE</h1>
      <p className="italic">Mastering the art of perfect adventure for 10+ years in the wild.</p>
      {/* <hr className="w-[60px] m-[2rem] border-none h-[60px]"></hr> */}
      <svg className="h-[20vh] w-full bg-red-800">
            <path d="M 10 100 Q 250 100 490 100" stroke="white" fill="transparent"/>
      </svg>
    </div>
    <div>
      <div className="bg-red h-[100px] w-[500px]"></div>
    </div>
    
    </>
    
    
  );
}
