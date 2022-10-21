import React, { Component } from "react";
import BurgerApp from "./BurgerApp";

class IngredientsList extends Component {
    render() {
        const allitems = this.props.ingredients.map((item) => {
            return <Ingredient Ingredient={item} key={index}/>
        })
        return(
            <IngredientsList ingredients={this.props.ingredients}/>
        )
    }
}

export default IngredientsList