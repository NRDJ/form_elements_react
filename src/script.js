class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      biography: '',
      age: '<20',
      subscribe: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, type } = event.target;
    // extract name and value attribute from element

    let value;

    switch (type) {

      case 'checkbox':

        value = event.target.checked; // for checkbox

        break;

      default:

        value = event.target.value; // for input and form elements
    }

    this.setState({

      [name]: value

    });

  }

  handleSubmit(event) {
    event.preventDefault(); // prevents default page change behavior
    const { email, password, biography, age, subscribe } = this.state;

    console.log(`form submitted\nemail: ${email}\npassword: ${password}\nbiography: ${biography}\nage: ${age}\nsubscribe: ${subscribe}`);
  }

  render() {

    const {

      email,

      password,

      biography,

      age,

      subscribe

    } = this.state;
  
    return (

      <form onSubmit={this.handleSubmit}>
         <div class="form-group">
          <label>
            <p>Email:</p>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
         </div>

       <div class="form-group">
          <label>
            <p>Password:</p>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
        </div>
        
        <div class="form-group">
          <label>
            <p>Biography:</p>
            <textarea name="biography" value={biography} onChange={this.handleChange} />
          </label>
        </div>

        <div class="form-group">
          <label>
            <p>Age:</p>
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="<20">20 or younger</option>
              <option value="21-30">21 to 30</option>
              <option value="31-40">31 to 40</option>
              <option value="41-50">41 to 50</option>
              <option value=">51">51 or older</option>
            </select>
          </label>
        </div>

        <div class="form-group">
          <label>
            Subscribe to newsletter:
            <input class="ml-2" name="subscribe" type="checkbox" checked={subscribe} onChange={this.handleChange} />
          </label>
        </div>

        <div class="form-group">
          <input type="submit" value="submit" />
        </div>

      </form>

    );
  }
}

  ReactDOM.render(
    <SignupForm/>,
    document.getElementById('root')
  )

  