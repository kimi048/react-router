import React, { Component } from 'react';

class Conditional extends Component {
  // console.log(props);
  state = {
    loading:true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading:false})
    },500)
  }

  render() {
    
    if (this.state.loading) {
      return(<div>loading ...</div>)
    } else {
      return(<div>loading finished</div>)
    }
    
  }
}

export default Conditional;