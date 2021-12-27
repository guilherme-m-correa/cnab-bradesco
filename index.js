const CnabProcessorFacade = require("./src/cnabProcessorFacade");
const CnabReturnGenerator = require("./src/cnabReturnGenerator");

(async () => {
  const content = [
    `02RETORNO01COBRANCA       00000000000004712706BFC FUNDO DE INVESTIMENTO EM D237BRADESCO       2211210160000001738                                                                                                                                                                                                                                                                          231121         000001`,
    `10211507489000109000000902960006900071955441                  00000000110006276000000000000000000000000000090222112144905     00000000110006276000031221000000048511723702960  000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                          0000000000                                                                  000002`,
    `9201237          000154060000755568827000001738          00429000323912683000207049946007040002069321040003500001224148300000000000000000000010000008552740000200000173830100004000000274100                                                                                                                                                                              00000000000000000000000         001200`,
  ].join("\n");

  const cnabProcessorFacade = new CnabProcessorFacade({
    content,
    cnabType: "return",
  });

  const result = cnabProcessorFacade.getData();

  console.log(result);
})();

module.exports = { CnabProcessorFacade, CnabReturnGenerator };
