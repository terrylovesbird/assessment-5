import React, { Component } from 'react'
import { Link } from "react-router-dom"
import shopAPI from "../api/shopAPI"
import axios from 'axios'

class MarkedShopListPage extends Component {
    state = {
        markedList: null,
        shops: []
      }
    
    async getMarkedList(){
        try{
            let markedListData = await shopAPI.getMarkedShops()
            if (markedListData){
                this.setState({ markedList: markedListData })
            }
        }
        catch (error) {
            console.log(error)
            }
    }
    
    addShop = async () => {
        try {
            let inputName = document.getElementById("mark-select")
            let inputNote = document.getElementById("new-note")
            
            if (inputName && inputNote) {
            let newMarkedShopParams = {
                
                shop_name: inputName.value,
                note: inputNote.value,
                
            }
            let data = await shopAPI.createMarkedShop(newMarkedShopParams)
            if (data) {
                this.getMarkedList()
            }
            }
        }
        catch {

        }
    }  

    componentDidMount() {
        this.getMarkedList()
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
           return(
                <option id={`mark-alias-${index}`}>{shop.alias}</option>
           )
            
        })
        return (
            <select id="mark-select">
                {elements}
            </select>
        )
    }
    
    renderShops(){
        
        let shopElements = this.state.markedList.map((mark, index) => {
            return (
              <li key={`mark-${index}`}>
                <Link to={`/marked/${mark.id}`}>{mark.shop_name}</Link>
              </li>
            )
          })
      
          console.log(shopElements)
      
          return (
            <ul>
              { shopElements }
            </ul>
          )
    }

    renderMarkedList() {  
        if (!this.state.markedList) {
            return <p>No marked shops found!</p>
          }

        return (
            <div>
                
            
                { this.renderShops() }
                <hr />
                {/* <input id="new-marked-name" placeholder="new marked shop"/> */}
                
                { this.renderShopList() }
                   
                <input id="new-note" placeholder="new note"/>
                <button onClick={this.addShop}>Add Marked Shop</button>
            </div>
        )
    }

    render(){
        return(
            <div>
                <h1> Marked Shops Page </h1>
                { this.renderMarkedList() }
            </div>
        )
        }
}
export default MarkedShopListPage