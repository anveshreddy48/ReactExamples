function UserGreeting() {
    return React.createElement(
        "h1",
        null,
        "Welcome back!"
    );
}
function GuestGreeting() {

    return React.createElement(
        "h1",
        null,
        "Please sign up."
    );
}
function Greeting(props) {

    console.log(props.isLoggedIn);

    if (props.isLoggedIn) {
        return React.createElement(UserGreeting, null);
    } else {
        return React.createElement(GuestGreeting, null);
    }
}

// ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('like_button_container'));