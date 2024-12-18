"use client";
import React, { useMemo, useState, useTransition } from "react";
import ProjectItem from "./ProjectItem";
import Modal from "./Modal";
import { ProjectType } from "@/types/project";
import ProjectsSearch from "./ProjectsSearch";

export default function ProjectsBody({
  locationProjects,
}: {
  locationProjects: ProjectType[];
}) {
  const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);
  const [keyword, setKeyword] = useState("");

  const filteredList = useMemo(() => {
    if (keyword.trim().length) {
      return locationProjects.filter((item) =>
        item.project.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
      );
    } else {
      return locationProjects;
    }
  }, [keyword]);

  return (
    <>
      <div className="mx-auto mt-5 max-w-c-1280 px-4 md:px-8 xl:mt-5 xl:px-0">
        <ProjectsSearch keyword={keyword} setKeyword={setKeyword} />
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {filteredList.length === 0 ? (
            <div className="bold text-md text-red-400">
              Sorry! Nothing found.
            </div>
          ) : (
            filteredList.map((item) => (
              <ProjectItem
                key={item.project}
                item={item}
                setSelectedItem={setSelectedItem}
              />
            ))
          )}
        </div>
      </div>
      {selectedItem ? (
        <Modal item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : null}
    </>
  );
}
