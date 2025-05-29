import { Button } from "./button";
import { ShoppingCart } from "lucide-react";

export default function ToShop({left, top}:{left:string |number, top:string|number}) {
    return <Button style={{position:'relative', left:`${left}%`, top:`${top}%`}}>
                <ShoppingCart />
            </Button>
}