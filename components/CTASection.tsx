import { FC } from 'react';

const CTASection: FC = () => {
  return (
    <section id="cta" className="py-20 px-5 bg-blue-600 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-5">Get Started with Us Today</h2>
        <p className="text-lg mb-10">Join thousands of businesses using our platform to accept payments globally.</p>
        <a
          href="#"
          className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-300"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
