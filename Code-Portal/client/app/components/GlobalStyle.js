import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900');
	@import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700');

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html{
		background-color:#222437;
	}

	body {
		background-color:#000;
		background: #2b2b46; /* Old browsers */
		background: -moz-radial-gradient(center, ellipse cover, #2b2b46 9%, #232438 53%, #222437 100%); /* FF3.6-15 */
		background: -webkit-radial-gradient(center, ellipse cover, #2b2b46 9%,#232438 53%,#222437 100%); /* Chrome10-25,Safari5.1-6 */
		background: radial-gradient(ellipse at center, #2b2b46 9%,#232438 53%,#222437 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b2b46', endColorstr='#222437',GradientType=1 );


		position: relative;
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* max-width: 100%;
		overflow-x: hidden !important; */
		font-family: 'Source Sans Pro', sans-serif;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}

	input,
	textarea {
		background-color: #dfe5f4;
		color: #373d5d;
	}

	#joined {
		background-color: #44db5e;
	}

	.App-logo {
		animation: App-logo-spin infinite 20s linear;
		height: 40vmin;
	}

	.App-header {
		background-color: #282c34;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: white;
	}

	.App-link {
		color: #61dafb;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export default GlobalStyle;
