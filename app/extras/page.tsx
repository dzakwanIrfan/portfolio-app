import "./style.css";
import "./style-responsive.css";
import Link from "next/link";

export default function Estras() {
    return(
        <section id="extras">
            <div className="bg-head">
                <div className="head">the <b><i>extras</i></b></div>
            </div>
            <div className="extras">
                <Link
                    href='/extras/tic-tac-toe'
                    className='extra'
                >
                    <div className="extra-1"><i className="iconoir-grid-xmark"></i></div>
                    <div className="extra-2">Tic-Tac-Toe</div>
                </Link>
            </div>
        </section>
    );
}