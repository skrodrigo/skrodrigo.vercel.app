interface CardContactProps{
    title: string;
    description: string;
    link: string;
}

export default function CardContato({title, description, link}: CardContactProps){
    return(
        <div>
            <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[300px] md:w-[600px] lg:w-[300px] px-3 py-3 space-y-2 font-semibold ">
            <span>{title}</span>
            <a href={link} target="_blank"  className='underline  text-[#2563EB]'>{description}</a>
            </div>
        </div>
    )
}