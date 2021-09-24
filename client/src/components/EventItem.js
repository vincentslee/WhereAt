import React, {useState} from 'react'
import axios from 'axios'
// Make sure props are passed like this:
// <EventItem event={ } location={ } amount={ } date={ }></EventItem>
function EventItem(item, props) {

    const [amount, setAmount] = useState(item.amount);

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "event":item.event,
            "location":item.location
        }
        axios.post('/data/add', payload)
        .then((response)=>{
            console.log(payload)
            console.log("Attemping to add...")
            console.log(response)
            if (response.status === 200){
                console.log('Added')
                setAmount(amount+1)
            }else{
                props.showError('Something failed!')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    console.log(item)
    return (
        <div >
            <div>
                <p> I got </p>
                <h2>{item.event}</h2>
                <p> at </p>
                <h2>{item.location}</h2>
                <p> {amount} times</p>
            </div>
            <button onClick={handleSubmitClick}>Same!</button>
        </div>
    )
}

export default EventItem
