import React, { Component } from 'react'
import './footer.css'

export class form extends Component {
  render() {
    return (

      <form>
        <div>
         
            <input placeholder='name:' type='text' />
            
        </div>
        <div>
         
            <input placeholder='job:' type='text' />
        </div>
        <div>
         
            <input placeholder='email:' type='text' />
        </div>
        <div>
            
            <input placeholder='phone:' type='number' />
        </div>
        <div>
          <input type='submit' name='sub' />
        </div>
      </form>
    )
  }
}

export default form