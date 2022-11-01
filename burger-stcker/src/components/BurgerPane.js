// this is where the burger happens
import React from 'react'
// burger pane needs to display ingredient components, similarly to how ingredientlist does
import Ingredient from '../Ingredient'

const BurgerPane = ({ ingredients, remove, clear }) => {
    // burger pane will eventually get props(ingredients), and should loop and display those similar to the ingredientList
    // the difference will be the clear button


        // console.log(this.props)
        let burgerBits = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    itemKey={i} 
                    ingredient={ing} 
                    clickFunc={remove}
                />
            </li>
        ))
        return (
            <section className='pane'>
                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={clear}>Clear Burger</button>
            </section>
        )

}

export default BurgerPane