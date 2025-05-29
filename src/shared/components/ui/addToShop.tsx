import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";
import { TypographyH1 } from "../typografy/typographyH1";

export default function ToShop({left, top}:{left:string |number, top:string|number}) {
    return <Button style={{position:'relative', left:`${left}%`, top:`${top}%`}}>
                <ShoppingCart />
            </Button>
}