"use client";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import Modal from "./Modal";
import { ProjectType } from "@/types/project";

export default function ProjectsBody({
  locationProjects,
}: {
  locationProjects: ProjectType[];
}) {
  const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);

  return (
    <>
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {locationProjects.map((item) => (
            <ProjectItem
              key={item.project}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      </div>
      {selectedItem ? (
        <Modal item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : null}
    </>
  );
}
