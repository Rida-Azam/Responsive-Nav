import Navbar from "./component/Navbar";

export default function Home() {
  return (
<>
<Navbar/>
<div className="mt-16 flex flex-col lg:flex-wrap">
        <div className="bg-red-500 h-40 w-full flex items-center justify-center text-white text-2xl font-bold">
          Welcome to My Portfolio
        </div>

        
        <div className="flex flex-wrap w-full">
          <div className="bg-purple-500 h-40 w-1/2 flex items-center justify-center text-white text-lg font-semibold">
         I am a Software Engineer and Designer
          </div>
          <div className="bg-green-500 h-40 w-1/2 flex items-center justify-center text-white text-lg font-semibold">
          Full Stack Developer
          </div>
        </div>
      </div>
   



</>

  );
}
