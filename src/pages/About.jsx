import React from 'react';
import {assets} from '../assets/assets';

const About = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      {/* Top Section: About */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <img
            src={assets.hero_img}
            alt="About Portal"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About Our Job Portal
          </h2>
          <p className="text-gray-600 mb-4">
            We connect talented individuals with top employers worldwide. Our mission is to
            simplify the job search process, making it faster, smarter, and more accessible for
            everyone. Whether you're a job seeker or a company looking to hire, our platform offers
            the perfect solution.
          </p>
          <p className="text-gray-600">
            Explore thousands of job listings, apply seamlessly, and take your career to the next
            level with our modern and intuitive platform.
          </p>
        </div>
      </div>

      {/* Bottom Section: Why Choose Us */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h3>
        <ul className="text-gray-600 space-y-2">
          <li>✔ Thousands of verified job listings</li>
          <li>✔ Easy application process</li>
          <li>✔ Personalized job recommendations</li>
          <li>✔ Secure and trustworthy platform</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
