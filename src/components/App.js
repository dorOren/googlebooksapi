import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar'

const App = () => {
    const [productsState, setProductsState] = useState([]);
    const [apiData, setDataState] = useState([]);

    useEffect ( () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react:keyes&key=AIzaSyDn4rpOPdD0EKBfWmw5uCYoA7f7h6lNcR8'+'&maxResults=10')
        .then((res) => {
            console.log(res.data.items);
            const newProductsStateList = res.data.items.map((product) => {
                return product.volumeInfo.title;
            })
            setProductsState(newProductsStateList);
            console.log(res.data.items)
            setDataState(res.data.items);
        })
            .catch(err => console.log(err))
    }, [])

    const hasProducts = productsState.length > 0

    return (
        <div>
            {hasProducts ? <SearchBar products={productsState} apiData={apiData}/> : "Loading..."}
        </div>
    )
};
export default App;
