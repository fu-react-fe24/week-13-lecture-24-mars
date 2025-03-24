function TodoList() {
    const todoList = ['Köpa kaffe', 'Mata katten', 'Äta glass', 'Duscha katten'];

    return (
        <ul>
            {
                todoList.map(todo => {
                    return <li>{todo}</li>
                })
            }
        </ul>
    )
}

export default TodoList;