import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";


function HeaderRightDivUserNot() {
    return (
        <div id="headerRightWrapper">
            <button id="upload" >
                <span>Upload</span></button>
            <button id="loginBtn">Log in</button>

            <button id="dotsMenu">
                <HiOutlineDotsVertical />
            </button>
        </div>
    )
}

export default HeaderRightDivUserNot
