import React from 'react'
import styled from 'styled-components'

const THEME = {
	fontFamily: "'Droid Sans','Roboto', sans-serif",
	red: '#E91616',
	green: '#208825',
	blue: '#1470E1',
	gray: '#CCCCCC',
	text: '#333333'
}

const Button = styled.button`
	background-color: ${THEME.blue};
	border: none;
	border-radius: 2px;
	color: #fff;
	display: block;
	font-family: ${THEME.fontFamily};
	font-size: .9em;
	padding: .5em;
	width: 100%;
`

export {
	THEME,
	Button	
}