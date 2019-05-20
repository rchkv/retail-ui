export default {
  root: {
    contents: "css`\n  background: ${t.bgDefault};\n`",
    variables: [
      "bgDefault"
    ]
  },
  shadow: {
    contents: "css`\n  border: ${t.menuBorder};\n  box-shadow: ${t.menuShadow};\n`",
    variables: [
      "menuBorder",
      "menuShadow"
    ]
  }
};