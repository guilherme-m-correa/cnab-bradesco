const CnabProcessorFluentAPI = require("./cnabProcessorFluentAPI");
const {
  CNAB_RETURN_BRADESCO_ESPECIFICATION,
  CNAB_SHIPPING_BRADESCO_ESPECIFICATION,
  CNAB_444_ESPECIFICATION,
} = require("./constants");
class CnabProcessorFacade {
  #cnabProcessorFluentAPI;

  constructor({ content, cnabType = "shipping" }) {
    let especification;

    if (cnabType === "return") {
      especification = CNAB_RETURN_BRADESCO_ESPECIFICATION;
    }

    if (cnabType === "shipping") {
      especification = CNAB_SHIPPING_BRADESCO_ESPECIFICATION;
    }

    if (cnabType === "444") {
      especification = CNAB_444_ESPECIFICATION;
    }

    this.#cnabProcessorFluentAPI = new CnabProcessorFluentAPI({
      content,
      especification,
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
