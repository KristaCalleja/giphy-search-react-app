import React, { Component } from 'react';

class Gif extends Component {
    render(){
        const src = `https://media2.giphy.com/media/${ this.props.id } &rid=200.gif`;
        return(
            <img src={src} alt="gif" className="gif"/>
        );
    }
}

export default Gif;