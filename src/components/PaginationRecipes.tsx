import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

type buttonOfProps={
    buttonOf:boolean
}

const PaginationRecipes:FC<buttonOfProps> = ({buttonOf}) => {
    const [query,setQuery] = useSearchParams({page:'1'});

    const onclickPrev = () =>{
        const page = query.get('page');
        if(page && +page>1){
            console.log(page)
            let currentPage = +page;
            currentPage--;
            setQuery({page:currentPage.toString()})
        }
    }

    const onclickNext = ()=>{
const page = query.get('page');
if(page){
    let currentPage = +page;
    currentPage++;
    setQuery({page:currentPage.toString()})
}

    };
    useEffect(()=>{
        if(!query.get('page')){
            setQuery({page:'1'})
        }
    },[query.get('page')]);

    return (
        <div>
            <button onClick={onclickPrev} >prev</button>
            <button onClick={onclickNext} disabled={buttonOf}>next</button>
        </div>
    );
}

export default PaginationRecipes;