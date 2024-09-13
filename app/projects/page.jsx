import ProjectCard from '../ui/Projects';

const projects = [
  {
    name: "E-Commerce Platform",
    description: "A comprehensive e-commerce platform with cart functionality, secure transactions, and product browsing.",
    slug: "e-commerce-platform"
  },
  {
    name: "E-Agriculture Platform",
    description: "An innovative platform optimizing farming processes and enhancing productivity using modern web technologies.",
    slug: "e-agriculture-platform"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
