import React from 'react';

class UserClass extends React.Component{
     constructor(props){
        super(props)
        this.state={
         count:0,
         count2:2,
        }
     }
     componentDidMount(){
      console.log(this.props.name+"Child Component Did Mount")
     }
    render(){
       const{count,count2}=this.state;
        return <div className="user-card">
           <h1> {this.props.name}</h1>
           <h3>{count}<button onClick={()=>this.setState({
            count:this.state.count+1
           })}>Count Increase</button></h3>
           <h3>{count2}<button onClick={()=>this.setState({
            count2:this.state.count2-1
           })}>Count Decrease</button></h3>
        </div>
    }
}

export default UserClass