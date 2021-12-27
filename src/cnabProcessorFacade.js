const CnabProcessorFluentAPI = require("./cnabProcessorFluentAPI");
const {
  CNAB_RETURN_BRADESCO_ESPECIFICATION,
  CNAB_SHIPPING_BRADESCO_ESPECIFICATION,
} = require("./constants");
class CnabProcessorFacade {
  #cnabProcessorFluentAPI;

  constructor({ content, cnabType = "shipping" }) {
    this.#cnabProcessorFluentAPI = new CnabProcessorFluentAPI({
      content,
      especification:
        cnabType === "return"
          ? CNAB_RETURN_BRADESCO_ESPECIFICATION
          : CNAB_SHIPPING_BRADESCO_ESPECIFICATION,
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
