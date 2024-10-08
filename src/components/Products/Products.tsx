import React,{FC}from 'react';
import {IProductModel} from "../../model/IProductModel";
import {apiProductsObject} from "../../data";
import Product from "../product/Product";


const Products : FC = () => {
    const products: IProductModel[] = apiProductsObject.products;
    return (
        <div>
            {products.map((product:IProductModel)=>(<Product item ={product}/>))}

        </div>
    );
};

export default Products;