import React from 'react';

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Mengapa pelayanan ini begitu penting?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repeat this block for each service */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="service-image.jpg" alt="Service" className="rounded-lg mb-4"/>
            <h3 className="text-xl font-bold mb-2">PMKJ</h3>
            <p className="text-gray-700">Persekutuan Mahasiswa Kristen Jakarta...</p>
          </div>
          {/* Repeat block ends */}
        </div>
      </div>
    </section>
  );
};

export default Services;
