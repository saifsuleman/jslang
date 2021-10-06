import json

tokens = {
    "PLUS": "+",
    "MINUS": "-",
    "MUL": "*",
    "DIV": "/",
    "LPAREN": "(",
    "RPAREN": ")",
    "LBRACE": "{",
    "RBRACE": "}",
    "ASSIGN": "=",
    "LT": "<",
    "GT": ">",
    "COMMA": ",",
    "SEMICOLON": ";",
    "EQ": "==",
    "NOTEQ": "!=",
    "EOF": "\0"
}

new = {}

for key in tokens:
    new[tokens[key]] = key

print(json.dumps(new, indent = 2))