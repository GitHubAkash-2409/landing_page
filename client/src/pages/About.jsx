import AboutImg from '../assets/about.jpg';
import { about } from '../Data/data';

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About Image */}
          <div className="md:order-2">
            <img src={AboutImg} alt="About" className="rounded-lg shadow-lg" />
          </div>

          {/* About Content */}
          <div className="md:order-1">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">{about[0].paragraph}</p>

            {/* Why Us */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-700">
                {about[0].Why.map((reason, index) => (
                  <li key={index} className="mb-2">{reason}</li>
                ))}
              </ul>
            </div>

            {/* Additional Reasons */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Additional Reasons</h3>
              <ul className="list-disc list-inside text-gray-700">
                {about[0].Why2.map((reason, index) => (
                  <li key={index} className="mb-2">{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
