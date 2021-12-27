const { CNAB_RETURN_BRADESCO_ESPECIFICATION } = require("./constants");

class CnabReturnGenerator {
  #header;
  #transactions;
  #trailler;

  constructor({ header, transactions, trailler }) {
    this.#header = header;
    this.#transactions = transactions;
    this.#trailler = trailler;
  }

  #formatField(value, fieldEspecification) {
    if (fieldEspecification.type === "date") {
      const date = new Date(value);

      if (isNaN(date.getTime())) {
        return "000000";
      }

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const fullYear = date.getFullYear();
      const partialYear = fullYear.toString().slice(1, -1);

      return `${day}${month}${partialYear}`;
    }

    if (fieldEspecification.type === "number") {
      const fieldEspecificationLength =
        fieldEspecification.endIndex - fieldEspecification.startIndex;

      if (!value) {
        return "".padStart(fieldEspecificationLength, "0");
      }

      return value.toString().padStart(fieldEspecificationLength, "0");
    }

    if (fieldEspecification.type === "string") {
      const fieldEspecificationlength =
        fieldEspecification.endIndex - fieldEspecification.startIndex;

      if (!value) {
        return "".padStart(fieldEspecificationlength, " ");
      }

      if (value.length > fieldEspecificationlength) {
        return value.slice(0, fieldEspecificationlength);
      }

      return value.toString().padEnd(fieldEspecificationlength, " ");
    }

    return value;
  }

  generate() {
    let header = "".padEnd(400, " ");

    for (const [key, value] of Object.entries(this.#header)) {
      const fieldEspecification =
        CNAB_RETURN_BRADESCO_ESPECIFICATION.header[key];
      const startIndex = fieldEspecification.startIndex;
      const endIndex = fieldEspecification.endIndex;

      header =
        header.slice(0, startIndex) +
        this.#formatField(value, fieldEspecification) +
        header.slice(endIndex + 1);
    }

    const transactions = this.#transactions.map((transaction) => {
      let transactionLine = "".padEnd(400, " ");

      const zeros = [
        {
          startIndex: 17,
          endIndex: 20,
        },
        {
          startIndex: 62,
          endIndex: 70,
        },
        {
          startIndex: 82,
          endIndex: 92,
        },
        {
          startIndex: 92,
          endIndex: 104,
        },
        {
          startIndex: 105,
          endIndex: 107,
        },
      ];

      zeros.forEach((zero) => {
        const zeroStr = "".padStart(zero.endIndex - zero.startIndex + 1, "0");

        transactionLine =
          transactionLine.slice(0, zero.startIndex) +
          zeroStr +
          transactionLine.slice(zero.endIndex + 1);
      });

      for (const [key, value] of Object.entries(transaction)) {
        const fieldEspecification =
          CNAB_RETURN_BRADESCO_ESPECIFICATION.transactions[key];
        const startIndex = fieldEspecification.startIndex;
        const endIndex = fieldEspecification.endIndex;

        transactionLine =
          transactionLine.slice(0, startIndex) +
          this.#formatField(value, fieldEspecification) +
          transactionLine.slice(endIndex + 1);
      }

      return transactionLine;
    });

    let trailler = "".padEnd(400, " ");

    for (const [key, value] of Object.entries(this.#trailler)) {
      const fieldEspecification =
        CNAB_RETURN_BRADESCO_ESPECIFICATION.trailler[key];
      const startIndex = fieldEspecification.startIndex;
      const endIndex = fieldEspecification.endIndex;

      trailler =
        trailler.slice(0, startIndex) +
        this.#formatField(value, fieldEspecification) +
        trailler.slice(endIndex + 1);
    }

    return `${header}\n${transactions.join("\n")}\n${trailler}`;
  }
}

module.exports = CnabReturnGenerator;
