import { FaJsSquare, FaReact, FaNode, FaDatabase, FaAws, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTypescript, SiNextdotjs } from 'react-icons/si';

export default function TechnicalSkills() {
  return (
    <div className="bg-white shadow-lg rounded-lg px-8 py-6 mb-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Technical Skills</h2>
      <ul className="list-none mb-4 space-y-3">
        <li className="flex items-center text-gray-700">
          <FaJsSquare className="text-yellow-500 mr-2" size={24} />
          <span className="text-lg">JavaScript</span>
        </li>
        <li className="flex items-center text-gray-700">
          <SiTypescript className="text-blue-500 mr-2" size={24} />
          <span className="text-lg">TypeScript</span>
        </li>
        <li className="flex items-center text-gray-700">
          <FaReact className="text-blue-400 mr-2" size={24} />
          <span className="text-lg">React.js</span>
        </li>
        <li className="flex items-center text-gray-700">
          <SiNextdotjs className="text-black mr-2" size={24} />
          <span className="text-lg">Next.js</span>
        </li>
        <li className="flex items-center text-gray-700">
          <FaNode className="text-green-500 mr-2" size={24} />
          <span className="text-lg">Node.js</span>
        </li>
        <li className="flex items-center text-gray-700">
          <FaDatabase className="text-green-600 mr-2" size={24} />
          <span className="text-lg">PostgreSQL</span>
        </li>
        <li className="flex items-center text-gray-700">
          <SiMongodb className="text-green-500 mr-2" size={24} />
          <span className="text-lg">MongoDB</span>
        </li>
        <li className="flex items-center text-gray-700">
          <FaAws className="text-orange-500 mr-2" size={24} />
          <span className="text-lg">AWS</span>
        </li>
        <li className="flex items-center text-gray-700">
          <FaDocker className="text-blue-400 mr-2" size={24} />
          <span className="text-lg">Docker</span>
        </li>
      </ul>
    </div>
  );
}
