import Link from "next/link";
import { TypographyH1 } from "../typografy/typographyH1";

export default function CompanyName() {
    return <Link href={"/"}>
        <TypographyH1 className="text-xl md:text-2xl font-bold matrix-text ">
            SUKHTOR.TJ
        </TypographyH1>
    </Link>
}