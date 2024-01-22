import Image from "next/image";
import Link from "next/link";

export default function DzakwanLogo(){
    return(
        <Link
            href="/"
        >
            <div className="logo">
                <Image
                    src="/logo.png"
                    width={50}
                    height={50}
                    alt="Dzakwan Irfan Ramdhani"
                />
                <div className="logo-name">Dzakwan Irfan Ramdhani</div>
            </div>
        </Link>
    );
}