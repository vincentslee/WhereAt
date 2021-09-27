import React, {useState} from 'react'
import axios from 'axios'

function NewEventForm(props) {

    const [state, setState] = useState({
        event : "",
        location : "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();

        setShown(true)
        const payload={
            "event":state.event,
            "location":state.location
        }

        // Ensures content must be minimum length
        if (payload.event.length > 2 && payload.location.length > 5){
            axios.post('/data/add', payload)
            .then((response)=>{
                if (response.status === 200){
                }else{
                    props.showError('Something failed!')
                }
    
            })
            .catch(err=>{
                console.log(err)
            })
        } else {
            console.log("invalid submission")
        }        
    }

    const [shown, setShown] = useState(true)
    const toggleForm = (e) => {
        e.preventDefault();
        setShown(!shown);
    }



    return (
        <div>
            <div className="row" style={{display: (shown ? "none" : "block")}}>
                <form id="NewEventForm">
                    <div className="d-flex flex-row-reverse">
                        <button 
                        onClick={toggleForm}

                        style={{right: '0'}}>
                        x</button>
                    </div>

                    <input
                        type="text"
                        placeholder="What happened?"
                        value={state.event}
                        onChange={handleChange}

                        id="event"
                        className="col"
                    >
                    </input>

                    <input
                        type="text"
                        placeholder="Where at?"
                        value={state.location}
                        onChange={handleChange}

                        id="location"
                        className="col"
                    >
                    </input>

                    <button
                    type="submit"
                    onClick={handleSubmitClick}

                    className="col"
                    >Submit</button>

                </form>
            </div>
            <button
            onClick={toggleForm}

            id="ToggleFormButton"
            >Add new</button>
        </div>
    )
}

export default NewEventForm
