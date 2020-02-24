class Reservation extends React.Component {
    constructor(props) {
        super(props);
        // initial state
        this.state = {
            isGoing: true,
            noOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
          <form>
              <label>
                Is going:
                <input 
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
              </label>
              <br/>
              <label>
                No of Guests:
                <input
                    name="noOfGuests"
                    type="number"
                    value={this.state.noOfGuests}
                    onChange={this.handleInputChange}
                />
              </label>
          </form>  
        );
    }
}

const reservation = document.getElementById('reservation');
ReactDOM.render(<input value='2' />, reservation);
setTimeout(function() {
    ReactDOM.render(<input value={null} />, reservation);
}, 10000);

// ReactDOM.render(<Reservation/>, 
// document.getElementById('reservation'));