'use client'

import React from "react";
import styles from "./title.module.css";
import CherryFlow from "../cherryflow/cherryflow";

type Props = {
    text: string;
};

export default function Title({ text }: Props) {

    return (
        <CherryFlow>
            <h1 className={styles.titleText}>{text}</h1>
        </CherryFlow>
    )
}