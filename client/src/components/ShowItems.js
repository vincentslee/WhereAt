import React, {useState, useRef} from 'react'
import axios from 'axios';
import EventItem from './EventItem';

function ShowItems() {

    const [items, setItems] = useState([]);

    const eventSearch = useRef(null);
    const locationSearch = useRef(null);

    const Search = (e) => {
        e.preventDefault();

        let url = '/data/getEvents'
        const config = {
            headers: {'Content-Type':'application/json'},
            params: {
                "event" : e.target.value
            },
        }
        
        // Change request if user is searching by location
        if (e.target.id === "locationSearch"){
            url = '/data/getLocations'
            config.params = {
                "location" : e.target.value
            }
        }

        const {id, value} = e.target

        axios.get(url, config)
        .then((response)=>{
            // If both search fields are input, this function will filter out all results that don't fit both values.
            if (eventSearch.current.value && locationSearch.current.value){
                var newitems = response.data.filter(item => item.event === eventSearch.current.value && item.location === locationSearch.current.value);
                setItems(newitems)
            } else {                
                setItems(response.data)
            }
        }).catch(err=>{
            console.log(err)
        });
    }
    
    return (
        <div>
            <div>
                <input ref={eventSearch} onChange={Search} type="search" placeholder="Search events" id="eventSearch"/>
            </div>
            <div>
                <input ref={locationSearch} onChange={Search}  type="search" placeholder="Search locations" id="locationSearch"/>
            </div>
            {items.map((item)=>{
                return <EventItem event={item.event} location={item.location} amount={item.amount} date={item.updatedAt}></EventItem>
            })}
        </div>
    )
}

export default ShowItems
