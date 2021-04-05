import React, { useCallback } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"

import HeaderRightDivUserNot from "./HeaderRightDivUserNot"
import HeaderRightDivUserYes from "./HeaderRightDivUserYes"
import styles from './Header.module.scss'
import { Input, Space } from 'antd';
import { debounce } from 'lodash';

const { Search } = Input;

export default function HeaderComp({ isUserLoggedIn, onTitleInputChange, searchValue }) {

    // const debounce = (func) => {
    //     let timer ;
    //     return function(...args){
    //         const context = this;
    //         if (timer){
    //             clearTimeout(timer)
    //         }
    //         timer = setTimeout(()=>{
    //             timer = null;
    //             func.apply(context,...args)
    //         },1000)
    //     }
    // }

    // const optimizeVersion = debounce(inputTittleChange)

    const deb = useCallback(
        debounce((text) => onTitleInputChange(text), 1000)
        , [])

    const handleText = (text) => {
        deb(text)
    }

    return (
        <div className={styles.header}>
            <span>
                <Link to="/" >
                    <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg" alt="sign" />
                    <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg" alt="sign" />
                </Link>
            </span>
            <form onSubmit={(ev) => { ev.preventDefault() }}>
                <Space direction="vertical">
                    <Search className={styles.searchInputContainer}
                        id={styles.searchInput}
                        placeholder="Search accounts"
                        onChange={(e) => handleText(e.target.value)}
                        allowClear
                        bordered={false}
                    />
                </Space>
            </form>
            {isUserLoggedIn ? <HeaderRightDivUserYes /> : <HeaderRightDivUserNot />}
        </div>


    )
}