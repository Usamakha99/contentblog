// about/page.js

import React from 'react';

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to our website! We are dedicated to providing the best service possible. Our mission is to deliver high-quality products that bring value to our customers.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our team is composed of experienced professionals who are passionate about what they do. We believe in continuous improvement and strive to exceed expectations in everything we undertake.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for visiting our site. We look forward to serving you and hope you have a great experience with us.
        </p>
      </div>
    </div>
  );
};

export default page;