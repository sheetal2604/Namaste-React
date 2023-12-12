import React from 'react'
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="user">
        This is About Page
        <UserClass name={"Sheetal"}/>
      </div>
    )
  }
}
export default About
