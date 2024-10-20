import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full relative flex items-center justify-center h-screen bg-cover " 
         style={{ backgroundImage: "url('https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative z-10 text-white text-center p-4">
        <h1 className="text-5xl font-bold">"Justice Served, Rights Protected"</h1>
        <p className="mt-2 text-base text-sm text-nueutal-500">Dedicated to providing expert legal advice and representation</p>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
