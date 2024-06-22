import oyola1 from "./images/project_images/oyola/oyola1.png";
export const siteData = {
  title: 'SOFTWARE SQUARE',
  subTitle: 'We craft your ideas into fine softwares.',
  work:
    [
      {
        key: 1,
        title: "OYOLA",
        images: [oyola1],
        description:
          "OYOLA is a platform for tourists to find and book tours and activities in Araku valley, India.",
        link: "https://oyola.in",
        slug: "oyola",
        workType: "Web Development",
        techStack: ["React", "Next.js", "TailwindCSS", "Firebase"],
        status: "Live",
        workDescription:
          "From gathering the requirments to designing, developing and deployment of website, Our team has done it all. We have used React.js and TailwindCSS for styling. We have also used Firebase",
      },
    ]
};

export const techStackColors = {
  React: {
    backgroundColor: "bg-blue-500",
    textColor: "text-slate-100"
  },
  "Next.js": {
    backgroundColor: "bg-black",
    textColor: "text-white",
  },
  TailwindCSS: {
    backgroundColor: "bg-blue-300",
    textColor: "text-grey-500",
  },
  Firebase: {
    backgroundColor: "bg-yellow-500",
    textColor: "text-white",
  },
  "Node.js": {
    backgroundColor: "bg-green-500",
    textColor: "text-green-500",
  },
  Express: {
    backgroundColor: "bg-gray-500",
    textColor: "text-blue-500",
  },
  MongoDB: {
    backgroundColor: "bg-green-500",
    textColor: "text-white",
  },
};