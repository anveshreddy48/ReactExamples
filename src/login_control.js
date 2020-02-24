// function UserGreeting() {
//     return(
//         <h1>Welcome back!</h1>
//     )
// }
// function GuestGreeting() {

//     return(
//         <h1>Please sign up.</h1>
//     )
// }
// function Greeting(props) {

// console.log(props.isLoggedIn);

//     if (props.isLoggedIn) {
//         return <UserGreeting />;
//     } else {
//         return <GuestGreeting />;
//     }
    
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>Login</button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>Logout</button>
//     )
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.loggedIn = props.isLoggedIn;
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);

//         this.state = {
//             isLoggedIn: false
//         }
//     }

//     handleLoginClick() {
//        this.setState({
//           isLoggedIn: true
//        })
//     }

//     handleLogoutClick() {
//         this.setState({
//            isLoggedIn: false
//         })
//      }
//     // render() {
//     //     const isLoggedIn = this.state.isLoggedIn;
//     //     let button;

//     //     if(!isLoggedIn) {
//     //         button = <LoginButton onClick={this.handleLoginClick}/>;   
//     //     } else {
//     //         button = <LogoutButton onClick={this.handleLogoutClick}/>;
//     //     }

//     //     return(
//     //         <div>
//     //             {isLoggedIn ? 'Babai': (<LoginButton onClick={this.handleLoginClick} />)}
//     //         </div>
//     //         <div>
//     //             The user is <b>{isLoggedIn ? 'currently': 'not'}</b> logged in.
//     //             <Greeting isLoggedIn={isLoggedIn} />
              
//     //         </div>
            
//     //     );
//     // }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//             <div>
//                 {isLoggedIn ? (
//                     <LogoutButton onClick={this.handleLogoutClick}/>
//                 ) : (<LoginButton onClick={this.handleLoginClick}/>)}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<LoginControl isLoggedIn={true} />, document.getElementById('formatted_name'));
// // ReactDOM.render(<LoginControl isLoggedIn={true} />, document.getElementById('formatted_name'));