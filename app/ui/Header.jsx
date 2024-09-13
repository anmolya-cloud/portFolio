'use client'
import Link from 'next/link';
import { FaCode } from 'react-icons/fa'; // Using a subtle code icon

export default function Header() {
  return (
    <nav className="bg-sky-500 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo with Icon */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            {/* Code Icon */}
            <FaCode className="text-cyan-400 text-3xl mr-2" />
            {/* Name in a clean, bold font */}
            <div className="text-3xl font-semibold text-white tracking-wide">
              Anmol<span className="text-sky-600">Yagik</span>
            </div>
          </div>
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">
              <div className="text-gray-300 hover:text-white transition-all ease-in-out duration-200">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <div className="text-gray-300 hover:text-white transition-all ease-in-out duration-200">Projects</div>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <div className="text-gray-300 hover:text-white transition-all ease-in-out duration-200">Skills</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="text-gray-300 hover:text-white transition-all ease-in-out duration-200">About</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="text-gray-300 hover:text-white transition-all ease-in-out duration-200">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
