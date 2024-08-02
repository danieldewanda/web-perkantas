import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Apa kata mereka?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repeat this block for each testimonial */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700 mb-4">Momen natal Trisakti di tahun kedua kuliah saya adalah titik dimana Tuhan...</p>
            <p className="text-gray-500">Yohanes Bensohur</p>
          </div>
          {/* Repeat block ends */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
