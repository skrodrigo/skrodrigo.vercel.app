import Link from "next/link";
import Image from "next/image";
import CardTech from "./components/cards/CardTech";

export default function Home() {
  return (

  <div>

    <div className="flex justify-center items-center mx-auto xl:max-w-[1216px] lg:max-w-[912px]">
        <section className="flex flex-col lg:flex-row-reverse items-center text-center space-y-7 mt-16">
          <Image src="/foto.png" width={2000} height={2000} priority alt="Foto do Portfolio Rodrigo Carvalho" className="w-[192px] h-[195px] lg:w-[384px] lg:h-[390px]" />
          <div className="flex flex-col">
            <span className="font-semibold text-3xl lg:self-start lg:text-justify lg:text-5xl ">Olá, Eu sou <br />Rodrigo</span>
            <p className="text-justify lg:ml-0 mx-12 mt-7">Admirador de tecnologia e desenvolvimento Web. 
            Tenho 18 anos e sou estudante de Sistemas de Informação na UNINASSAU, e Técnico em Informática pela EEEP ANOP. 
            Tenho buscado conhecimento e aprendizado com assiduidade para sempre entregar o melhor para meus trabalhos e projetos. 
            Estou a procura de novos desafios para enfrentar no mercado. </p>
            <div className="mt-9 space-y-3 flex flex-col lg:flex-row lg:justify-start items-center lg:space-x-8">
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-black rounded-3xl text-base font-bold px-6 py-3 w-44 h-11 lg:text-base">
                  Download CV
                </button>
              </a>
              <Link href='/xp' className="text-[#2563EB] underline text-base lg:ml-8">
                  Veja minha XP
              </Link>
            </div>
          </div>
        </section>
    </div>
      
    <div className="flex justify-center items-center mx-auto ">
        <section className="flex flex-col items-center text-center mt-24 lg:mt-40">
          <span className="text-xl lg:text-3xl  font-light mb-16">Algumas tecnologias que<br />
          venho utilizando</span>
          <div className="lg:grid grid-cols-3 xl:gap-14 lg:gap-12">

            <CardTech title="Front-End Engineer" tech={[
              { name: "React JS", svg: "./../../icons/React.svg" },
              { name: "Next JS", svg: "./../../icons/Next.svg" },
              { name: "Figma", svg: "./../../icons/Figma.svg" },
              { name: "Tailwind CSS", svg: "./../../icons/Tailwind.svg" }
            ]} />

            <CardTech title="Back-End Engineer" tech={[
              { name: "Nest JS", svg: "./../../icons/Nest.svg" },
              { name: "Express JS", svg: "./../../icons/Express.svg" },
              { name: "Prisma", svg: "./../../icons/Prisma.svg" }
            ]} />

            <CardTech title="Tools" tech={[
              { name: "Github", svg: "./../../icons/GitHub.svg" }
            ]} />

          </div>  
        </section>
    </div>

  </div>

  );
}
