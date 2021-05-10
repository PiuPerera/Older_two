import React, {Component} from "react";
import "../styles/web.css"

class SelectPizza extends Component{
    state = {};

    render(){
        return(
            <div class="container">
		<div class="left-column">
			<img data-image="black" src="https://adminsc.pizzahut.lk/images/mainmenu/bbqchickenfe62a7f56bf84bc2890d3ba5f2f7e9d7.jpg" alt=""/>
		</div>

		<div class="right-column">
			<div class="product-description">
				<span>Pizza</span>
				<h2>BBQ Chicken</h2>
				<p>BBQ chicken accompanied by spicy jalapenos, onions and a double layer of mozzarella cheese...</p>
			</div>

			<div class="product-config">
				<div class="product-ingredients">
					<span>Ingredients</span>
					<ul>
						<li>BBQ chicken</li>
						<li>Spicy jalapenos</li>
						<li>Onions</li>
						<li>Mozzarella cheese</li>
					</ul>
				</div>
			</div>
			<div class="size-config">
				<span>Select Size</span>
				<div class="size-choose">
					<button class="btn btn-secondary">Small</button>
					<button class="btn btn-secondary">Medium</button>
					<button class="btn btn-secondary">Large</button>
				</div>
			</div>
			<div class="product-price">
				<span>Rs.500/=</span>
				<button class="cart-btn">Add to cart</button>
			</div>
		</div>
	</div>
        );
    }
}

export default SelectPizza;