import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Word from "./Word";
import useAxios from "../hooks/useAxios";

function Day(props) {
    const {day} = useParams()
    const result = useAxios(`http://localhost:3001/words?day=${day}`)

    return (<>
        <h2>DAY {day}</h2>
        <table>
            <tbody>
            {result.map(word => (<Word word={word} key={word.id}/>))}
            </tbody>
        </table>
    </>);
}

export default Day;