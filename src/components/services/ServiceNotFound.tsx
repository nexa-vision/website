import React from 'react';
import { Link } from 'react-router-dom';

const ServiceNotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        We couldn't find the service you're looking for. It might have been moved or doesn't exist.
      </p>
      <div className="space-y-4">
        <Link
          to="/services"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          View All Services
        </Link>
        <div>
          <Link
            to="/"
            className="text-primary hover:text-primary-dark underline transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceNotFound; 