import React, {useEffect, useState} from 'react';
import PaginationRecipes from "../components/PaginationRecipes";
import {recipeService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Recipes from "../components/Recipes";
import {IRecipes} from "../models/IRecipes";

const RecipesPage = () => {
    const [query,setQuery] = useSearchParams({page:'1'});
    const [recipes, setRecipes] = useState<IRecipes[]>([])
    const [buttonOf, setButtonOf] = useState<boolean>(false)
    useEffect(()=>{
        console.log(query.get('page'));
        const page = query.get('page')
        if(page){
            recipeService.recipe
                .getAll(+page)
                .then(value =>{
                    setRecipes(value.recipes);
                    const lastId = value.recipes[value.recipes.length-1].id
                    if( lastId>=value.total ){
                        setButtonOf(true)
                    } else {
                        setButtonOf(false)
                    }
                });
        }

    },[query])

    return (
        <div>
            <Recipes recipes={recipes}   />
            <PaginationRecipes buttonOf={buttonOf} />
        </div>
    );
};

export default RecipesPage;