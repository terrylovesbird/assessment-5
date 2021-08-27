import React, { Component } from 'react';
// import ShopList from '../components/ShopList/ShopList.js'
import ShopAPI from '../api/shopAPI.js';
import { Link } from "react-router-dom";
import axios from 'axios';

class ShopPage extends Component {

  state = {
    shop: null
}

  componentDidMount(){
    this.getShopDetail()
}

  getShopDetail = () =>{
    //let data = await ShopAPI.fetchShops()

    // console.log(data)
    // this.setState({shops: data.shops})
    let shopId = this.props.match.params.shopAlias
    
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${shopId}`, {

    headers: {
        Authorization: `Bearer ENKbFSQP99h3t0WScIj4RGL1QIx5qnsfzQfBdUSniHeacY-J1EqVUZgkPRinZssaUF8V3pn7Mw8Hm-GctK2eFjnizeizXoZjHb2_WoQWk3g9wUqs-a8LHJrWkL0aYXYx`
    },
    
    })
    .then((res) => {
        console.log(res.data)
        
        this.setState({ shop: res.data})
    })
    .catch(err => {
        console.log(err);
      })

  }

  renderShopDetail(){
    if(!this.state.shop){
      return null
    }

    let modified_address = String(this.state.shop.location.address1 +', '+ this.state.shop.location.city);

    let google_address = modified_address.split(' ').join('+');
    // let search = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBA1807Suzt5Q5hfLOV5tCc1TYxNgEnRSU&q="+google_address

    return (
      <div>
       
        <h3>Name: {this.state.shop.name}</h3>
        <p>Rating: {this.state.shop.rating}</p>
        <p>Price: {this.state.shop.price}</p>
        <p>Phone: {this.state.shop.phone}</p>
        <p>Address: {modified_address}</p>

       
        <iframe
          width="600"
          height="450"
          //style="border:0"
          loading="lazy"
          
          src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBA1807Suzt5Q5hfLOV5tCc1TYxNgEnRSU&q="+google_address}
          >
        </iframe>
       
      </div>
      
      

    )

  }

  render() {
    return (
      <div>
        <h1> Shop Page </h1>
        { this.renderShopDetail() }
      </div>
    )
  }
}

export default ShopPage
