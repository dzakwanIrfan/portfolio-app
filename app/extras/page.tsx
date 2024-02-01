import Link from "next/link";
import { GridXmark, Clock } from "iconoir-react";
import "./style.css";
import "./style-responsive.css";

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
                    <div className="extra-1">
                        <GridXmark 
                            width={48}
                            height={48}
                            className="i"
                        />
                    </div>
                    <div className="extra-2">Tic-Tac-Toe</div>
                </Link>
                <Link
                    href='/extras/stopwatch'
                    className='extra'
                >
                    <div className="extra-1">
                        <Clock 
                            width={48}
                            height={48}
                            className="i"
                        />
                    </div>
                    <div className="extra-2">Stopwatch</div>
                </Link>
            </div>
        </section>
    );
}