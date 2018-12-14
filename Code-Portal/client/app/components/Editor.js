import React, { Component } from 'react';
import styled from 'styled-components';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/duotone-dark.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';

const languages = {
	cpp: {
		name: 'C++',
		mode: 'text/x-c++src',
		boilerplate: `#include <iostream>
	
using namespace std;

int main() {
	cout << "Hello, world!" << endl;
	return 0;
}`
	},
	java: {
		name: 'Java',
		mode: 'text/x-java',
		boilerplate: `import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		System.out.println("Hello, world!");
	}
}`
	},
	python: {
		name: 'Python',
		mode: 'text/x-python',
		boilerplate: `def main():
	print("Hello, world!")

if __name__ == '__main__':
	main()`
	}
};

class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: 'cpp'
		};
	}

	onLanguageChange = e => {
		this.setState({ language: e.target.value });
	};

	render() {
		return (
			<div className={this.props.className}>
				<div>
					<select value={this.state.value} onChange={this.onLanguageChange}>
						{Object.keys(languages).map((lang, i) => (
							<option key={i} value={lang}>
								{languages[lang].name}
							</option>
						))}
					</select>
				</div>
				<CodeMirror
					value={languages[this.state.language].boilerplate}
					options={{
						theme: 'duotone-dark',
						lineNumbers: true,
						mode: languages[this.state.language].mode
					}}
				/>
			</div>
		);
	}
}

export default styled(Editor)`
	border: 1px solid #1e202f;

	> div:first-child {
		display: flex;
		// position:absolute;
		border-left: 6px solid rgba(114, 97, 216, 1);
		padding: 0.4em;
		background-color: #3a3647;
	}

	> div:first-child > select {
		color: #e0873f;
		width: 20ch;
		font-weight:500;
		font-size: 0.8em;
		padding: 0.2em 0.4em;
		border: 1px solid #e0873f;

		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		outline: none;

		background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='#e0873f'><polygon points='0,0 100,0 50,50'/></svg>")
			no-repeat;
		background-size: 0.8em;
		background-position: calc(100% - 1ch) center;
		background-repeat: no-repeat;
		background-color: #24212b;
	}
	.CodeMirror{
		font-family: 'Inconsolata', monospace;
		font-size:0.8em;
	}
`;
