import React, { Component } from 'react';
// import ShopList from '../components/ShopList/ShopList.js'
import ShopAPI from '../api/shopAPI.js';
import { Link } from "react-router-dom";
import axios from 'axios';

class HomePage extends Component {
    state = {
        shops: []
    }
    
    componentDidMount(){
        this.getShopList()
    }

    getShopList = () =>{
        //let data = await ShopAPI.fetchShops()

        // console.log(data)
        // this.setState({shops: data.shops})

        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=Ice%20Cream%20Shop&location=Chicago%2C%20IL%2060616`, {

        headers: {
            Authorization: `Bearer ENKbFSQP99h3t0WScIj4RGL1QIx5qnsfzQfBdUSniHeacY-J1EqVUZgkPRinZssaUF8V3pn7Mw8Hm-GctK2eFjnizeizXoZjHb2_WoQWk3g9wUqs-a8LHJrWkL0aYXYx`
        },
        
        })
        .then((res) => {
            console.log(res.data.businesses)
            
            this.setState({ shops: res.data.businesses })
        })
        .catch(err => {
            console.log(err);
          })

    }
    

    renderShopList(){
        let elements = this.state.shops.map((shop, index)=>{
            return <h3><Link to={`shops/${shop.alias}`}>{shop.name} ({shop.location.address1})</Link></h3>
        })
        return elements
    }

    render() {
        return (
        <div>
            <h1> Ice Cream Shops nearby </h1>
            {this.renderShopList()}
        </div>
        )
    }
}

export default HomePage
