import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Side from "./components/Side";
export default function Home() {
  return (
    <>
    {/* <div className="relative h-[100vh] w-full overflow-hidden"> */}
      {/* <img className="absolute inset-0 z-[-1] opacity-70 object-cover w-full h-full " src="/images.jpg" /> */}
      {/* <div className="relative z-[10] h-full w-full "> */}
          <Navbar />
          <Header  />
          <Side />
          
      {/* </div>
    </div>
    <div className="h-[20vh] w-full flex justify-center flex-col gap-[2rem] mt-32 items-center overflow-visible">
      <h1>THE ADVENTURE</h1>
      <p className="italic">Mastering the art of perfect adventure for 10+ years in the wild.</p>
      <div className="flex flex-col gap-[0px]">
        <img className="w-[20%]" src="https://img.icons8.com/ios-filled/50/horizontal-line.png" alt="horizontal-line"/>
        <img className="w-[90%]" src="https://img.icons8.com/ios-filled/50/horizontal-line.png" alt="horizontal-line"/>
      </div>
    </div> */}
   
   
    
    </>
    
    
  );
}
