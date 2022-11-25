import React from "react";
import s from "../styles/navBar.module.css";
import A from "./A";
import Head from "next/head";

const MainContainer = ({children,keywords}) => {
    return(
        <>
            <Head>
                <meta keywords={'next.js' + keywords}></meta>
            </Head>
            <div className={s.navBar}>
                <A to={'/'} name={'Main page'}/>
                <A to={'/users'} name={'Users Page'}/>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}
export default MainContainer