// // Function to define component
// const Hello = (props) => {
//   return <div>Hello, {props.name}</div>;
// }

// Static data is carried by props
// Mutable data is carried by the state


// When building class Component you use this.props
class Hello extends Component{
    constructor(props){
      super(props);
      this.state = {
        clicked: true,
        counter: 0
      };
    }
    // Event requires arrow function callbacks in classes
    handleClick = () => {
      // Change the state of component and re-triggers the updated UI
      // console.log('clicked');
      this.setState({
        clicked: !this.state.clicked,
        counter: this.state.counter+1
      });
    }
    render(){
      // Build and return html, depending on the state
      return (
        <div className={this.state.clicked ? 'clicked' : null}
          onClick={this.handleClick}>
          Hello {this.props.name} {this.state.counter}
        </div>
      )
    }
  }