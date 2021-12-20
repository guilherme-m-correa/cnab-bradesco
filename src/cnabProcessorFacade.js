const CnabProcessorFluentAPI = require("./cnabProcessorFluentAPI.js");
const { CNAB_SHIPPING_BRADESCO_ESPECIFICATION } = require("./constants.js");

class CnabProcessorFacade {
  #cnabProcessorFluentAPI;

  constructor({ content }) {
    this.#cnabProcessorFluentAPI = new CnabProcessorFluentAPI({
      content,
      especification: CNAB_SHIPPING_BRADESCO_ESPECIFICATION,
    });
  }

  getData() {
    return this.#cnabProcessorFluentAPI
      .extractData()
      .removeEmptySpaces()
      .parseFields()
      .build();
  }
}

module.exports = CnabProcessorFacade;
