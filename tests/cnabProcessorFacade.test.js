const { cnabShippingBradescoMock } = require("./mocks/index.js");
const CnabProcessorFacade = require("../src/cnabProcessorFacade.js");

describe("CnabProcessorFacade", () => {
  beforeAll(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("#getData", () => {
    const cnabProcessorFacade = new CnabProcessorFacade({
      content: cnabShippingBradescoMock.content,
    });

    const getDataFunction = jest.spyOn(
      cnabProcessorFacade,
      cnabProcessorFacade.getData.name
    );

    cnabProcessorFacade.getData();

    expect(getDataFunction).toHaveBeenCalled();
  });
});
