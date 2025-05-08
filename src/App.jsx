import React, { useState } from 'react'
import { Component } from 'react'
class Xyz extends Component {
  constructor(){
    super()
   
    this.state={allusers:["rishabh","aparna","shilpi","ritu","kamlesh"],filteredusers:[],userinput:"",debounceduserinput:""}
  }
   pqr=(e)=>{
    this.setState({userinput:e.target.value})
  }
  
  componentDidUpdate(prevprops,prevstate){
    if(prevstate.userinput!==this.state.userinput){
      setTimeout(()=>{
        this.setState({debounceduserinput:userinput})
      },[2000])
    }
  }
  componentDidUpdate(prevprops,prevstate){
    if(prevstate.debounceduserinput!==this.state.debounceduserinput){
    var alluser=  this.state.allusers.filter((user)=>{
      return user.includes(this.state.debounceduserinput)
      })
    } 
    this.setState({filteredusers:alluser})
  }
  
  render() {
    return (
      <>
      <input type="text" onChange={this.pqr} />
        {
        this.state.filteredusers.map((user,index)=>{
            return(
              <div key={index}>{user}</div>
            )
          })
        }
      </>

    )
  }
}
export default Xyz
