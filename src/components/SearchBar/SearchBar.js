import React, {useState, useEffect} from 'react'
import './SearchBar.css'
import Book from '../Book/Book.js'

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
    }, [])

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleClearClick = () => {
        setSearchValue("");
    }

    const shouldDisplayButton = searchValue.length > 0;
    const shouldStartSearch = searchValue.length > 2;

    const filteredProducts = props.products.filter((product) => {
            if (shouldStartSearch) {
                return product.includes(searchValue);
            }
            else {
                return product;
            }
    })

    const getInfoByBookName = (name) => {
        for(let i=0 ; i < props.apiData.length ; i++) {
            let book= props.apiData[i];
            if(book.volumeInfo.title == name) {
                return book;
            }
        }
    }

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange}/>
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
            <div className="BookList">
                {filteredProducts.map((product) => {
                return <Book key={product} BookName={product} BookData={getInfoByBookName(product)}></Book>
                })}
            </div>
        </div>
    )
}

export default SearchBar;
