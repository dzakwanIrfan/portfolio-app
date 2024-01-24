import { Mail, Instagram, FacebookTag, Linkedin } from "iconoir-react";

export default function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-head">
                    Reach out to me
                </div>
                <div className="footer-p">
                    For business inquiry please send email to <a href="dzakone07@gmail.com">dzakone07@gmail.com</a>
                </div>
                <div className="footer-logo">
                    <a href="https://www.instagram.com/dzakonee/" className="contact-i" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="i" />
                    </a>
                    <a href="https://www.facebook.com/dzakwan.irfan/" className="contact-i" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FacebookTag className="i" />
                    </a>
                    <a href="https://www.linkedin.com/in/dzakwan-irfan-2015861a1/" className="contact-i" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="i" />
                    </a>                  
                </div>
            </div>
        </footer>
    );
}