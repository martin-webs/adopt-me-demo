//We'll use class properties to improve readability, we'll need to configure parcel with: npm i -D @babel/plugin-proposal-class-properties@7.16.7 and configure .babelrc with: { "plugins": ["@babel/plugin-proposal-class-properties"] }

import { Component } from "react";

class Carousel extends Component {
	// constructor (props){
	// 	super(props);
	// 	this.handleIndexClick = this.handleIndexClick.bind(this)
	// }

	state = {
		active: 0
	}

	static defaultProps = {
		images: [	'http://pets-images.dev-apis.com/pets/none.jpg' ]
	}

	//Arrow functions don't create new contexts, they just use the context of the parent function. (Functions declarations do create new contexts)
	handleIndexClick = (event) => {
		this.setState({
			active: Number(event.target.dataset.index)
		})
	}

	render() {
		const { active } = this.state;
		const { images } = this.props;
		return (
			<div className="carousel">
				<img src={images[active]} alt="animal" />
				<div className="carousel-smaller">
					{images.map((photo, index) => (
						<img 
						onMouseEnter={this.handleIndexClick}
						key={photo}
						src={photo} 
						className={ index === active ? 'active' : ''}
						data-index={index}
						alt="animal thumbnail" />
					))}
				</div>
			</div>
		)
	}
}


export default Carousel;