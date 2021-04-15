import React, { Component } from 'react'

class Cell extends Component {
    
    state = {
        color : this.props.val
    }
    
    handleClick = () =>{
        this.setState = '#333'
        //return style = '#333'
    }

    render() {
        return (
            <div className='cell' style={{backgroundColor: this.state.color }} onClick={this.handleClick}>
                
            </div>
        )
    }
}

export default Cell