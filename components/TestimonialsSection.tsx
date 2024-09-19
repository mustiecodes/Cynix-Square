import { FC } from 'react';

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="use-cases" className="py-20 px-5 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Trusted by Businesses Worldwide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="text-lg mb-5">"{testimonial.quote}"</p>
              <h4 className="text-xl font-bold">{testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
