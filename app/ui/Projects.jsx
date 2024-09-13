import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">{project.name}</h2>
      <p className="text-gray-700 mb-6">{project.description}</p>
      
      <Link href={`/projects/${project.slug}`}>
        <p className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          View Project
        </p>
      </Link>
    </div>
  );
}
