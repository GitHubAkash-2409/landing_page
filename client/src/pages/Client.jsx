import FastMarquee from "react-fast-marquee";
import { marqueeImages } from "../Data/data.js";

const Client = () => {
  if (!marqueeImages || marqueeImages.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="mt-10 mb-15">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-4">Our Clients Come from</h1>
      <div className="marquee-container mx-5 flex items-center justify-center">
        <FastMarquee>
          {marqueeImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="ml-4 md:ml-8" 
            />
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Client;
