import CardProject from "../components/cards/CardProject";

const projectsData = [
  {
    title: "Cariri Tips",
    description: "Projeto Oficial para o site da CaririTips.",
    techs: "#Next.Js #Shadcn/ui #Typescript #ResponsiveDesign #tailwindCSS ",
    links: [
      { name: "Deploy", url: "https://cariritips.vercel.app/" },
      { name: "Figma", url: "https://www.figma.com/design/SWAMFkpQEGCKfqdJSBThVR/cariritips.com.br?node-id=0-1&t=7CphBOHg7IstZEb9-1" },
      { name: "Código", url: "https://github.com/skrodrigo/cariritips.com.br" }
    ]
  },
  {
    title: "Portfólio Skrodrigo",
    description: "Projeto do meu portfólio.",
    techs: "#Next.Js #Typescript #TailwindCSS",
    links: [
      { name: "Deploy", url: "https://skrodrigo.vercel.app/" },
      { name: "Figma", url: "https://www.figma.com/design/Hf7LgtuqtgcNPlZHEzJ7U3/portfolio?node-id=216-6&t=kCNO36uBvorM8fvR-1" },
      { name: "Código", url: "https://github.com/skrodrigo/skrodrigo.vercel.app" }
    ]
  },
  {
    title: "Micro Framework",
    description: "Projeto para criar um Micro Framework em SASS de um site Famoso. O escolhido foi: kirvano.",
    techs: "#sass #figma #html",
    links: [
      { name: "Figma", url: "https://www.figma.com/design/HFtXws11QdYxa22pMm6kSL/Style--Guide?node-id=0-1&t=jW1COt0BJVd92OZm-1" },
      { name: "Código", url: "https://github.com/skrodrigo/design.system.kirvano" }
    ]
  }
];

const Page = () => {
  return (
    <div className="mb-20">

      <div className="flex flex-col items-center justify-center mt-12 space-y-8">
        <span className="text-5xl font-semibold md:text-6xl">Projetos</span>
        <p className="text-center mx-5">Visualize alguns dos meus <b>projetos</b>.</p>
      </div>

      {projectsData.map((project, index) => (
        <CardProject
          key={index}
          title={project.title}
          description={project.description}
          techs={project.techs}
          links={project.links}
        />
      ))}
    </div>
  );
};

export default Page;
