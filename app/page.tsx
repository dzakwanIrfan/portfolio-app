import { Instagram, FacebookTag, Linkedin, Globe, Download, Message } from "iconoir-react";
import Link from "next/link";
import Main from "./ui/home-component/home";
import Project from "./ui/home-component/project";

export default function Home() {
  return (
    <>
        <Main />
        <Project />

    <section id="about">
        <div className="bg-head">
            <div className="head">why <b><i>HIRE</i></b> me?</div>
        </div>
        <div className="about-container">
            <div className="about-card">
                <div className="about-p">
                    I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.
                </div>
                <div className="about-head">
                    Comunicative
                </div>
                <Message className="about-logo"/>
            </div>

            <div className="about-card">
                <div className="about-p">
                    I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.
                </div>
                <div className="about-head">
                    Comunicative
                </div>
                <Message className="about-logo"/>
            </div>

            <div className="about-card">
                <div className="about-p">
                    I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.
                </div>
                <div className="about-head">
                    Comunicative
                </div>
                <Message className="about-logo"/>
            </div>

            <div className="about-card">
                <div className="about-p">
                    I am an excellent communicator who values strong client relationships. I listen actively and provide clear information to address their needs. I enjoy collaboration and am committed to exceptional customer service.
                </div>
                <div className="about-head">
                    Comunicative
                </div>
                <Message className="about-logo"/>
            </div>
        </div>
    </section>

    <section id="contact">
        <div className="bg-head">
            <div className="head">let&apos;s <b><i>WORK</i></b> together!</div>
        </div>
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
    </>
  );
}
