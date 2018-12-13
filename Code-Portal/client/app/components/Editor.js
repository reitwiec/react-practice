import React, { Component } from 'react';
import styled from 'styled-components';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/duotone-dark.css';

import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';

const modes = {
	cpp: 'text/x-c++src',
	java: 'text/x-java',
	python: 'text/x-python'
};

const code = `import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		System.out.println("Hello, world!");
	}
}
`;

const Editor = ({ className }) => (
	<CodeMirror
		className={className}
		value={code}
		options={{ theme: 'duotone-dark', lineNumbers: true, mode: modes.java }}
	/>
);

export default styled(Editor)`
border: 1px solid #1e202f;

`;
