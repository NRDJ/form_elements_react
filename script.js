var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignupForm = function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  function SignupForm(props) {
    _classCallCheck(this, SignupForm);

    var _this = _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      biography: '',
      age: '<20',
      subscribe: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(SignupForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          type = _event$target.type;
      // extract name and value attribute from element

      var value = void 0;

      switch (type) {

        case 'checkbox':

          value = event.target.checked; // for checkbox

          break;

        default:

          value = event.target.value; // for input and form elements
      }

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault(); // prevents default page change behavior
      var _state = this.state,
          email = _state.email,
          password = _state.password,
          biography = _state.biography,
          age = _state.age,
          subscribe = _state.subscribe;


      console.log('form submitted\nemail: ' + email + '\npassword: ' + password + '\nbiography: ' + biography + '\nage: ' + age + '\nsubscribe: ' + subscribe);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          email = _state2.email,
          password = _state2.password,
          biography = _state2.biography,
          age = _state2.age,
          subscribe = _state2.subscribe;


      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'div',
          { 'class': 'form-group' },
          React.createElement(
            'label',
            null,
            React.createElement(
              'p',
              null,
              'Email:'
            ),
            React.createElement('input', { type: 'email', name: 'email', value: email, onChange: this.handleChange })
          )
        ),
        React.createElement(
          'div',
          { 'class': 'form-group' },
          React.createElement(
            'label',
            null,
            React.createElement(
              'p',
              null,
              'Password:'
            ),
            React.createElement('input', { type: 'password', name: 'password', value: password, onChange: this.handleChange })
          )
        ),
        React.createElement(
          'div',
          { 'class': 'form-group' },
          React.createElement(
            'label',
            null,
            React.createElement(
              'p',
              null,
              'Biography:'
            ),
            React.createElement('textarea', { name: 'biography', value: biography, onChange: this.handleChange })
          )
        ),
        React.createElement(
          'div',
          { 'class': 'form-group' },
          React.createElement(
            'label',
            null,
            React.createElement(
              'p',
              null,
              'Age:'
            ),
            React.createElement(
              'select',
              { name: 'age', value: age, onChange: this.handleChange },
              React.createElement(
                'option',
                { value: '<20' },
                '20 or younger'
              ),
              React.createElement(
                'option',
                { value: '21-30' },
                '21 to 30'
              ),
              React.createElement(
                'option',
                { value: '31-40' },
                '31 to 40'
              ),
              React.createElement(
                'option',
                { value: '41-50' },
                '41 to 50'
              ),
              React.createElement(
                'option',
                { value: '>51' },
                '51 or older'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { 'class': 'form-group' },
          React.createElement(
            'label',
            null,
            'Subscribe to newsletter:',
            React.createElement('input', { 'class': 'ml-2', name: 'subscribe', type: 'checkbox', checked: subscribe, onChange: this.handleChange })
          )
        ),
        React.createElement(
          'div',
          { 'class': 'form-group' },
          React.createElement('input', { type: 'submit', value: 'submit' })
        )
      );
    }
  }]);

  return SignupForm;
}(React.Component);

ReactDOM.render(React.createElement(SignupForm, null), document.getElementById('root'));