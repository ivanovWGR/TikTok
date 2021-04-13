import { useState } from "react"
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"


// Rename to Modal Component
export default function LoginPage({destroyModal}) {    
    const [isLoginPageVisible, setIsLoginPageVisible] = useState(true);    
    function bringNextPage() {
        console.log("click");
        setIsLoginPageVisible(!isLoginPageVisible)
    }    

    if(isLoginPageVisible) {
        return <LoginModal onClick={bringNextPage} destroyModal={destroyModal} />
    }
    return (
        <RegisterModal onClick={bringNextPage} destroyModal={destroyModal} />
    )

}


