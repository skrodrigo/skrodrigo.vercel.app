import Link from "next/link";

interface CardXpProps{
    title: string;
    description: string;
    date: string;
    url?: string;
}

export default function CardXp({title, description, date, url}: CardXpProps){
    return(
        <div className="flex justify-between items-center border-2 mb-14 border-[#232323] rounded-3xl 
        w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1216px] px-7 py-4 space-y-2 font-semibold">
            <div className="flex flex-col items-start justify-start  ">
                <span>{title}</span>
                <span className='text-[#2563EB]'>{description}</span>
                <span className='text-[#6F6F6F] font-medium'>{date}</span>
            </div>
            {url && (
                <div>
                    <Link href={url} className="underline text-emerald-500" target="_blank" rel="noopener noreferrer">Certificado</Link>
                </div>
            )}
        </div>
    )
}