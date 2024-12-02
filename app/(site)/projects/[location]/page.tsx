import PageHeader from "@/components/PageHeader";
import ProjectList from "@/components/Project/ProjectList";
import ProjectsBody from "@/components/Project/ProjectsBody";
import { useParams } from "next/navigation";

export async function generateStaticParams() {
  return ProjectList.map((project) => ({
    location: project.city.toLowerCase(), // Each object corresponds to a route param
  }));
}

export default function Projects({ params }) {
  const locationProjects = ProjectList.filter(
    (item) => item.city.toLowerCase() === params.location,
  );

  return (
    <>
      <title>{`Property Matrimony Projects - ${params.location}`}</title>
      <section className="py-20 lg:py-25 xl:py-30">
        <PageHeader title={`Projects in ${params.location}`} />
        <ProjectsBody locationProjects={locationProjects} />
      </section>
    </>
  );
}
