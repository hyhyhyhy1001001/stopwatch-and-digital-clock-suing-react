import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState()
    const [comment, setComment] = useState()

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input type='number' value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
            <textarea  value={comment} onChange={handleCommentChange} />
            <p>Comment: {comment}</p>
        </div>
    )
}

export default MyComponent