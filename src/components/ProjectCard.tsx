import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group">
      <div className="relative h-64 overflow-hidden bg-gray-300">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-6">
        <span className="text-red-700 text-sm font-semibold uppercase">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <button className="text-red-700 font-semibold hover:text-red-800 transition">
          View Project →
        </button>
      </div>
    </div>
  );
}
