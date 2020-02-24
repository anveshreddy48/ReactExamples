var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlavorForm = function (_React$Component) {
    _inherits(FlavorForm, _React$Component);

    function FlavorForm(props) {
        _classCallCheck(this, FlavorForm);

        var _this = _possibleConstructorReturn(this, (FlavorForm.__proto__ || Object.getPrototypeOf(FlavorForm)).call(this, props));

        _this.state = { value: 'coconut' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(FlavorForm, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            console.log("favorite flavor is: " + this.state.value.toUpperCase());
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement(
                    "label",
                    null,
                    "Please pick your favorite flavor:",
                    React.createElement(
                        "select",
                        { value: this.state.value, onChange: this.handleChange },
                        React.createElement(
                            "option",
                            { value: "grapefruit" },
                            "Grapefruit"
                        ),
                        React.createElement(
                            "option",
                            { value: "lime" },
                            "Lime"
                        ),
                        React.createElement(
                            "option",
                            { value: "coconut" },
                            "Coconut"
                        ),
                        React.createElement(
                            "option",
                            { value: "strawberry" },
                            "Strawberry"
                        )
                    )
                ),
                React.createElement(
                    "label",
                    null,
                    "File upload: ",
                    React.createElement("input", { type: "file" })
                ),
                React.createElement("input", { type: "submit", value: "Submit" })
            );
        }
    }]);

    return FlavorForm;
}(React.Component);

ReactDOM.render(React.createElement(FlavorForm, null), document.getElementById('flavorForm'));