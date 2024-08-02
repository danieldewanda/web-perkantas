import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-red-600"> 
              <img src="/path/to/logo.png" alt="Logo" className="h-8"/>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-red-600 relative group">
                    Beranda
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-red-600 relative group">
                    Acara
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-red-600 relative group">
                    Karya
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-red-600 relative group">
                    Pelayanan
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-red-600 relative group">
                    Literatur Perkantas
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-red-600 relative group">
                    Tentang
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 bg-red-100 px-4 py-2 rounded-full hover:bg-red-200 transition">
                    Persembahan
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };
    

export default Header;
