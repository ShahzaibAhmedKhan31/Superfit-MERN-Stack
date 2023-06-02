import React from "react";
import Navbar from './navbar';

export default class Fetch_userResponse extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      list:[]
    }
    
    this.callAPI = this.callAPI.bind(this);
    this.RemoveUserApi = this.RemoveUserApi.bind(this);
    this.callAPI();
  }

  callAPI(){

    fetch("http://localhost:3000/auth/user-response").then(
      (response) => response.json()
    ).then((data)=> {
      console.log(data)
      this.setState({
        list:data.User_response
     })
    }) 
  }

   RemoveUserApi(responseid,Userid) {
    let url1 = "http://localhost:3000/auth/user-response/";
    url1 = url1.concat(responseid);

    let url2 = "http://localhost:3000/auth/users/";
    url2 = url2.concat(Userid);

    const newState = [...this.state.list];
    const index = this.state.list.findIndex((UserResponse)=> UserResponse._id === responseid); 


    fetch(url1, { method: 'DELETE' })
        .then(() => {
          newState.splice(index,1);
          this.setState({
            list:newState
         })
        });

    fetch(url2, { method: 'DELETE' })
        .then();
  }



  render() {
    let tb_data = this.state.list.map((item)=> {
      return(
        <tr key = {item._id}>
          <td>{item.User_id}</td>
          <td>{item.User_response_num[0]}</td>
          <td>{item.User_response_num[1]}</td>
          <td>{item.User_response_num[2]}</td>
          <td>{item.User_response_str[0]}</td>
          <td>{item.User_response_str[1]}</td>
          <td>{item.User_response_str[2]}</td>
          <td>{item.User_response_str[3]}</td>
          <td>
            <button className="btn btn-danger" onClick={()=> this.RemoveUserApi(item._id,item.User_id)}>Remove</button>
          </td>
        </tr>
      )
    })
    const containerStyle = {
        marginLeft:"0",
        marginTop:"100px"
    }
    return (
    <div>
    <Navbar/> 
      <div className="container" style={containerStyle}>
          <table className="table table-striped">
            <thead style={{border:"3px solid black"}}>
              <tr>
                  <th>User_id</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Activity</th>
                  <th>Goal</th>
                  <th>Preference</th>
                  <th>Remove</th>
              </tr>
            </thead>
            <tbody>
                {tb_data}
            </tbody>
          </table>
      </div>
      </div>
    )
  }
}