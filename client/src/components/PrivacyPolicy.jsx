
import { RiLockPasswordLine } from 'react-icons/ri'; 

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
          </div>
          <div className="p-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              quam vitae mauris suscipit dignissim. Curabitur nec purus justo.
              ...
            </p>
          </div>
          <div className="p-4 border-t">
            <a
              href="/privacy-policy.pdf"
              target="_blank"
              className="text-blue-500 hover:underline flex items-center"
            >
              <RiLockPasswordLine className="w-6 h-6 mr-2" />
              Download Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
