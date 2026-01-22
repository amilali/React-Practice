import { Component } from "react";

class Headers extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '2px'
            }}>
                {this.props.children}
            </div>
        )
    }
}


export default Headers;