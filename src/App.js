import React, { useRef } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const title = useSelector(state => state.title);
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch({type: 'setDelete', payload: id});
  }

  const toggleStar = (id) => {
    dispatch({type: 'tsShow', payload: id});
  }


  return (
    <div className="app">
      <div className="header">
        {title}
      </div>
      <div className="input">
        <input type="text" placeholder="Введите текст.." />
        <button className="">
          Добавить
        </button>
      </div>
        <div className="main">
          {message.map((t) => {
            return (
              <div className={`content ${t.favorite ? 'selected': ''}`}>
                <div className="star" onClick={() => toggleStar(t.id)}>
                  <span>⭑</span>
                </div>
                <div className="text">
                  {t.text}
                </div>
                <button className="btn" onClick={() => remove(t.id)}>
                  X
                </button>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;