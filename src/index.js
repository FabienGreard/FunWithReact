import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// material-ui import
import theme from './style/theme';
import Button from 'material-ui/Button';
import { MuiThemeProvider } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors';

/*class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}*/

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lasers : true};
  }

  activateLasers = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      lasers: !prevState.lasers
    }));
  }

  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <div>
          <Button raised color="primary" onClick={this.activateLasers}>
          {this.state.lasers ? 'ON' : 'OFF'}
          </Button>
        </div>
      </MuiThemeProvider>
    )
  }
}*/

/*const Greetings = ({isLoggedIn}) => (
  isLoggedIn ? <UserGreeting /> : <GuestGreeting />
);

const UserGreeting = ({}) => (
   <Typography type="title" gutterBottom>
     Welcome back!
   </Typography>
);


const GuestGreeting = ({}) => (
  <Typography type="title" gutterBottom>
    Please sign up.
  </Typography>
);

const LoginButton = ({onClick}) => (
  <Button raised  onClick={onClick} color="primary">Login</Button>
);

const Logout = ({onClick}) => (
  <Button raised  onClick={onClick} color="accent">Logout</Button>
);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLogoutClick = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn : false
    });
  }

  handleLoginClick = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn : true
    });
  }

  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <Greetings isLoggedIn={this.state.isLoggedIn}/>
          {this.state.isLoggedIn ? <Logout onClick={this.handleLogoutClick}/> : <LoginButton onClick={this.handleLoginClick} />}
      </MuiThemeProvider>
    )
  }
}*/

const BoilingVerdict = ({celsius}) => (
  <p>The water would {celsius < 100 && "not"} boil.</p>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: '0', scale: 'c'};
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c', temperature
    });
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f', temperature
    });
  }

  toCelsius = (c) => {
    return((parseFloat(c) * 9 / 5) + 32).toString();
  }

  toFahrenheit = (f) => {
    return((parseFloat(f) - 32) * 5 / 9).toString();
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const celsius = scale === 'f' ? this.toCelsius(temperature) : temperature;

    const fahrenheit = scale === 'c' ? this.toFahrenheit(temperature) : temperature;
    return(
      <div>
        <TemperatureInput scale="c" temperature={celsius}
        onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit}
        onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={celsius}/>
      </div>
    )
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]};       </legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

const element = <App/>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

registerServiceWorker();
