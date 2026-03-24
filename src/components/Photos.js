import image1 from "@/images/photos/michel_murabito-1.webp";
import image2 from "@/images/photos/michel_murabito-2.webp";
import image3 from "@/images/photos/michel_murabito-3.webp";
import image4 from "@/images/photos/michel_murabito-4.webp";
import image5 from "@/images/photos/michel_murabito-5.webp";
import clsx from "clsx";
import Image from "next/image";

function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                            rotations[imageIndex % rotations.length],
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 18rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Photos;
