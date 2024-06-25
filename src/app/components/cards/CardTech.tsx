import Image from "next/image";

interface CardATechProps {
  title: string;
  tech: { 
    name: string; 
    svg: string 
  }[];
}

export default function CardTech({ title, tech }: CardATechProps) {
  return (
    <div>
      <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-5 py-7">
        <span className="text-base font-light mb-10">
          {title}
        </span>
        <div className="flex flex-col justify-start items-start space-y-10">
          {tech.map((item, index) => (
            <div key={index} className="flex gap-3 justify-center items-center">
              <Image width={32} height={32} src={item.svg} alt="" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

