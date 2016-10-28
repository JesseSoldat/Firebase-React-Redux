import React, {Component} from 'react';

class Button extends Component {

	render(){
		let disabled;
		let button;
		let correct;

		switch(correct){
			case true:
				button =(
				<button className="btn btn-success btn-lg">
					<span className="glyphicon glyphicon-ok">
					</span>
				</button>
				);
				break

			case false:
				button = (
				<button className="btn btn-danger btn-lg">
					<span className="glyphicon glyphicon-remove">
					</span>
				</button>
				);
				break

			default:
				
				button = (
				<button className="btn btn-primary btn-lg"> =
				</button>
				)
				
		}//switch

		return(
		<div id="button-frame">
			{button}
			<br/><br/>
			<button className="btn btn-warning btn-xs">
				<span className="glyphicon glyphicon-refresh">
				</span>
			</button>
		</div>
		);
	}
}

export default Button;