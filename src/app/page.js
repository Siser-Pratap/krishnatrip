import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Side from "./components/Side";
export default function Home() {
  return (
    <div className="">
      <img className="absolute z-[-1] opacity-70 h-[100vh] w-[100vw] min-w-[510px] min-h-[606px]" src="/images.jpg" />
      <div className="relative z-[10] h-[100vh] w-[100vw] min-w-[510px]">
          <Navbar />
          <Header  />
          <Side />
    </div>
    </div>
    
  );
}
