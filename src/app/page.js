import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Side from "./components/Side";
export default function Home() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <img className="absolute inset-0 z-[-1] opacity-70 object-cover w-full h-full " src="/images.jpg" />
      <div className="relative z-[10] h-full w-full ">
          <Navbar />
          <Header  />
          <Side />
    </div>
    </div>
    
  );
}
