# CNAB Bradesco

A simple utility library for Bradesco CNAB files.

## Usage

### Node.js

```js
const CnabBradesco = require("@guilhermematheuscorrea/cnab-bradesco");

const cnabBradesco = new CnabBradesco({ content: "CNAB CONTENT" });

const data = cnabBradesco.getData();
```
