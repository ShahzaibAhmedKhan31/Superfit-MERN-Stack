import React from "react";
import Navbar from './navbar';

export default class DisplayTableMeal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list:[]
    }
    
    this.callAPI = this.callAPI.bind(this)
    this.RemoveMealApi = this.RemoveMealApi.bind(this);
    this.callAPI();
  }

  callAPI(){

    fetch("http://localhost:3000/auth/mealplan").then(
      (response) => response.json()
    ).then((data)=> {
      console.log(data)
      this.setState({
        list:data.mealsplan_data
     })
    }) 
  }

   RemoveMealApi(mealplanid) {

    let url1 = "http://localhost:3000/auth/mealplan/";
    url1 = url1.concat(mealplanid);

    const newState = [...this.state.list];
    const index = this.state.list.findIndex((MealResponse)=> MealResponse._id === mealplanid);

    fetch(url1, { method: 'DELETE' })
    .then(() => {
        newState.splice(index,1);
        this.setState({
          list:newState
       })
      });

  }

  render() {
    let tb_data = this.state.list.map((item)=> {
      return(
        <tr key = {item._id}>
          <td>{item._id}</td>
          <td>{item.Plan_type}</td>
          <td>{item.Meal_Calories}</td>
          <td>{item.Meal_Breakfast[0]}</td>
          <td>{item.Meal_Breakfast[1]}</td>
          <td>{item.Meal_Breakfast[2]}</td>
          <td>{item.Meal_Breakfast[3]}</td>
          <td>{item.Meal_Lunch[0]}</td>
          <td>{item.Meal_Lunch[1]}</td>
          <td>{item.Meal_Lunch[2]}</td>
          <td>{item.Meal_Lunch[3]}</td>
          <td>{item.Meal_Dinner[0]}</td>
          <td>{item.Meal_Dinner[1]}</td>
          <td>{item.Meal_Dinner[2]}</td>
          <td>{item.Meal_Dinner[3]}</td>
          <td>
            <button className="btn btn-danger" onClick={()=> this.RemoveMealApi(item._id)}>Remove</button>
          </td>
        </tr>
      )
    })

    const containerStyle = {
        marginLeft:"0",
        marginTop: "100px"
    }
    return (
    <div>
        <Navbar />
      <div className="container" style={containerStyle}>
          <table className="table table-striped">
            <thead style={{border:"3px solid black"}}>
              <tr>
                  <th>Meal-id</th>
                  <th>Meal-type</th>
                  <th>Meal-calories</th>
                  <th>Meal1-breakFast</th>
                  <th>Meal1-recipe</th>
                  <th>Meal2-breakfast</th>
                  <th>Meal2-recipe</th>
                  <th>Meal1-lunch</th>
                  <th>Meal1-recipe</th>
                  <th>Meal2-lunch</th>
                  <th>Meal2-recipe</th>
                  <th>Meal1-dinner</th>
                  <th>Meal1-recipe</th>
                  <th>Meal2-dinner</th>
                  <th>Meal2-recipe</th>
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