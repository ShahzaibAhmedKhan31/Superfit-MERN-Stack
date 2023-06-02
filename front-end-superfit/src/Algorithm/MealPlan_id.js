

export function Send_mealid(Calories, Preference) {
    
    let Url = "http://localhost:3000/auth/mealplan/";
    let result = Url.concat(Calories, "/", Preference);
      fetch(result,{
                    method: "GET",
                    crossDomain:true,
                    headers:{
                        "Content-Type": "application/json"
                    }
                }).then((res) => res.json()).then((data)=>{
                localStorage.setItem('mealid', data[0]._id);
                }); 
                
            return ;  
    } 