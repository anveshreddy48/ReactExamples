function UserGreeting() {
        return(
            <h1>Welcome back!</h1>
        )
}
function GuestGreeting() {

        return(
            <h1>Please sign up.</h1>
        )
}
function Greeting(props) {

console.log(props.isLoggedIn);

        if (props.isLoggedIn) {
            return <UserGreeting />;
        } else {
            return <GuestGreeting />;
        }
        
}

// ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('like_button_container'));