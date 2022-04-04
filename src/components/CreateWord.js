import React, {useRef} from 'react';
import useAxios from "../hooks/useAxios";
import axios from "axios";
import {useHistory} from "react-router-dom";

function CreateWord(props) {
    const result = useAxios('http://localhost:3001/days')
    const history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/words', {
            id: parseInt(nextId.current.value),
            day: dayRef.current.value,
            eng: engRef.current.value,
            kor: korRef.current.value,
            isDone: false
        }).then(res => {
            console.log(res)
            if (res.status === 201) {
                alert('success')
                nextId.current++
                history.push(`/day/${dayRef.current.value}`)
            }
        })
    }

    const engRef = useRef(null)
    const korRef = useRef(null)
    const dayRef = useRef(null)
    const nextId = useRef(8)

    return (<form onSubmit={onSubmit}>
        <div className='input_area'>
            <label>ENGLISH</label>
            <input placeholder='Computer' ref={engRef}/>
        </div>
        <div className='input_area'>
            <label>KOREAN</label>
            <input placeholder='컴퓨터' ref={korRef}/>
        </div>
        <div className='input_area'>
            <label>DAY</label>
            <select ref={dayRef}>
                {result.map(day => (<option key={day.id}>{day.day}</option>))}
            </select>
        </div>
        <button>SAVE</button>
    </form>);
}

export default CreateWord;