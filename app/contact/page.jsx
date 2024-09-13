import { FaGithub, FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Head from 'next/head';

function Contact() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <Head>
        <title>Contact - Full Stack Developer Portfolio</title>
      </Head>
      
      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Get in Touch</h2>
        <p className="text-gray-600 mb-4">If you have any questions or just want to say hello, feel free to reach out using the form below.</p>
        
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="message"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      {/* Separator */}
      <div className="my-8 border-t-2 border-gray-200"></div>

      {/* Contact Information and Social Links */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> anmolyagik2000@gmail.com
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Mobile:</strong> +91-8887165691
        </p>
        
        <div className="flex items-center mb-6 space-x-6">
          <a href="https://github.com/anmolya-cloud" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={28} />
          </a>
          <a href="https://discord.gg/eUKyUjXC" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaDiscord size={28} />
          </a>
          <a href="https://x.com/Yagik_anmol" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={28} />
          </a>
          <a href="https://linkedin.com/in/anmol-yagik-19b5a6203" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
