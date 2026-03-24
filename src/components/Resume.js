import profile from "@/data/profile.json";
import {BriefcaseIcon} from "@/lib/utils";
import Role from "@/components/Role";

import mia from "@/images/logos/mia-platform.svg";
import fractal from "@/images/logos/fractal-cloud.svg";
import cncf from "@/images/logos/cncf.svg";

const logos = {
    "fractal-cloud": fractal,
    "mia-platform": mia,
    "cncf": cncf
}

function Resume() {
    const resume = profile.resume.map(d => {
        return {
            ...d,
            logo: logos[d.logo] ? logos[d.logo] : ''
        }
    })

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role}/>
                ))}
            </ol>
            {/*
            <Button href="#" variant="secondary" className="group mt-6 w-full">
                Download CV
                <ArrowDownIcon
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
            </Button>
            */}
        </div>
    )
}

export default Resume;