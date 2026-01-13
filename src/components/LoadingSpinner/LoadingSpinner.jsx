import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-warm-beige dark:bg-gray-900">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-sunset-orange/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-sunset-orange rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
          Loading your adventure...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
