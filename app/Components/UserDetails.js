
import React from 'react';

class UserDetails extends React.Component {
  constructor(props){
    super(props);
    
            // set the initial component state
            this.state = {
                userDetails: []
            }
  }
  componentDidMount() {
    console.log("hi")
    fetch('http://localhost:8000/userDetails/', {method: 'get', headers: new Headers({'Content-Type': 'application/json'})  })
    .then(response => response.json());
  }
  render(){
      return (
      
      <div className="row">
          <div> 
          <h3> User Details </h3>
      </div>
      <div className="col-md-12">
          <table className="table table-bordered">
              <thead>
                  <tr>
                      <th className="col-md-4">UserName</th>
                      <th >Password</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td> aaa </td>
                      <td> ...... </td>
                  </tr>
                  <tr>
                      <td> bbb </td>
                      <td> .......</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>)
  }
}

export default UserDetails;
