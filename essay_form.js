var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EssayForm = function (_React$Component) {
    _inherits(EssayForm, _React$Component);

    function EssayForm(props) {
        _classCallCheck(this, EssayForm);

        var _this = _possibleConstructorReturn(this, (EssayForm.__proto__ || Object.getPrototypeOf(EssayForm)).call(this, props));

        _this.state = { value: 'I am a beautiful person with thick healthy hair.I am beautiful. I am strong. My hair is now thick. My scalp is now growing thick silky black hair and maintaining the thickness on my scalp.' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);

        return _this;
    }

    _createClass(EssayForm, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            console.log("essay is: " + this.state.value);
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
                    "Essay:",
                    React.createElement("textarea", { value: this.state.value, onChange: this.handleChange })
                ),
                React.createElement("input", { type: "submit", value: "Submit" })
            );
        }
    }]);

    return EssayForm;
}(React.Component);

ReactDOM.render(React.createElement(EssayForm, null), document.getElementById('essayForm'));