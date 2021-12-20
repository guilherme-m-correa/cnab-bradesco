class CnabProcessorFluentAPI {
  #content;
  #especification;

  constructor({ content, especification }) {
    this.#content = content;
    this.#especification = especification;
  }

  extractData() {
    const [header, ...fileWithoutHeader] = this.#content.split("\n");

    const transactions = fileWithoutHeader.filter((line) =>
      line.startsWith("1")
    );

    const trailler = fileWithoutHeader.find((line) => line.startsWith("9"));

    const headerKeys = Object.keys(this.#especification.header);

    const transactionsKeys = Object.keys(this.#especification.transactions);

    const traillerKeys = Object.keys(this.#especification.trailler);

    const headerData = headerKeys.reduce((acc, key) => {
      const { startIndex, endIndex } = this.#especification.header[key];

      const value = header.slice(startIndex, endIndex);

      return {
        ...acc,
        [key]: value,
      };
    }, {});

    const transactionsData = transactions.map((transaction) => {
      const transactionData = transactionsKeys.reduce((acc, key) => {
        const { startIndex, endIndex } = this.#especification.transactions[key];

        const value = transaction.slice(startIndex, endIndex);

        return {
          ...acc,
          [key]: value,
        };
      }, {});

      return transactionData;
    });

    const traillerData = traillerKeys.reduce((acc, key) => {
      const { startIndex, endIndex } = this.#especification.trailler[key];

      const value = trailler.slice(startIndex, endIndex);

      return {
        ...acc,
        [key]: value,
      };
    }, {});

    this.#content = {
      header: headerData,
      transactions: transactionsData,
      trailler: traillerData,
    };

    return this;
  }

  removeEmptySpaces() {
    const header = this.#content.header;

    const headerWithouEmptySpaces = Object.keys(header).reduce((acc, key) => {
      const value = header[key].replace(/\s/g, "");

      return {
        ...acc,
        [key]: value,
      };
    }, {});

    const transactionsWithouEmptySpaces = this.#content.transactions.map(
      (transaction) => {
        const transactionWithouEmptySpaces = Object.keys(transaction).reduce(
          (acc, key) => {
            const value = transaction[key].replace(/\s/g, "");

            return {
              ...acc,
              [key]: value,
            };
          },
          {}
        );

        return transactionWithouEmptySpaces;
      }
    );

    const trailler = this.#content.trailler;

    const traillerWithouEmptySpaces = Object.keys(trailler).reduce(
      (acc, key) => {
        const value = trailler[key].replace(/\s/g, "");

        return {
          ...acc,
          [key]: value,
        };
      },
      {}
    );

    this.#content = {
      header: headerWithouEmptySpaces,
      transactions: transactionsWithouEmptySpaces,
      trailler: traillerWithouEmptySpaces,
    };

    return this;
  }

  #parseDate(dateStr) {
    const day = dateStr.slice(0, 2);
    const month = dateStr.slice(2, 4);
    const year = dateStr.slice(4, 8);

    const fullYear = `20${year}`;

    const value = `${fullYear}-${month}-${day}`;

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return null;
    }

    return date.toISOString();
  }

  #parseNumber(numberStr) {
    const number = parseInt(numberStr);

    if (isNaN(number)) {
      return null;
    }

    return number;
  }

  parseFields() {
    const header = this.#content.header;

    const headerParsed = Object.keys(header).reduce((acc, key) => {
      const { type } = this.#especification.header[key];

      if (type === "date") {
        const value = this.#parseDate(header[key]);

        return {
          ...acc,
          [key]: value,
        };
      }

      if (type === "number") {
        const value = this.#parseNumber(header[key]);

        return {
          ...acc,
          [key]: value,
        };
      }

      return {
        ...acc,
        [key]: header[key],
      };
    }, {});

    const transactions = this.#content.transactions;

    const transactionsParsed = transactions.map((transaction) => {
      const transactionParsed = Object.keys(transaction).reduce((acc, key) => {
        const { type } = this.#especification.transactions[key];

        if (type === "date") {
          const value = this.#parseDate(transaction[key]);

          return {
            ...acc,
            [key]: value,
          };
        }

        if (type === "number") {
          const value = this.#parseNumber(transaction[key]);

          return {
            ...acc,
            [key]: value,
          };
        }

        return {
          ...acc,
          [key]: transaction[key],
        };
      }, {});

      return transactionParsed;
    });

    const trailler = this.#content.trailler;

    const traillerParsed = Object.keys(trailler).reduce((acc, key) => {
      return {
        ...acc,
        [key]: this.#parseNumber(trailler[key]),
      };
    }, {});

    this.#content = {
      header: headerParsed,
      transactions: transactionsParsed,
      trailler: traillerParsed,
    };

    return this;
  }

  build() {
    return this.#content;
  }
}

module.exports = CnabProcessorFluentAPI;
