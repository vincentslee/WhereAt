import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios';
import EventItem from './EventItem';

function ShowItems() {

    const [items, setItems] = useState([]);

    const eventSearch = useRef(null);
    const locationSearch = useRef(null);

    const Search = (e) => {
        e.preventDefault();

        let url = '/data/getEvents'
        let config = {
            headers: {'Content-Type':'application/json'},
            params: {
                "event" : eventSearch.current.value
            },
        };

        if (!eventSearch.current.value && !locationSearch.current.value){
            getRecent();
        } else if (!eventSearch.current.value){
            url = '/data/getLocations'
            config = {
                headers: {'Content-Type':'application/json'},
                params: {
                    "location" : locationSearch.current.value
                },
            };
            getEventLocations(url, config);
        } else {
            getEventLocations(url, config);
        }
    };

    const getEventLocations = (url, config) => {
        axios.get(url, config)
        .then((response)=>{
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

    const getRecent = () => {
        const config = {
            headers: {'Content-Type':'application/json'},
        }
        axios.get('/data/getRecent', config)
        .then((response)=>{
            setItems(response.data)
        }).catch(err=>{
            console.log(err)
        });
    };

    useEffect(() => {
        getRecent();
    }, []);


    return (
        <div className="items-display justify-content-center">
            <div id="SearchBar">

{/*                 <div className="row">
                    <button className="col">Recent near you</button>
                    <button className="col">Popular near you</button>
                </div> */}

                <div className="row">
                    <input className="col" ref={eventSearch} onChange={Search} type="search" placeholder="Search events" id="eventSearch"/>
                    <input className="col" ref={locationSearch} onChange={Search}  type="search" placeholder="Search locations" id="locationSearch"/>
                </div>
            </div>
            <div className="container-fluid item-container justify-content-center">
                {items.length > 0 ?items.map((item)=>{
                    return <EventItem event={item.event} location={item.location} amount={item.amount} date={item.updatedAt}></EventItem>
                }) : <h1>None found</h1>}
            </div>
        </div>
    )
}

export default ShowItems
