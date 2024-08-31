import { RiInstagramFill, RiLinkedinFill, RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { footerLinks } from '../Data/data.js';

const AppFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-16">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    {link.link ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white"
                      >
                        {getIcon(link.name)}
                        <span className="ml-2">{link.name}</span>
                      </a>
                    ) : (
                      <span>{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} - ChanduTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Function to return appropriate icon based on social media name
const getIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'instagram':
      return <RiInstagramFill className="w-6 h-6" />;
    case 'linkedin':
      return <RiLinkedinFill className="w-6 h-6" />;
    case 'facebook':
      return <RiFacebookFill className="w-6 h-6" />;
    case 'twitter':
      return <RiTwitterFill className="w-6 h-6" />;
    default:
      return null;
  }
};

export default AppFooter;
