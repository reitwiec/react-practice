import React from 'react';
import styled from 'styled-components';

const Wrong = ({ className}) => (
	<svg className={className} id="correct" viewBox="0 0 1800 1800" data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg">
        <circle className="cls1" cx="620" cy="700" r="588.88"/>
	</svg>
);

export default styled(Wrong)`
.cls1{
    
    fill: #ff0100}

`;