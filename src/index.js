import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const todos = {

  title: 'Список дел',
  message: [
    {id: 1, text: 'Купить бананы', favorite: false },
    {id: 2, text: 'Продать квартиру', favorite: false },
    {id: 5, text: 'Выучить уроки по JavaScript', favorite: true }
  ]
}

function reducer(state = todos, action) {
  switch(action.type) {
    case 'setDelete':
      return {
        ...state,
        message: state.message.filter(message => message.id !== action.payload)
      }

    case 'tsShow':
      return {
        ...state,
        message: state.message.map((item) => {
          if(item.id === action.payload) {
            return {
              ...item,
              favorite: !item.favorite
            }
          }

          return item;
        })
      }

    default:
      return state;

  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
