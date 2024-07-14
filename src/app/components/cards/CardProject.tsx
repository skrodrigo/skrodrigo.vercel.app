import Link from "next/link";

interface CardProjectProps {
  title: string;
  description: string;
  techs: string;
  links: {
    name: string;
    url: string;
  }[];
}

const CardProject = ({ title, description, techs, links }: CardProjectProps) => {
  return (
    <div>
      <div className="md:flex md:flex-row flex-col items-center justify-between border-2 mt-14 px-7 py-4 mx-auto border-[#232323] rounded-3xl w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1216px] font-semibold">
        <div className="flex flex-col items-start justify-start space-y-2">
          <span>{title}</span>
          <span className='text-[#2563EB] max-w-lg'>{description}</span>
          <span className='text-[#6F6F6F] font-medium'>{techs}</span>
        </div>

        <div className="text-emerald-500 space-x-4 underline mt-3 md:mt-0">
          {links.map((link, index) => (
            <Link key={index} href={link.url} target="_blank">{link.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
