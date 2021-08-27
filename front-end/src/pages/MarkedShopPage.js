import { Component } from "react"
// api
import shopAPI from "../api/shopAPI"
import { Link } from "react-router-dom";


class MarkedShopPage extends Component {
    static MODE_TYPE = {
      VIEW: 1,
      UPDATE: 2,
    }
  
    state = {
      shop: null,
      mode: MarkedShopPage.MODE_TYPE.VIEW
    }

  // helper methods
  async getShop() {
    try {
      let markId = this.props.match.params.markId
      
      let shopData = await shopAPI.getMarkedShopById(markId)
      if (shopData) {
        this.setState({ shop: shopData })
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  
  changeMode = (newMode) => {
    this.setState({mode: newMode})
  }

  updateShop = async () => {
    try {
      let inputName = document.getElementById("shop-name")
      let inputNote = document.getElementById("shop-note")
      

      let markId = this.state.shop.id
      
      if (inputName && inputNote) {
        let updatedShop = {
          
          shop_name: inputName.value,
          note: inputNote.value
         
        }
        
        let data = await shopAPI.updateMarkedShop(markId, updatedShop)
        if (data) {
          this.setState({shop: data})
          this.changeMode(MarkedShopPage.MODE_TYPE.VIEW)
        }
      }     
    }
    catch {

    }
    
  }

  deleteShop = async () => {
    try {
      
      let markId = this.state.shop.id
      
      if (markId > 0) {
        let result = await shopAPI.deleteMarkedShop(markId)
        if (result.success) {
          this.props.history.push(`/marked/`)
        }
      }
    }
    catch {

    }
  }

  // life cycles
  componentDidMount() {
    this.getShop()
  }

  // render
  renderShop() {
    if (!this.state.shop) {
      return <p>No shop found!</p>
    }

    if (this.state.mode === MarkedShopPage.MODE_TYPE.UPDATE) {
      return (
        <div>
          <div>
            <h1>Name: </h1>
            
            <input id="shop-name" placeholder="name" defaultValue={this.state.shop.shop_name}/>
            
          </div>
          
          <div>
            <h3>Note: </h3>
            <input id="shop-note" placeholder="note" defaultValue={this.state.shop.note}/>
          </div>
          <br />
          <button onClick={this.updateShop}>Save</button>
          <button onClick={() => this.changeMode(MarkedShopPage.MODE_TYPE.VIEW)}>Cancel</button>
        </div>
      )
    }

    return (
      <div>
        <h1>Name: <Link to={`/shops/${this.state.shop.shop_name}`}>{this.state.shop.shop_name}</Link></h1>
        
        <h3>Note: {this.state.shop.note}</h3>
        
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* <h1>Marked Shop: { this.props.match.params.markId } </h1> */}
        { this.renderShop() }
        <hr />
        <button onClick={() => this.changeMode(MarkedShopPage.MODE_TYPE.UPDATE)}>Update</button>
        <button onClick={this.deleteShop}>Delete</button>
      </div>
    )
  }
}



export default MarkedShopPage;