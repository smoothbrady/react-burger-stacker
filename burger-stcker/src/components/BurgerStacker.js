import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

// burger stacker component is the parent of BurgerPane and IngredientList
// holds ingredients in state, so we can pass them as props

const BurgerStacker = () => {
    // state will hold ingredients
    const defaultIngredients = [
                {name: 'Kaiser Bun', color: 'saddlebrown'},
                {name: 'Sesame Bun', color: 'sandybrown'},
                {name: 'Gluten Free Bun', color: 'peru'},
                {name: 'Lettuce Wrap', color: 'olivedrab'},
                {name: 'Beef Patty', color: '#3F250B'},
                {name: 'Soy Patty', color: '#3F250B'},
                {name: 'Black Bean Patty', color: '#3F250B'},
                {name: 'Chicken Patty', color: 'burlywood'},
                {name: 'Lettuce', color: 'lawngreen'},
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'},
                {name: 'Cheese', color: 'gold'}
            ]

    const [ingredients, setIngredients] = useState(defaultIngredients)
    const [burgerIngredients, setBurgerIngredients] = useState([])

    // might want methods here to add ingredients, that will be passed to a child component
    const addToStack = (e) => {
			const ingColor = e.target.style.backgroundColor
			const ingName = e.target.innerText
			// ...burgerIngredients
			// copy - [{name: 'Onion', color: 'lightyellow'}, {name: 'Cheese', color: 'gold'}]
			// { name: ingName, color: ingColor }
			// {name: 'Onion', color: 'lightyellow'}, {name: 'Cheese', color: 'gold'}, { name: ingName, color: ingColor }
			// [{name: 'Onion', color: 'lightyellow'}, {name: 'Cheese', color: 'gold'}, { name: ingName, color: ingColor }]
			setBurgerIngredients([
				...burgerIngredients,
				{ name: ingName, color: ingColor },
			])
		}

    // remove from stack will find an ingredient and get it on outta there
    const removeFromStack = (e) => {
        // console.log('the old stack', this.state.burgerIngredients)
        console.log('the clicked item', e.target)
        // this is the location in the array
        const clickIndex = e.target.id
        // this is a copy of the burger
        const currBurger = burgerIngredients.slice()
        console.log('the current burger', currBurger)
        // this is removing one item from the copy of the burger
        currBurger.splice(clickIndex, 1)
        console.log('the current burger after splice', currBurger)
        setBurgerIngredients(currBurger)
    }

    // might want my clear function here, to pass down as a prop
    const clearBurger = () => {
        setBurgerIngredients([]) 
    }

        // console.log('ingredients list', this.state.ingredients)
        // console.log('burger ingredients', this.state.burgerIngredients)
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={ingredients}
                        add={addToStack}
                    />
                    <BurgerPane 
                        ingredients={burgerIngredients}
                        remove={removeFromStack}
                        clear={clearBurger}
                    />
                </div>
            </>
        )
}

export default BurgerStacker