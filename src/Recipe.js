import React, {Component} from 'react'
import "./App.css";


export default class Recipe extends Component {

    state={
        showInfo:false
    }

    handleInfo = () =>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const{title,calories,image,ingredients, dietLabels}=this.props

        return (
            <article className="meal">
            <div className="img-container">
                <img src={image} alt="" />
                <span className="close-btn">
                    <i className="fas fa-window-close" />
                </span>
            </div>

            <div className="meal-info">
                <h4>{title}</h4>
                    <h5>info meal
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {this.state.showInfo && <p><b>calories:</b> {calories}<br></br></p> }
                    {this.state.showInfo && <p><b>ingredients:</b> {ingredients}<br></br></p> }
                    {this.state.showInfo && <p><b>diet labels:</b> {dietLabels}<br></br></p> }
            </div>

        </article>
        )
    }
}
