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
            if (response.status === 200){
                setAmount(amount+1)
            }else{
                props.showError('Something failed!')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const newdate = new Date(item.date).toLocaleDateString();

    return (
        <div className="row event-item justify-content-start">
            <h2 className="col-sm-auto">{item.event}</h2>
            <div className="w-100"></div>
            <h2 className="col-sm-auto">at {item.location}</h2>
            <div className="w-100"></div>
            <div className="col-sm-auto">
                <div className="row">
                    <h4 className="col">{amount-1} others had a similar experience <button onClick={handleSubmitClick}>Same!</button></h4>
                    
                </div>
            </div>
            <div className="w-100"></div>
            <p className="col-sm" style={{textAlign: 'left'}}>{newdate}</p>
        </div>
    )
}

export default EventItem
