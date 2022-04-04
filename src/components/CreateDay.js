import React, {useRef} from 'react';
import useAxios from "../hooks/useAxios";
import axios from "axios";
import {useHistory} from "react-router-dom";

function CreateDay(props) {
    const result = useAxios('http://localhost:3001/days')
    const history = useHistory()

    const add = () => {
        axios.post('http://localhost:3001/days', {
            day: result.length + 1
        }).then(res => {
            if (res.status === 201) {
                alert('success')
                history.push('/')
            }
        })
    }

    return (<div>
        <h3>현재일수 : {result.length}일</h3>
        <button onClick={add}>DAY ADD</button>
    </div>);
}

export default CreateDay;