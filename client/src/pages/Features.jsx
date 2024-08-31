import { features } from '../Data/data';
import { GrTechnology } from "react-icons/gr";

const Features = () => {
  return (
    <div  className="bg-white py-16" id='features'>
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {/* <i className={feature.icon} style={{ fontSize: '2rem' }}></i> */}
                <GrTechnology style={{ fontSize: '2rem' }}/>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
