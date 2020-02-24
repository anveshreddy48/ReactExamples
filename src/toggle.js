// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             isToggleOn: false
//         }
//         // This binding is necessary to make 'this' work in the callback
//         // this.handleEvent = this.handleEvent.bind(this);

        
//     }
//     // handleEvent() {
//     //     this.setState(state => ({ 
//     //         isToggleOn: !state.isToggleOn
//     //     }));
//     // }
//     handleEvent()  {
//         console.log('this is: ', this);
//         this.setState(state => ({ 
//             isToggleOn: !state.isToggleOn
//         }));   
//     }
//     render() {
//         return(
//             <button onClick={() => this.handleEvent()}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//             <button onClick={(e) => this.deleteRow(id, e)}>Delete</button>
//             <button onClick={this.deleteRow.bind(this,id)}>Delete</button>
//         )
//     }  
// }
// ReactDOM.render(<Toggle />, document.getElementById('root'));