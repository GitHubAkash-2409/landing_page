import { teams } from "../Data/data.js";
import FastMarquee from "react-fast-marquee";

const Team = () => {
  return (
    <div className="min-h-[50vh] bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
        <FastMarquee>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teams.map((teamMember, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md p-4">
                <img src={teamMember.img} alt={teamMember.name} className="rounded-full w-60 h-60 mx-auto mb-4" />
                <h2 className="text-xl font-semibold">{teamMember.name}</h2>
                <p className="text-gray-600">{teamMember.job}</p>
              </div>
            ))}
          </div>
        </FastMarquee>
      </div>
    </div>
  );
};

export default Team;
