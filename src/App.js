import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            number:'',
            storeNumber:[]
        }
    }
    //
    // componentDidMount(){
    //     var places = [];
    //     console.log("Places are", places);
    //
    //
    //     let url = 'https://data.foli.fi/siri/vm';
    //     // Make a request for a user with a given ID
    //     axios.get(url)
    //         .then(response => {
    //             let vehicle = response.data.result.vehicles;
    //           //  console.log("%cMy data are : ", "color: green; font-size:15px", vehicle);
    //
    //
    //             let myData = Object.entries(vehicle); // returns array of keys and values
    //           //  console.log(myData);
    //
    //            // myData.filter(([key, value]) => {console.log(value.latitude)});
    //             //console.log("The values are :", c.push(places));
    //
    //             //(key, val) => {}
    //
    //         })
    //         .catch(error => {console.log("%cOVERCOME THESE ERRORS FIRST","color:red; font-size:15px", error)});
    //    // axios.get(url)
    //     // .then(result => {console.log("RESULT IS :", result), result.data.result})
    //
    // }

    handleBusNumber = (event) => {
        console.log(event.target.value);

        this.setState({
            number:event.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        let Num1 = this.state.number;
        let Num2 = this.state.storeNumber;
        Num2.push(Num1);

        this.setState({
            number:''
        })
    }

  render() {

      console.log("The number is :", this.state.number);
      console.log("The set state number is :", this.state.storeNumber);

      return (
      <div>
          <form>
              <h2>Enter the bus number : <input type='number' value={this.state.number} onChange={this.handleBusNumber} /></h2>
              <button type='submit' onClick={this.handleChange}>Submit</button>
          </form>

          {
              this.state.storeNumber.length > 0 &&
              <div>
                  <p>You entered:</p>
                  <ul>
                      {this.state.storeNumber.map(item =>
                          <li>{item}</li>
                      )
                      }
                  </ul>
              </div>
          }

      </div>
    );
  }
}