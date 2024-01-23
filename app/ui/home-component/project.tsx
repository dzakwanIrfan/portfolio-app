import Image from "next/image";
import SubHead from "./sub-head";
import Project1 from "@/public/project1.jpg"
import Project2 from "@/public/project2.jpg"
import { Globe, Download } from "iconoir-react";
import Link from "next/link";

export default function Project() {
    const projects = [
        { id: 1, name: 'Bitcoin Mining Chamber Website', src: Project1, ProjectHref: '#', DownloadHref: '#' },
        { id: 2, name: 'Milko Store Website', src: Project2, ProjectHref: '#', DownloadHref: '#' }
    ]
    return (
        <section id="project">
        <SubHead text={"<b><i>project</i></b> selected"}/>
        <div className="project-container">
            {projects.map((project) => (
                <div className="project" key={project.id}>
                    <div className="project-tittle">{project.name}</div>
                    <Link
                        href={project.ProjectHref}
                    >
                        <Image 
                            src={project.src}
                            alt={project.name}
                            className="img"
                        />
                    </Link>
                    <div className="project-link">
                        <a href=""><div className="project-icon left">
                            <Globe 
                                className="i"
                            />
                            <span>Go to Website</span>
                        </div></a>
                        <Link
                            href={project.DownloadHref}
                        >
                            <div className="project-icon right">
                                <Download
                                    className="i"
                                />
                                <span>Download Project</span>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
}