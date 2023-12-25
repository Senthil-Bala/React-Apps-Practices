import React from 'react'

function RecipeList(props) {
  return (
    <div>
        <div > 
            <h1>{props.title}</h1> 
            <ol> 
                {props.ingredients.map(ingredient=>( 
                    <li>{ingredient.text}</li> 
                ))} 
            </ol> 
              
<p>Calories : {props.calories}</p> 
  
            <img  src={props.image} alt=""/> 
  
        </div> 
    </div>
  )
}

export default RecipeList