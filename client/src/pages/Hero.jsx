import { Link } from 'react-router-dom';
import HeroBanner from '../assets/hero.jpg';
import { heroContent } from "../Data/data.js";

const Hero = () => {
  return (
    <div id="home" className="relative bg-cover bg-center h-[75vh] flex items-center justify-center" style={{ backgroundImage: `url(${HeroBanner})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 md:px-10 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">{heroContent[0].title}</h1>
        <p className="text-lg md:text-xl mb-8">{heroContent[0].paragraph}</p>
        <div>
          <Link to={"/contact"} className="bg-white text-gray-800 py-3 px-8 rounded-full font-bold hover:bg-gray-300 transition duration-300 ease-in-out inline-block">Get Quote</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
//////////////////////////////////////
// import HeroBanner from '../assets/hero.jpg';
// import { heroContent } from "../Data/data.js";

// const Hero = () => {
//   return (
//     <div className="relative bg-cover bg-center h-screen flex items-center justify-center">
//       {/* Background overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Hero content */}
//       <div className="container mx-auto px-6 md:px-10 text-center text-white relative z-10">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">{heroContent[0].title}</h1>
//         <p className="text-lg md:text-xl mb-8">{heroContent[0].paragraph}</p>
//         <div>
//           <a href="#learn-more" className="bg-white text-gray-800 py-3 px-8 rounded-full font-bold hover:bg-gray-300 transition duration-300 ease-in-out inline-block">Learn More</a>
//         </div>
//       </div>

//       {/* Hero background image */}
//       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HeroBanner})`, zIndex: -1 }}></div>
//     </div>
//   );
// }

// export default Hero;
