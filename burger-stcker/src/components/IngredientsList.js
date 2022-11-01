import React from 'react'
import Ingredient from '../Ingredient'

// ingredient list will loop over props(ingrdients)
// produce one Ingredient component for each item in the array

const IngredientList = ({ ingredients,add }) => {

        // ing = ingredient, i = the index of the array
        let allIngredients = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    itemKey={i} 
                    ingredient={ing} 
                    clickFunc={add}
                />
            </li>
        ))
        return (
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
}

export default IngredientList