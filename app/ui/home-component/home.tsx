import { Mail, Instagram, FacebookTag, Linkedin } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import Dzakwan from "@/public/me.png";

export default function Main() {
    return (
        <section id="home">
        <div className="home-left">
            <div className="head1">Hello, i&apos;m Dzakwan.</div>
            <div className="head2">Informatics Student</div>
            <div className="home-p">at Jenderal Soedirman University. I have a deep interest in web development, mobile app development, and design. Committed to honing my skills in these fields, I am passionate about creating products that are both visually appealing and functional. Let&apos;s work together and bring your vision to life!
            </div>
            <div className="home-contact">
                <Link
                    href="mailto:dzakoneo7@gmail.com?subject=Hello%20there&body=I%20hope%20this%20email%20finds%20you%20well."
                    className="email"
                >
                    <Mail 
                        className="i"
                    />
                    <span>Email Me</span>
                </Link>
                <Link
                    href="https://www.instagram.com/dzakonee/"
                    target="_blank"
                >
                    <Instagram 
                        className="contact-i"
                    />
                </Link>
                <Link
                    href="https://www.facebook.com/dzakwan.irfan/"
                    target="_blank"
                >
                    <FacebookTag 
                        className="contact-i"
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/dzakwan-irfan-2015861a1/"
                    target="_blank"
                >
                    <Linkedin 
                        className="contact-i"
                    />
                </Link>
            </div>
            
        </div>
        <div className="home-right">
            <div className="ornament">
                <div className="garis-1 garis"></div>
                <div className="garis-2 garis"></div>
                <div className="garis-3 garis"></div>
                <div className="garis-4 garis"></div>
                <div className="garis-5 garis"></div>
            </div>
            <div className="shade"></div>
            <Image 
                src={Dzakwan}
                alt="dzakwan irfan ramdhani"
            />
        </div>
    </section>
    );
}