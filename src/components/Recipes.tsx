import React, {FC} from 'react';
import {IRecipes} from "../models/IRecipes";

type RecipesProps = {
    recipes:IRecipes[]
}

const Recipes:FC<RecipesProps> = ({recipes}) => {
    console.log(recipes)
    return (
        <div>
            {
                recipes.map(recipes=><div>{recipes.name}</div>)
            }
        </div>
    );
};

export default Recipes;