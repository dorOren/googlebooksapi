import React, {useState} from "react";
import "./Books.css"

const Books = (props) => {
    //const [currectCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        console.log(props)
        alert(`Book name=${props.BookName}\nAuthors=${props.BookData.volumeInfo.authors}\nPages=${props.BookData.volumeInfo.PageCount}\nPublisher=${props.BookData.volumeInfo.publisher}\n`)
    }

    return (
    <div>
        <button className="BookName" onClick={handleClick}>{props.BookName}</button>
    </div>
    )
}

export default Books;