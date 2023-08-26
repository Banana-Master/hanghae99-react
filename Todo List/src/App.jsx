import { useState } from 'react';
import './App.css';
import logoImg from './image/logo.jpg'
import ToDoListOverlay from './ToDoListOverlay';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '리액트 공부하기', content: '아무튼하기', complete: false },
    { id: 2, title: '심심하다', content: '잠온다', complete: false }
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const todoListAdd = () => {
    const newList = {
      id: todoList.length + 1,
      title,
      content,
      complete: false,
    }
    setTodoList([...todoList, newList]);
    setTitle('');
    setContent('');
  }

  const todoListRemove = (item) => {
    const removeList = todoList.filter((list) => list.id !== item);
    setTodoList(removeList);
  }
  const todoListComplete = (item) => {
    const completeState = todoList.find((x) => x.id === item).complete;
    console.log(completeState);
    if (!completeState) {
      todoList.map((x) => {
        if (x.id === item) {
          x.complete = true;
        }
      })
    } else {
      todoList.map((x) => {
        if (x.id === item) {
          x.complete = false;
        }
      })
    }
    setTodoList([...todoList]);
  }

  return (
    <div className='main-body'>
      <header className='main-header'>
        <div className='main-header-logo'>
          <img className='main-logo' src={logoImg} alt='logo' />
          <span>성호의 Todo List</span>
        </div>
        <span>React</span>

      </header>
      <div className='todo-list-add'>
        <div className='todo-list-add-inputs'>
          <span>제목</span><input type="text" value={title} onChange={(event) => {
            titleChangeHandler(event);
          }} />
          <span>내용</span><input type="text" value={content} onChange={(event) => {
            contentChangeHandler(event);
          }} />
        </div>
        <button onClick={() => { todoListAdd() }}>추가하기</button>
      </div>
      <div className='main-list'>
        <div className='working'>
          <p>Working.. 🕓</p>
          <div className='list-flexbox'>
            {
              todoList
                .filter((x) => x.complete === false)
                .map((item) => {
                  return (
                    <ToDoListOverlay
                      key={item.id}
                      item={item}
                      todoListRemove={() => (todoListRemove(item.id))}
                      todoListComplete={() => { todoListComplete(item.id) }}
                    >
                    </ToDoListOverlay>
                  )
                })
            }
          </div>
        </div>
        <div className='done'>
          <p>Done.. 🏆</p>
          <div className='list-flexbox'>
            {
              todoList.filter((x) => x.complete === true)
                .map((item) => {
                  return (
                    <ToDoListOverlay
                      key={item.id}
                      item={item}
                      todoListRemove={() => (todoListRemove(item.id))}
                      todoListComplete={() => { todoListComplete(item.id) }}
                    >
                    </ToDoListOverlay>
                  )
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;