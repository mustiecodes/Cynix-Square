import { FC } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home: FC = () => {
  const features = [
    { title: 'Global Payments', description: 'Accept payments from anywhere in the world with built-in security and reliability.' },
    { title: 'Easy Integrations', description: 'Seamlessly integrate with your existing platform and start processing payments in minutes.' },
    { title: 'Comprehensive Analytics', description: 'Gain insights into your business with real-time transaction monitoring and reports.' },
  ];

  const testimonials = [
    { quote: 'Stripe has completely transformed the way we process payments, enabling us to scale effortlessly.', author: 'John Doe, CEO of TechCo' },
    { quote: 'The integrations were seamless, and the insights we now get from the analytics are game-changing.', author: 'Jane Smith, CTO of SoftCorp' },
  ];

  return (
    <>
      <HeroSection />
      <FeaturesSection features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
