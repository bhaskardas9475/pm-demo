import { Menu } from "@/types/menu";
import serviceList from "../Features/ServiceList";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "About Us",
    newTab: false,
    path: "/about-us",
  },
  {
    id: 3,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Bangalore",
        newTab: false,
        path: "/projects/bangalore",
      },
      {
        id: 34,
        title: "Hyderabad",
        newTab: false,
        path: "/projects/hyderabad",
      },
      {
        id: 35,
        title: "Noida",
        newTab: false,
        path: "/projects/noida",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
    submenu: serviceList.map((service, index) => ({
      id: index + 1,
      title: service.title,
      newTab: false,
      path: `/service/${service.slug}`,
    })),
  },
  {
    id: 5,
    title: "Gallery",
    newTab: false,
    path: "/gallery",
  },
  {
    id: 4,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
];

export default menuData;
