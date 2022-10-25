// Ingredient is a child of Ingredient List
// receives the props of an individual ingredient -> color and name
import React from 'react'

const Ingredient = ({ ingredient, itemKey, clickFunc }) => {
	const { name, color } = ingredient
	// console.log('name in each ingredient', name)
	// console.log('color in each ingredient', color)
	return (
		<p
			style={{ backgroundColor: color }}
			id={itemKey}
			onClick={clickFunc}>
			{name}
		</p>
	)
}

export default Ingredient