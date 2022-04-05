import React, { useState } from "react";
import axios from "axios";

function Word(props) {
  const [show, setShow] = useState(false);
  const [isDone, setIsDone] = useState(props.word.isDone);
  const [word, setWord] = useState(props.word);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleIsDone = () => {
    axios
      .put(`http://localhost:3001/words/${props.word.id}`, {
        ...props.word,
        isDone: !isDone,
      })
      .then((res) => {
        if (res.statusText === "OK") setIsDone(!isDone);
      });
  };

  const del = () => {
    if (window.confirm("Do you want delete?")) {
      axios
        .delete(`http://localhost:3001/words/${props.word.id}`)
        .then((res) => {
          if (res.statusText === "OK") {
            setWord({ ...props.word, id: 0 });
          }
        });
    }
  };

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleIsDone} />
      </td>
      <td>{props.word.eng}</td>
      <td>{show && props.word.kor}</td>
      <td>
        <button onClick={toggleShow}>{show ? "HIDE" : "SHOW"}</button>
        <button className="btn_del" onClick={del}>
          DELETE
        </button>
      </td>
    </tr>
  );
}

export default Word;
