import React, { useState } from 'react'
import { Component } from 'react'
class Xyz extends Component {
  constructor() {
    super()

    this.state = { allusers: ["rishabh", "aparna", "shilpi", "ritu", "kamlesh"], filteredusers: [], userinput: "", debounceduserinput: "" }
    this.abc = null;
  }
  pqr = (e) => {
    this.setState({ userinput: e.target.value })
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.userinput !== this.state.userinput&&this.state.userinput!=="") {
      if (this.abc) {
        clearTimeout(this.abc)
      }
      this.abc = setTimeout(() => {
        this.setState({ debounceduserinput: this.state.userinput })
      },500)
    }
    if (prevstate.debounceduserinput !== this.state.debounceduserinput) {
      if(this.state.debounceduserinput!==""){

        var alluser = this.state.allusers.filter((user) => {
          return user.includes(this.state.debounceduserinput)
        })
        this.setState({ filteredusers: alluser })
      }
      else{
        this.setState({filteredusers:[]})
      }

      // if (JSON.stringify(alluser) !== JSON.stringify(this.state.filteredusers)) {
      //   this.setState({ filteredusers: alluser });
      // }

    }
     
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.pqr} />
        {
          this.state.filteredusers.map((user, index) => {
            return (
              <div key={index}>{user}</div>
            )
          })
        }
      </>

    )
  }
}
export default Xyz
