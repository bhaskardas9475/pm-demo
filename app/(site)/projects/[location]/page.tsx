"use client";

import PageHeader from "@/components/PageHeader";
import Modal from "@/components/Project/Modal";
import ProjectItem from "@/components/Project/ProjectItem";
import ProjectList from "@/components/Project/ProjectList";
import { ProjectType } from "@/types/project";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);
  const { location } = useParams();
  const locationProjects = ProjectList.filter(
    (item) => item.city.toLowerCase() === location,
  );

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <PageHeader title={`Projects in ${location}`} />
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {locationProjects.map((item) => (
            <ProjectItem item={item} setSelectedItem={setSelectedItem} />
          ))}
        </div>
      </div>
      {selectedItem ? <Modal item={selectedItem} setSelectedItem={setSelectedItem}/> : null}
    </section>
  );
}
