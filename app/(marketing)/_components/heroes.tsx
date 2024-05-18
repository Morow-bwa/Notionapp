import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl dark:bg-[#1F1F1F]">
            <div className="flex items-center ">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400] ">
                    <Image
                    src="/men.svg"
                    fill
                    className="object-contain"
                    alt="Men"
                    />

                    <Image
                    src="/men-dark.svg"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Men"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block ">
                <Image
                    src="/note.svg"
                    fill
                    className="object-contain"
                    alt="Note"
                    />

                    <Image
                    src="/note-dark.svg"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Note"
                    />
                </div>
            </div>
        </div>
    )
}