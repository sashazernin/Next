import React from "react";
import Link from "next/link";
import s from '../styles/link.module.css'

export default function A({to, name}) {
    return (
        <Link className={s.link} href={to}>{name}</Link>
    )
}