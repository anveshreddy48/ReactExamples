function BoilingVerdict(props) {
    if (props.centigrade >= 100) {
        return <p>The water would boil.</p>;
    } else {
        return <p>The water would not boil.</p>;
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: ''
        };
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }
    render() {
        const temperature = this.state.temperature;

        return  (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={parseFloat(temperature)} onChange={this.handleChange} />
                <BoilingVerdict centigrade={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('calculator'));