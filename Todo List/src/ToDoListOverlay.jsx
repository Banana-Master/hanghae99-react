const ToDoListOverlay = ({ item, todoListRemove, todoListComplete }) => {
    return (
      <div className='todo-list-overlay' key={item.id}>
        <p>{item.title}</p>
        <p>{item.content}</p>
        <div className='overlay-button'>
          <button className='overlay-remove-button' onClick={() => { todoListRemove(item.id) }}>삭제하기</button>
          <button className='overlay-done-button' onClick={() => { todoListComplete(item.id) }}>{item.complete ? '취소' : '완료'}</button>
        </div>
      </div>
    );
  }

  export default ToDoListOverlay;