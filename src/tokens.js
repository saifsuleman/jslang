const tokens = {
  "+": "PLUS",
  "-": "MINUS",
  "*": "MUL",
  "/": "DIV",
  "(": "LPAREN",
  ")": "RPAREN",
  "{": "LBRACE",
  "}": "RBRACE",
  "=": "ASSIGN",
  "<": "LT",
  ">": "GT",
  ",": "COMMA",
  ";": "SEMICOLON",
  "\0": "EOF",

  // keywords
  func: "FUNCTION",
  let: "LET",
  if: "IF",
};

export default tokens;
