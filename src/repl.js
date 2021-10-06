import { createInterface } from "readline";
import { lex } from "./lexer.js";

export default function repl() {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = () =>
    readline.question(">> ", (res) => {
      console.log(lex(res));
      ask();
    });

  ask();
}
