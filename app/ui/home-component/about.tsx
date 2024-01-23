import { Message } from "iconoir-react";
import SubHead from "./sub-head";

export default function About() {
    const infos = [
        {
            id: 1, 
            about: 'I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.',
            title: 'Comunicative',
            logo: Message
        },
        {
            id: 2, 
            about: 'I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.',
            title: 'Comunicative',
            logo: Message
        },
        {
            id: 3, 
            about: 'I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.',
            title: 'Comunicative',
            logo: Message
        },
        {
            id: 4, 
            about: 'I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.',
            title: 'Comunicative',
            logo: Message
        }
    ]
    return (
        <section id="about">
        <SubHead text="why <b><i>HIRE</i></b> me?"/>
        <div className="about-container">
            {infos.map((info) => {
                const Icon = info.logo;
                return (
                <div className="about-card" key={info.id}>
                    <div className="about-p">
                        {info.about}
                    </div>
                    <div className="about-head">
                        {info.title}
                    </div>
                    <Icon className="about-logo"/>
                </div>
                );
            })}

            
        </div>
    </section>
    );
}