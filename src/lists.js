// const listItems = names.map((name) => <li>{name}</li>);
// console.log('########List Items', listItems);
function ListItem(props) {
    return <li>{props.value}</li>;
}
function List(props) {
    const numbers = props.numbers;
    // const names = props.names;
    // const todoList = props.todoList;
    // const list = names.map((name) => <li key={name.toString()}>{name}</li>);
    // const todoItems = todoList.map((todo, index) => <li>{todo}</li> );
    // console.log('####3what are items', list);
    return (
        <ul>{numbers.map((number)=>
            <ListItem key={number.toString()} value={number} />
            // <li key={number.toString()}>Ex:{number}</li>
        )}</ul>
        // <ul>{list}</ul>
        // <ul>{todoItems}</ul>
    );
}
const numbers = [1, 2, 3, 4, 5];
const names = ['anv', 'red', 'pen', 'success'];
const todoList = ['Read', 'Finish', 'Sleep early'];

ReactDOM.render(<List numbers={numbers} names={names} todoList={todoList} />, document.getElementById('lists'));