const { cnabReturnBradescoMock } = require("./mocks");
const CnabReturnGenerator = require("../src/cnabReturnGenerator");

describe("CnabReturnGenerator", () => {
  beforeAll(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("#generate", () => {
    const data = {
      header: {
        registerId: 0,
        returnFileId: 2,
        returnLiteral: "RETORNO",
        serviceCode: 1,
        serviceLiteral: "COBRANCA",
        companyCode: 4712706,
        companyName: "BFC FUNDO DE INVESTIMENTO EM D",
        bankCode: 237,
        bankName: "BRADESCO",
        recordDate: "2021-11-22T00:00:00.000Z",
        recordDensity: 1600000,
        bankNoticeNumber: "01738",
        creditDate: "2021-11-23T00:00:00.000Z",
        sequencialId: 1,
      },
      transactions: [
        {
          registerId: 1,
          companySubscriptionType: 2,
          companyDocumentNumber: 11507489000109,
          companyBankId: "00090296000690007",
          participantControlNumber: "1955441",
          titleId: "110006276000",
          creditApportionmentId: 0,
          wallet: 9,
          ocurrenceId: 2,
          ocurrenceDate: "2021-11-22T00:00:00.000Z",
          documentNumber: "44905",
          titleId2: "00000000110006276000",
          titleDueDate: "2021-12-03T00:00:00.000Z",
          titleValue: 485117,
          collectingBank: 237,
          collectingAgency: 2960,
          titleType: "",
          expenseValue: 0,
          otherExpensesValue: 0,
          interestOverdueOperationValue: 0,
          iofValue: 0,
          titleDiscountValue: 0,
          discountValue: 0,
          paidValue: 0,
          arrearsValue: 0,
          otherCredits: 0,
          ocurrenceReason: "",
          creditDate: null,
          paymentOrigin: null,
          isCheck: null,
          rejectReason: 0,
          registryNumber: null,
          protocolNumber: "",
          sequencialId: 2,
        },
      ],
      trailler: {
        registerId: 9,
        returnId: 2,
        registerTypeId: 1,
        bankCode: 237,
        billingTitlesQtd: 15406,
        billingTotalValue: 7555688270,
        bankNoticeNumber: 1738,
        ocurrence02RecordsQtd: 429,
        ocurrence02RecordsValue: 323912683,
        ocurrence06RecordsNetValue: 207049946,
        ocurrence06RecordsQtd: 704,
        ocurrence06RecordsValue: 206932104,
        writeOffRecordsQtd: 35,
        writeOffRecordsValue: 12241483,
        cancelledRebateRecordsQtd: 0,
        cancelledRebateRecordsValue: 0,
        updatedDueDateRecordsQtd: 1,
        updatedDueDateRecordsValue: 855274,
        grantedRebateRecordsQtd: 2,
        grantedRebateRecordsValue: 1738301,
        protestRecordsQtd: 4,
        protestRecordsValue: 274100,
        apportionmentsValue: 0,
        apportionmentsQtd: 0,
        sequencialId: 1200,
      },
    };

    const cnabReturnGenerator = new CnabReturnGenerator(data);

    const expected = cnabReturnBradescoMock.content;

    const result = cnabReturnGenerator.generate();

    console.log(result);

    expect(result).toStrictEqual(expected);
  });
});
