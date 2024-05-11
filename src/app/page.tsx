import Link from "next/link";
import Image from "next/image";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
  <>
    <div className="min-h-screen flex flex-col justify-between">

    <div className="md:mt-8 sticky top-2 z-20">
        <header className='m-auto w-[300px] md:w-[608px] h-[70px] rounded-[30px] bg-[#131313] backdrop-blur bg-opacity-85'>
          <div className='flex md:justify-between justify-center items-center w-full h-full space-x-4'>
            <div className='flex items-center font-semibold text-sm md:ml-4 md:mr-4'>
              <Link href='/' className='text-[#2563EB] '>skrodrigo</Link>
            </div>
            <div className='flex items-center font-semibold md:space-x-8 space-x-4 text-sm justify-center '>
              <ul className="flex justify-end pr-4 space-x-4 md:space-x-8 ">
                <li>
                  <Link href='/contatos'>Contato</Link>
                </li>
                <li>
                  <Link href='/xp'>XP/Educação</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
    </div>
      
    <div className="flex justify-center items-center mx-auto xl:max-w-[1216px] lg:max-w-[912px]">
      <section className="flex flex-col lg:flex-row-reverse items-center text-center space-y-7 mt-16">
        <img src="./../../foto.png" alt="Foto do Portfolio Rodrigo Carvalho" className="w-[192px] h-[195px] lg:w-[384px] lg:h-[390px]" />
        <div className="flex flex-col">
          <span className="font-semibold text-3xl lg:self-start lg:text-justify lg:text-5xl ">Olá, Eu sou <br />Rodrigo</span>
          <p className="text-justify lg:ml-0  mx-12 mt-7">Admirador de tecnologia, desenvolvimento Web e UI/UX, 
             brasileiro e nascido em 2005. Sou estudante de Sistemas
             de Informação. Tenho buscado conhecimento e 
             aprendizado para sempre entregar o melhor para meus 
             trabalhos e projetos.</p>
          <div className="mt-9 space-y-3 flex flex-col lg:flex-row lg:justify-start items-center lg:space-x-8">
            <button className="bg-white text-black rounded-3xl text-xs font-bold px-6 py-3 w-[120px] h-[40px] lg:w-40 lg:h-12 lg:text-base">
              Dowload CV  
            </button> 
            <Link href='/xp' className="text-[#2563EB] underline text-xs lg:text-base lg:ml-8">
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
        <div className="lg:flex xl:space-x-14 lg:space-x-12">

        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-5 py-7">
            <span className="text-base font-light mb-10">
            Front-End Engineer
            </span>
            <div className="flex flex-col justify-start items-start space-y-10">
              <div className="flex gap-3 justify-center items-center">
                <Image width={32} height={32}  src="./../../icons/React.svg" alt="" />
                <span>React JS</span>
              </div>  
              <div className="flex gap-3 justify-center items-center">
                <Image width={32} height={32}  src="./../../icons/Next.svg" alt="" />
                <span>Next JS</span>
              </div>  
              <div className="flex gap-3 justify-center items-center">
                <Image width={32} height={32}  src="./../../icons/Figma.svg" alt="" />
                <span>Figma</span>
              </div>  
              <div className="flex gap-3 justify-center items-center">
                <Image width={32} height={32}  src="./../../icons/Tailwind.svg" alt="" />
                <span>Tailwind JS</span>
              </div>  
            </div>
        </div>

        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-5 py-7">
          <span className="text-base font-light mb-10">
          Linguagens 
        </span>
        <div className="flex flex-col justify-start items-start space-y-10">
          <div className="flex gap-3 justify-center items-center">
            <Image width={32} height={32}  src="./../../icons/TypeScript.svg" alt="" />
            <span>Typescript</span>
          </div>  
          <div className="flex gap-3 justify-center items-center">
            <Image width={32} height={32}  src="./../../icons/JavaScript.svg" alt="" />
            <span>Javascript</span>
          </div>   
        </div>
        </div>

        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-5 py-7">
        <span className="text-base font-light mb-10">
         Tools 
        </span>
        <div className="flex flex-col justify-start items-start space-y-10">
          <div className="flex gap-3 justify-center items-center">
            <Image width={32} height={32}  src="./../../icons/GitHub.svg" alt="" />
            <span>Github</span>
          </div>  
        </div>
        </div>
    </div>  
  </section>
    </div>

    <Footer />

    </div>
  </>
    
  );
}
