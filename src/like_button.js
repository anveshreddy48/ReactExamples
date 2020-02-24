// // 'use strict';
// // const LikeButton = () => {
// //     const [liked, setLiked] = React.useState(false);

// //     if (liked) {
// //       return 'You liked this.';
// //     }

// //     return (
// //     <button onClick={() => setLiked(!liked) }>
// //         Like
// //       </button>
// //     );
// //   }

// // let domContainer = document.querySelector('#root');
// // ReactDOM.render(<LikeButton />, domContainer);

// // 'use strict';
// // const LikeButton1 = () => {
// //   const [like, setLike] = React.useState(false);
// //   const [message, setMessage] = React.useState('Click to like!')
// //   console.log(`like ${like}, setLike: ${setLike}, message: ${message}, setMessg: ${setMessage}`);
// //   const button = <button onClick={() => handleClick()}>{like ? 'Unlike' : 'Like'}</button>;

// //   const handleClick = () => {
// //     setLike(!like);
// //     setMessage(!like ? 'You liked it!!' : 'You unliked it :(');
// //   };
// //   return (
// //     <div>
// //       {button}
// //       <p>
// //         {message}
// //       </p>
// //     </div>
// //   );
// // }

// // const domContainer1 = document.querySelector('#like_button_container');
// // ReactDOM.render(React.createElement(LikeButton1), domContainer1);
// const name = 'Anvesh Reddy';
// // one curly braces {} for embedding expressions...
// const element = <h1>Hello, {name}</h1>;

// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//   firstName: 'Success',
//   lastName: 'Hardwork'
// };

// const element2 = (
//   <h1>
//     Hello, {this.formatName(user)}! 
//   </h1>
// );


// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('like_button_container')
// );


// ReactDOM.render(
//   element2,
//   document.getElementById('formatted_name')
// );

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Guest!</h1>;
// }
// // Specifying Attrs with JSX
// // Use quotes for string values.
// const element3 = <div tabIndex="0"></div>;
// // Use curly braces {} to embed JS expresssions in an attribute.
// const element4 = <img src={user.avatarUrl}></img>;

// // If  a tag is empty
// const element5 = <img src={user.avatarUrl} />;
// // with children
// const element6 = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );
  
// // safer to embed user input in JSX
// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element7 = <h1>{title}</h1>;

// const element8 = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// )

// // JSX compiled code
// // both are equal
// const element9 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// // React.createElement() creates an obj like this.
// // These objects are called react elements...
// const element10 = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// Rendering Elements
// const element11 = <h1>Hello, world</h1>;
// const element12 = <h1> Consistency wins the race</h1>;
// ReactDOM.render(element11, document.getElementById('root'));
// ReactDOM.render(element12, document.getElementById('root'));

// Updating the Rendered Elements
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleDateString()}.</h2>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);


// Components and Props
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
// // const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo userInfo={props.comment.author} />
//       <div className="Comment-text">
//         {props.comment.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.comment.date)}
//       </div>
//     </div>
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar 
//           user={props.userInfo}
//         />
//       <div className="UserInfo-name">
//         {props.userInfo.name}
//       </div>
//     </div>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//           src={props.user.avatarUrl}
//           alt={props.user.name}
//         />
//   );
// }
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// // pure
// function sum(a, b) {
//   return a+b;
// }
// // impure as it changes its own input
// function withdraw(acc, amount) {
//   account.total -= amount;
// }

// const comment = {
//   date: new Date(),
//   text: 'I am enjoying learning React!',
//   author: {
//     name: 'Kitty', 
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   // <Comment
//   //   date={comment.date}
//   //   text={comment.text}
//   //   author={comment.author}
//   // />,
//   <Comment
//     comment = {comment}
//   />,
//   document.getElementById('root')
// );


// Updating the Rendered Elements
// function tick() {
//   console.log('called');
//   ReactDOM.render(
//     <Clock />, 
//     document.getElementById('root')
//   );
// }


// setInterval(tick, 1000);


// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleDateString()}.</h2>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   console.log('called');
 
// }

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(1995, 11, 17)  };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state, props) => {
      return {date: new Date() }
    });

    // this.setState((state, props) => {
    //   counter: state.counter + props.increment
    // })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// );

