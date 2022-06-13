import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleChange = (e) => {
    this.setState({
      numberOfEvents: e.target.value
    });
  }

  ///////// <select> Element for NumberOfEvents
  render() {
    return(
      <div style={{"display":"inline"}} className="numberOfEvents">
        <p>Show
          <span>
            <select id="number-of-events" style={{"width":"5rem", "margin":"0 .5rem"}} type="select" onSelect={this.handleChange}>
              <option value="2">12</option>
              <option value="24">24</option>
              <option value="32" selected >32</option>
            </select>
          </span>
          Events
        </p>
      </div>
    )
  }
}


/////////// <input> Element for NumberOfEvents

//   render() {
//     return(
//       <div style={{"display":"inline"}} className="numberOfEvents">
//         <p>Show
//           <span>
//             <input
//               style={{"width":"5rem", "margin":"0 .5rem"}}
//               className="number-of-events"
//               type="number"
//               value={this.state.numberOfEvents}
//               onChange={(e) => this.setState({ numberOfEvents: e.target.value })}
//               >
//             </input>
//           </span>
//           Events
//         </p>
//       </div>
//     )
//   }
// }



// export default NumberOfEvents;

//Functional Component ---- !!may convert later!!
// const NumberOfEvents = () => {
//   const [numberOfEvents, setNumberOfEvents] = useState(32);

//   return (
//     <div style={{"display":"inline"}} className="numberOfEvents">
//          <p>Show
//            <span>
//              <input
//               style={{"width":"5rem", "margin":"0 .5rem"}}
//               className="number-of-events"
//               type="number"
//               value={numberOfEvents}
//               onChange={(e) => {
//                 setNumberOfEvents(e.target.value);
//                 console.log(numberOfEvents)
//               }}
//               >
//             </input>
//           </span>
//           Events
//         </p>
//       </div>
//   )
// }

export default NumberOfEvents;