import React from 'react';
import SectionAbout from "./SectionAbout";
import "../Globals.css";

const DATACARDS = [
  {
    id: 1,
    titleAbout: "Lorem, ipsum dolor.",
    contentAbout: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla officia, est voluptate adipisci delectus?",
    imageSrc: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    imageAlt: "about us"
  },
  {
    id: 2,
    titleAbout: "Lorem, ipsum dolor.",
    contentAbout: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla officia, est voluptate adipisci delectus?",
    imageSrc: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    imageAlt: "about us"
  },
  {
    id: 3,
    titleAbout: "Lorem, ipsum dolor.",
    contentAbout: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla officia, est voluptate adipisci delectus?",
    imageSrc: "https://images.pexels.com/photos/1625037/pexels-photo-1625037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    imageAlt: "about us"
  },
  {
    id: 4,
    titleAbout: "Lorem, ipsum dolor.",
    contentAbout: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla officia, est voluptate adipisci delectus?",
    imageSrc: "https://images.pexels.com/photos/1161931/pexels-photo-1161931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    imageAlt: "about us"
  }
]

export default function SectionsPage() {
  return (
    <section className="wrapper">
    {
      DATACARDS.map((
        {id,
        titleAbout,
        contentAbout,
        imageSrc}) => <SectionAbout
          key={id}
          titleAbout={titleAbout}
          contentAbout={contentAbout}
          imageSrc={imageSrc}
      />)
    }
  </section>
  );
}