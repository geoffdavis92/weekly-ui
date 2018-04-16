const THEME = {
  red: "#E91616",
  green: "#208825",
  blue: "#1470E1",
  gray: "#CCCCCC",
  grayDark: "#757575",
  text: "#333333"
};

const focusShadow = color => props => `
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px ${color};
		transition: .2s box-shadow;
`;

export { focusShadow, THEME };
