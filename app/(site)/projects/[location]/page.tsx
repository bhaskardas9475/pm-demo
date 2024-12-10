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
  ).sort(
    (a, b) => (b.home_screen.localeCompare(a.home_screen)),
  );

  return (
    <>
      <title>{`Property Matrimony Projects - ${params.location}`}</title>
      <section className="pb-16 pt-32.5 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <PageHeader title={`Projects in ${params.location}`} />
        <ProjectsBody locationProjects={locationProjects} />
      </section>
    </>
  );
}
