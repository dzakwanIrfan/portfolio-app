import { Mail, Instagram, FacebookTag, Linkedin, Globe, Download, Message } from "iconoir-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            <img src="/me.png" alt="Dzakwan Irfan Ramdhani"></img>
        </div>
    </section>

    <section id="project">
        <div className="bg-head">
            <div className="head"><b><i>project</i></b> selected</div>
        </div>
        <div className="project-container">
            <div className="project">
                <div className="project-tittle">Bitcoin Mining Chamber Website</div>
                <a href="#">
                    <img src="/project1.jpg" alt="project1"></img>
                </a>
                <div className="project-link">
                    <a href=""><div className="project-icon left">
                        <Globe 
                            className="i"
                        />
                        <span>Go to Website</span>
                    </div></a>
                    <a href=""><div className="project-icon right">
                        <Download
                            className="i"
                        />
                        <span>Download Project</span>
                    </div></a>
                </div>
            </div>

            <div className="project">
                <div className="project-tittle">Milko Store Website</div>
                <img src="/project2.jpg" alt=""></img>
                <div className="project-link">
                    <a href=""><div className="project-icon left">
                        <Globe 
                            className="i"
                        />
                        <span>Go to Website</span>
                    </div></a>
                    <a href=""><div className="project-icon right">
                        <Download   
                            className="i"
                        />
                        <span>Download Project</span>
                    </div></a>
                </div>
            </div>
        </div>
    </section>

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
