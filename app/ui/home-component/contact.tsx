import Link from "next/link";
import { Instagram, FacebookTag, Linkedin } from "iconoir-react";
import SubHead from "./sub-head";

export default function Contact() {

    const socmeds = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/dzakonee/',
            logo: Instagram
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/dzakwan.irfan/',
            logo: FacebookTag
        },
        {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/dzakwan-irfan-2015861a1/',
            logo: Linkedin
        },
    ]

    return (
        <section id="contact">
            <SubHead text="let&apos;s <b><i>WORK</i></b> together!" />
            <div className="contact-container">
                <div className="email">
                    <p className="email-p">Please contact me by:</p>
                    <a href="" className="contact-link">
                        <i className="iconoir-mail"></i>
                        <span>Send me an Email</span>
                    </a>
                </div>
                <div className="socmed">
                    <p className="socmed-p">Or just check my profile:</p>
                    <div className="socmed-logo">
                        {socmeds.map((socmed) => {
                            const Icon = socmed.logo;
                            return(
                                <Link
                                    href={socmed.href}
                                    target="_blank"
                                    key={socmed.name}
                                >
                                    <Icon 
                                        className="contact-i"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="extra">
                    <p className="extra-p">See my other projects:</p>
                    <Link
                        href="/extras"
                        className="extra-container"
                    >
                        <span>EXTRAS</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}