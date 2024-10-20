import axios from "axios";
import {IRecipes} from "../models/IRecipes";
import {IRecipesBase} from "../models/IRecipesBase";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
})


// export const recipeService = {
//     recipe: {
//         getAll: async (page: number) : Promise<IRecipes[]> => {
//             const skip = (page - 1) * 5
//             const axiosResponse = await axiosInstance.get<IRecipes[]>('/recipes', {
//                 params: {
//                     skip: skip
//                 }
//             });
//             console.log(axiosResponse)
//             return axiosResponse.data
//         }
//     }
// }

// деструктуризація ->

export const recipeService = {
    recipe: {
        getAll: async (page: number) : Promise<IRecipesBase & {recipes:IRecipes[]}> => {
            const skip = (page - 1) * 5
            const limit = 5
            const {data} = await axiosInstance.get<IRecipesBase & {recipes:IRecipes[]}>('/recipes', {
                params: {
                    skip: skip,
                    limit:limit
                }
            });
            return data;
        }
    }
}