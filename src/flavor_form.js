class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        console.log(`favorite flavor is: ${this.state.value.toUpperCase()}`);
        e.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Please pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="strawberry">Strawberry</option>
                    </select>
                </label>
                <label>
                    File upload: <input type="file" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(<FlavorForm/>, document.getElementById('flavorForm'));