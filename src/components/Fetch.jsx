import React from "react";
import './Fetch.css';
import { Heading } from '../components/Heading';
import { Postcard } from '../components/Postcard';

export class Fetch extends React.Component {
  render () {
    return(
      <div className="fetch-content">
        <Heading />
        <Postcard />
      </div>
    )
  }
}

// function Fetch() {
//   return( <div>
     
//     </div>)
// }




