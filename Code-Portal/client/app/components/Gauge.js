import React,{Component} from 'react';
import styled from 'styled-components';

class Gauge extends Component {
    render(){
        return(
            <div className={this.props.className}>
		<svg width={this.props.size} height={this.props.size}>
			<circle
				id="mask"
				r="35%"
				cx="50%"
				cy="50%"
				stroke="#f6f6f6"
				strokeWidth="9%"
				fill="none"
			/>
			<circle
				id="bar"
				r="35%"
				cx="50%"
				cy="50%"
				stroke={this.props.color}
				strokeWidth="10%"
				strokeDasharray={`${this.props.percentage * 100} 100`}
				strokeLinecap="round"
				transform="rotate(-90)"
				fill="none"
			/>
		</svg>
	</div>
        )
    }
};

export default styled(Gauge)`
	display: inline-block;
	width: ${({ size }) => size};
	height: ${({ size }) => size};

	#bar {
		transform-origin: 50% 50%;
	}
`;
