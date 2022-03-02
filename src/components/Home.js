import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Restaurants from './Restaurants';
import {listRestaurants} from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'

function Home() {

    const [hotels, setHotels] = useState([])
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const restaurantData = useSelector(state => state.restaurantReducer)
    const {restaurants}= restaurantData

    useEffect(() => {
        dispatch(listRestaurants())
    }, [])


    return (
        <>
            <Row>
                <input value={search} type="text" placeholder="Type here" onChange={event => setSearch(event.target.value)} />
                {restaurants ? (
                    restaurants.filter(item => {
                        if (search === "") {
                            return item
                        }
                        else if (item.neighborhood.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    })
                        .map(item => (
                            <Col sm={12} md={8} lg={6} xl={3}>
                                <Restaurants item={item} />
                            </Col>
                        ))
                ) : ("error")}

            </Row>
        </>
    );
}
export default Home

// lifecycle methods
//    1- mounting  - componentDidMount()
//    2- updating  - componentDidUpdate()
//    3- unmounting- componentWillUnmount()

// axios
