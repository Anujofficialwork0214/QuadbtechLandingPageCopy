"use client";
import Image from "next/image";
import Link from "next/link";
interface JobCardProps {
  title: string;
  location: string;
  experience: string;
  imageSrc: string;
  isOdd: boolean;
  buttonText?: string;
}
const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  experience,
  imageSrc,
  isOdd,
  buttonText = "Know More",
}) => {
  return (
    <div
      className={`rounded-[20px] border border-theme font-roboto  
        w-[300px] lg:w-[300px] h-[360px] 2xl:w-[350px] lg:h-[390px] flex flex-col justify-between p-4 relative 
        shadow-md transition-all duration-300 hover:shadow-gray-400 hover:shadow-lg hover:scale-102
        ${isOdd ? "bg-white" : "job-card"}`}
    >
      {/* Top Content */}
      <div className="space-y-2 lg:space-y-4 z-10 ml-auto relative  ">
        <div className="relative inline-block">
          <img
            src="Group 6.png"
            alt=""
            className="absolute -top-2 -left-3 w-8 h-8 z-0"
          />
          
          <h3
            className={`inline-block px-3 py-1 rounded-full text-sm relative z-10  
    ${isOdd ? "job-card text-white" : "bg-white text-black font-bold"}`}
          >
            {title}
          </h3>
        </div>

        <div className="flex justify-end">
          <p
            className={`rounded-full text-sm px-2 py-1 mb-1 inline-block border 
              ${isOdd ? "border-gray-300 text-black" : "border border-white text-theme"}`} //border-theme
          >
            Location: {location}
          </p>
        </div>

        <div className="flex justify-end">
          <p
            className={`rounded-full text-sm px-2 py-1 inline-block border 
              ${isOdd ? "border-gray-300 text-black" : "border border-white text-theme"}`} // border-theme
          >
            Experience: {experience}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-72 flex flex-col justify-end overflow-visible">
        <div className="absolute left-[-30px] bottom-[-40px] w-56 h-80 z-10 overflow-visible ">
          <Image
            src={imageSrc}
            alt="3D Illustration"
            width={500}
            height={500}
            className="object-contain w-full h-full mix-blend-multiply  opacity-90"
            draggable="false"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Button */}
        <div className="z-20 flex justify-end pb-4 ">
          <Link href="/form">
            <button
              className={`text-sm font-medium py-2 px-6 rounded-full transition duration-300 underline cursor-pointer 
            ${isOdd ? "button-theme bg-white " : "bg-white text-black border border-gray-400"}`}
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
