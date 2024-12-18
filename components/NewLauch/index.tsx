"use client";
import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import ProjectItem from "../Project/ProjectItem";
import ProjectList from "../Project/ProjectList";
import { ProjectType } from "@/types/project";

export default function NewLauch() {
  const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);

  const locationProjects = ProjectList.filter(
    (project) => project.home_screen === "yes",
  );
  
  return (
    <div>
      <div className="animate_top mx-auto text-center" id="new-lauch">
        <SectionHeader
          headerInfo={{
            title: `PROJECTS`,
            subtitle: `New Launch Projects`,
            description: `Luxury redefined, crafted for you. Step into a world of possibilities.`,
          }}
        />
      </div>
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
    </div>
  );
}
