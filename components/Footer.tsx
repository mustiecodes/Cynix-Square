import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-10 px-5 bg-gray-800 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-lg font-bold mb-3">Product</h4>
            <ul>
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Billing</a></li>
              <li><a href="#" className="hover:underline">Connect</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Resources</h4>
            <ul>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">API Reference</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Legal</h4>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <p>&copy; 2024 Stripe-Inspired Landing Page. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
