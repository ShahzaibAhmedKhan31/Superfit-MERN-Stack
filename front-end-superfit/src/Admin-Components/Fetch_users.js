import React, {Fragment} from "react";
import { connect } from 'react-redux';
import ReadOnlyRow from "./ReadOnlyRow";
import EditRow from "./EditRow";
import Navbar from './navbar';

// Redux implementation for getting all users
const getUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  fetch("http://localhost:3000/auth/users").then(
    (response) => response.json()
  ).then((data)=> {
    console.log(data)
    dispatch({
          type: "GET_USERS_SUCCESS",
          payload: data.Users,
        }).catch((err) => dispatch({
          type: "GET_USERS_FAILURE",
          payload: "Some error occurred",
        }));
  }) 
}


 class Fetch_users extends React.Component {

    componentDidMount() {
        this.RemoveUserApi = this.RemoveUserApi.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleEditFormChange = this.handleEditFormChange.bind(this);
        this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
        
        console.log("MY_STATE: ", this.props.mystate);
        this.props.getUsers();
   }
   componentDidUpdate() {
    if(this.props.mystate.users.users){
      console.log(this.props.mystate.users.users);
    }
   }
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      editid: "",
      editFormData: {
        fullname: "",
        email: "",
        password: ""
      }
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  
  /*
  callAPI(){

    fetch("http://localhost:3000/auth/users").then(
      (response) => response.json()
    ).then((data)=> {
      console.log(data)
      this.setState({
        list:data.Users
     })
    }) 
  }
  */

   RemoveUserApi(Userid) {

    let url1 = "http://localhost:3000/auth/users/";
    url1 = url1.concat(Userid);

    const newState = [...this.state.list];
    const index = this.state.list.findIndex((User)=> User._id === Userid); 


    fetch(url1, { method: 'DELETE' })
        .then(() => {
          newState.splice(index,1);
          this.setState({
            list:newState
         })
        });
  }

  handleEditClick = (event,user) =>{
    event.preventDefault();
    this.setState({editid: user._id});

    const formvalues = {
        fullname: user.fullname,
        email: user.email,
        password: user.password
    }
    this.setState({editFormData:formvalues})
  }

  handleEditFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...this.state.editFormData};
    newFormData[fieldName] = fieldValue;

    this.setState({editFormData:newFormData});
  }

  handleEditFormSubmit = (event) => {
    event.preventDefault();
    let url1 = "http://localhost:3000/auth/register/";

    const editedUser = {
        fullname:this.state.editFormData.fullname,
        email:this.state.editFormData.email,
        password:this.state.editFormData.password
    }

    const newUser = [...this.state.list];
    const index = this.state.list.findIndex((User)=> User._id === this.state.editid);

    newUser[index] = editedUser;

    url1 = url1.concat(this.state.editid);

    console.log(index);

    fetch(url1, {
        method: 'PUT',
        body: JSON.stringify({
          fullname: this.state.editFormData.fullname,
          email:this.state.editFormData.email,
          password:this.state.editFormData.password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
            list:newUser
        })
        this.setState({
            editid:null
        })
    });
  }


  render() {
    let tb_data = this.props.mystate.users?.users?.map((item) => {
      return(
        <Fragment>
        {this.state.editid === item._id ? (
        <EditRow editFormData = {this.state.editFormData}  handleEditFormChange={this.handleEditFormChange} />
         ) : (
        <ReadOnlyRow items={item} handleEditClick={this.handleEditClick} RemoveUserApi = {this.RemoveUserApi}/>
        )}
        </Fragment>
      )
    })
    const containerStyle = {
        marginLeft:"0",
        marginTop:"50px"
    }
    return (
    <div>
    <Navbar/>  
      <div className="container" style={containerStyle}>
        <form  onSubmit = {this.handleEditFormSubmit}>
          <table className="table table-striped">
            <thead style={{border:"3px solid black"}}>
              <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {tb_data}
            </tbody>
          </table>
          </form>
      </div>
      </div>
    )
  }
}

//Functions used to access globals states in the components
const mapStateToProps = state => ({
  mystate: state
})
const mapDispatchToProps = (dispatch) => {
  return {
      getUsers: () => dispatch(getUsers())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Fetch_users)
