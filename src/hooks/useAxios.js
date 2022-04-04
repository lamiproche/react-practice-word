import React, {useEffect, useState} from 'react';
import axios from "axios";

function UseAxios(url) {
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get(url).then(data => setState(data.data))
    }, [])

    return state
}

export default UseAxios;