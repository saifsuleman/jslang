import tokens from "./tokens.js";
import { isWhitespace, isAlphanumeric } from "./utils.js";

export default class Lexer {
  constructor(input) {
    this.input = input;
    this.position = 0;
    this.char = this.readCharAt(this.position);
  }

  nextToken() {
    while (isWhitespace(this.char)) {
      this.readChar();
    }

    return this.resolveToken();
  }

  resolveToken() {
    switch (this.char) {
      case '"':
      case "'":
      case "`":
        this.readChar();
        return { type: "STRING", literal: this.resolveString(this.char) };
      case "=":
        if (this.peekChar() == "=") {
          this.readChar();
          this.readChar();

          return { type: "EQ", literal: "==" };
        }
        break;
      case "!":
        if (this.peekChar() == "=") {
          this.readChar();
          this.readChar();
          return { type: "NOTEQ", literal: "!=" };
        }
        break;
    }

    if (this.char in tokens) {
      const token = { type: tokens[this.char], literal: this.char };
      this.readChar();
      return token;
    }

    if (!isAlphanumeric(this.char)) {
      const token = { type: "ILLEGAL", literal: this.char };
      this.readChar();
      return token;
    }

    const pos = this.position;
    while (isAlphanumeric(this.char)) {
      this.readChar();
    }

    let type = "IDENT";
    const literal =
      this.position > pos ? this.input.slice(pos, this.position) : this.char;

    if (literal in tokens) {
      type = tokens[literal];
    }

    return { type, literal };
  }

  resolveString(quote) {
    const pos = this.position;

    while (this.char !== quote) {
      this.readChar();
    }

    return this.input.slice(pos, this.position);
  }

  readCharAt(position) {
    return position < this.input.length ? this.input[position] : "\0";
  }

  peekChar() {
    return this.readCharAt(this.position + 1);
  }

  readChar() {
    this.char = this.peekChar();
    this.position++;
  }
}

export function lex(input) {
  const lexer = new Lexer(input);

  let token = lexer.nextToken();
  const res = [];

  while (token && token.type != "EOF") {
    res.push(token);
    token = lexer.nextToken();
  }

  return res;
}
