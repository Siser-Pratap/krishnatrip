import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-[url('/images.jpg')] bg-cover h-[100vh]  w-[100vw]">
    <Navbar />
    <Header />
    </div>
    
  );
}
