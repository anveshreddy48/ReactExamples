class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'I am a beautiful person with thick healthy hair.I am beautiful. I am strong. My hair is now thick. My scalp is now growing thick silky black hair and maintaining the thickness on my scalp.'}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        console.log(`essay is: ${this.state.value}`);
        e.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value}  onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(<EssayForm/>, document.getElementById('essayForm'));