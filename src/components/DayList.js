import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import useAxios from "../hooks/useAxios";

function DayList(props) {
    const result = useAxios('http://localhost:3001/days')

    return (<ul className='list_day'>
        {result.map(day => (<li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>))}
    </ul>);
}

export default DayList;