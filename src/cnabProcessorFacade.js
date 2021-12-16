import CnabProcessorFluentAPI from "./cnabProcessorFluentAPI.js";
import { CNAB_SHIPPING_BRADESCO_ESPECIFICATION } from "./constants.js";

export default class CnabProcessorFacade {
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
      .build();
  }
}
