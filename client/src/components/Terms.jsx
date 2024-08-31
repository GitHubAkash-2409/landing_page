import { RiFileTextLine } from 'react-icons/ri';

const Terms = () => {
  return (
    <div className="bg-gray-200 h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Terms & Conditions</h2>
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
              href="/terms.pdf"
              target="_blank"
              className="text-blue-500 hover:underline flex items-center"
            >
              <RiFileTextLine className="w-6 h-6 mr-2" />
              Download Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
