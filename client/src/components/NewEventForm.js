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
        const payload={
            "event":state.event,
            "location":state.location
        }

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
        
    }
    return (
        <div>
            <form>
                <label>What happened?</label>
                <input
                    type="text"
                    placeholder="I..."
                    value={state.event}
                    onChange={handleChange}

                    id="event"
                >
                </input>

                <label>Where at?</label>
                <input
                    type="text"
                    placeholder="Location"
                    value={state.location}
                    onChange={handleChange}

                    id="location"
                >
                </input>

                <button
                type="submit"
                onClick={handleSubmitClick}
                >Submit</button>

            </form>
            
        </div>
    )
}

export default NewEventForm
