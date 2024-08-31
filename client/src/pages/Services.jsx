import { Link } from "react-router-dom";
import ServiceImg from "../assets/Banner2.png";
import { services } from "../Data/data.js";

const Services = () => {
  return (
    <div>
      {/* Hero section */}
      <div
        className="relative bg-cover bg-center h-96 md:h-[45vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${ServiceImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 md:px-10 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Software Product Engineering Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Innovate&nbsp;<span className="text-blue-500">-</span>
            &nbsp;Design&nbsp;<span className="text-yellow-400">-</span>
            &nbsp;Develop
          </p>
        </div>
      </div>

      {/* Services section */}
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <div className="px-6 py-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-200 text-base">{service.text}</p>
                </div>
                <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-green-400 rounded-b-lg">
                  <Link to={"/contact"} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
