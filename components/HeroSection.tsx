import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <h1 className="text-6xl font-bold mb-6">
        Powering the Future of Payments
      </h1>
      <p className="text-xl mb-10">
        The best payment gateway to power your online business.
      </p>
      <a
        href="#features"
        className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-300"
      >
        Start Now
      </a>
    </section>
  );
};

export default HeroSection;
