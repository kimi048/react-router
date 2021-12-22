import React,{Component} from 'react';

class Home extends Component{
  constructor(props) {
    super(props)
    this.state = { name: "francis" }
    console.log("1 - constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2 - getDerivedStateFromProps");
    if (state.name==="Ron") {
      return {
        name:'Milhouse'
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log("x-shouldComponentUpdate")
    console.log(nextProps)
    console.log(nextState)
    if (nextState.name === "Steve") {
      return false
    }
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    let age = 20;
    return age;
  }

  render() {
    console.log("3 - render")
    return (
      <div onClick={() => this.setState({ name: "Ron"})}>Update Name</div>
    )
  }

  componentDidUpdate(prevProps,prevState, snapshot) {
    console.log("x - componentDidUpdate");
    console.log(prevState);
    console.log(this.state);
    console.log(snapshot);
  }

  componentDidMount() {
    console.log("4 - componentDidMount")
  }
  
  componentWillUnmount() {
    console.log("5 - componentWillUnmount")
  }
}

export default Home;