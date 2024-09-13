import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Anmol Yagik</h1>
          <p className="text-lg mb-6">
            I'm a Full Stack Developer who loves to build efficient and scalable web applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/projects">
              <p className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
                View My Projects
              </p>
            </Link>
            <Link href="/contact">
              <p className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Me
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Overview */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>
          <p className="text-gray-700 text-lg mb-6">
            I'm a passionate Full Stack Developer skilled in building scalable, high-performance web applications. 
            With hands-on experience in front-end and back-end development, I enjoy solving complex problems through code.
          </p>
          <Link href="/about">
            <p className="text-blue-600 font-semibold underline">Read More</p>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">JavaScript</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">React.js</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Node.js</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">PostgreSQL</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Docker</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">AWS</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">MongoDB</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Next.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">E-Commerce Platform</h3>
              <p className="text-gray-700 mb-4">An online platform with cart functionality and secure payment integration.</p>
              <Link href="/projects/e-commerce-platform">
                <p className="text-blue-600 font-semibold underline">View Project</p>
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">E-Agriculture Platform</h3>
              <p className="text-gray-700 mb-4">A platform optimizing farming processes with modern technologies.</p>
              <Link href="/projects/e-agriculture-platform">
                <p className="text-blue-600 font-semibold underline">View Project</p>
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Social Media Research</h3>
              <p className="text-gray-700 mb-4">An exploration of the next frontier of social media and content sharing.</p>
              <Link href="/projects/social-media-research">
                <p className="text-blue-600 font-semibold underline">View Project</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-lg mb-6">I am always open to discuss new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className="flex justify-center space-x-4 mb-6">
            <Link href="https://github.com/anmolya-cloud" target="_blank" rel="noopener noreferrer">
              <FaGithub size={36} className="hover:text-gray-300 transition duration-300" />
            </Link>
            <Link href="https://linkedin.com/in/anmolya-cloud" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={36} className="hover:text-gray-300 transition duration-300" />
            </Link>
            <Link href="https://twitter.com/anmol_yagik" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={36} className="hover:text-gray-300 transition duration-300" />
            </Link>
          </div>
          <Link href="/contact">
            <p className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
              Contact Me
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
