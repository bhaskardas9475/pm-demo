import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "About us",
    newTab: false,
    path: "/about-us",
  },
  {
    id: 4,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
  {
    id: 5,
    title: "Gallery",
    newTab: false,
    path: "/gallery",
  },
  // {
  //   id: 5,
  //   title: "Locations",
  //   newTab: false,
  //   path: "/#support",
  // },
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
    id: 4,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
