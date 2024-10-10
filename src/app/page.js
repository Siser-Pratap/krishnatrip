import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-[url('/images.jpg')] bg-cover h-[95vh] mt-5 w-[100vw]">
    <Navbar />
    <Header />
    </div>
    
  );
}
