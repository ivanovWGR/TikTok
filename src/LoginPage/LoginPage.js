import { useState } from "react"




import LoginPagePartOne from "./LoginPagePartOne"
import LoginPageTwo from "./LoginPageTwo"



export default function LoginPage() {
    const [showNextPage, callNextPage] = useState(false);

    function bringNextPage() {
        console.log("click");
        callNextPage(!showNextPage)
    }
    return (
        showNextPage ? <LoginPagePartOne onClick={bringNextPage} /> : <LoginPageTwo onClick={bringNextPage} />
    )

}