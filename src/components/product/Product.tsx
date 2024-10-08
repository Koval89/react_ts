import React, {FC} from 'react';
import {IProductModel} from "../../model/IProductModel";


type TypeProps = { item: IProductModel }

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <h3>{item.title}</h3>
            <h3>{item.description}</h3>
            <h3>{item.category}</h3>
            <h3>{item.price}</h3>
            <h3>{item.description}</h3>
            <h3>{item.rating}</h3>
            <h3>{item.stock}</h3>
            <h3>{item.tags}</h3>
            <h3>{item.brand}</h3>
            <h3>{item.sku}</h3>
            <h3>{item.weight}</h3>
            {/*{<h3>{item.dimensions}</h3>}*/}
            <h3>{item.warrantyInformation}</h3>
            <h3>{item.shippingInformation}</h3>
            <h3>{item.availabilityStatus}</h3>
            {/*{<h3>{item.reviews}</h3>}*/}
            <h3>{item.returnPolicy}</h3>
            <h3>{item.minimumOrderQuantity}</h3>
            {/*{<h3>{item.meta}</h3>}*/}
            <img src={item.thumbnail} alt={item.title}/>
            {/*<img src={item.images} alt={item.title}/>*/}


        </div>
    );
};

export default Product;