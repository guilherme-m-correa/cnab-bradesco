import { describe, test, expect, beforeAll, jest } from "@jest/globals";

import { cnabShippingBradescoMock } from "./mocks/index.js";
import CnabProcessorFacade from "../src/cnabProcessorFacade.js";

describe("CnabProcessorFacade", () => {
  beforeAll(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("#getData", () => {
    const cnabProcessorFacade = new CnabProcessorFacade({
      content: cnabShippingBradescoMock.content,
    });

    const result = cnabProcessorFacade.getData();

    const expected = {
      header: {
        bankCode: "237",
        bankName: "BRADESCO",
        companyCode: "00000000000000002324",
        companyName: "BFCFUNDOSDEINVESTIMENTOSEM",
        recordDate: "130515",
        registerId: "0",
        sequencialId: "000001",
        serviceCode: "01",
        serviceLiteral: "COBRANCA",
        shippingFileId: "1",
        shippingLiteral: "REMESSA",
        shippingSequencialId: "0000017",
        systemId: "MX",
      },
      transactions: [
        {
          account: "0000000",
          accountDigit: "0",
          accountLedger: "00000",
          addressingForAutomaticDebitNotice: "",
          arrearsPerDayValue: "0000000000000",
          automaticDebitSlipEmissionId: "",
          beneficiaryId: "00090296000690007",
          billingBank: "000",
          billingEmissionCondition: "2",
          creditApportionmentId: "",
          debitAgency: "00000",
          debitAgencyDigit: "0",
          debitBankCode: "000",
          depositAgency: "00000",
          discount: "0000000000",
          discountLimitDate: "000000",
          discountValue: "0000000000000",
          documentNumber: "069289",
          fineField: "0",
          finePercentage: "0000",
          firstInstruction: "00",
          firstMessage: "",
          guarantorOrSecondMessage: "BOLETOPARAPAGAMENTOSOMENTEATEOVENCIMENTO",
          id: "N",
          iofValue: "0000000000000",
          ocorrenceId: "1",
          operationId: "",
          ourNumber: "29602731541",
          ourNumberDigit: "P",
          participantControlNumber: "0000000000000000000069289",
          payerDocumentNumber: "12118443000160",
          payerFullAddress: "RUAMARILIA171,171JARDIMPINHEIROS",
          payerName: "QUEIJARIASABORDIVINOLTDAEPP",
          payerType: "02",
          payerZipCode: "06835",
          payerZipCodeSuffix: "055",
          rebateValue: "0000000000000",
          registerId: "1",
          secondInstruction: "00",
          sequencialId: "000002",
          titleDueDate: "120615",
          titleEmissionDate: "120515",
          titleType: "01",
          titleValue: "0000000065473",
        },
        {
          account: "0000000",
          accountDigit: "0",
          accountLedger: "00000",
          addressingForAutomaticDebitNotice: "",
          arrearsPerDayValue: "0000000000000",
          automaticDebitSlipEmissionId: "",
          beneficiaryId: "00090296000690007",
          billingBank: "000",
          billingEmissionCondition: "2",
          creditApportionmentId: "",
          debitAgency: "00000",
          debitAgencyDigit: "0",
          debitBankCode: "000",
          depositAgency: "00000",
          discount: "0000000000",
          discountLimitDate: "000000",
          discountValue: "0000000000000",
          documentNumber: "069290",
          fineField: "0",
          finePercentage: "0000",
          firstInstruction: "00",
          firstMessage: "",
          guarantorOrSecondMessage: "BOLETOPARAPAGAMENTOSOMENTEATEOVENCIMENTO",
          id: "N",
          iofValue: "0000000000000",
          ocorrenceId: "1",
          operationId: "",
          ourNumber: "29602731542",
          ourNumberDigit: "8",
          participantControlNumber: "0000000000000000000069290",
          payerDocumentNumber: "57952814000143",
          payerFullAddress: "AV.DEPUTADOEMILIOCARLOS,1533,1533L",
          payerName: "ESPETINHOCHURRABOMLTDA.",
          payerType: "02",
          payerZipCode: "02721",
          payerZipCodeSuffix: "100",
          rebateValue: "0000000000000",
          registerId: "1",
          secondInstruction: "00",
          sequencialId: "000003",
          titleDueDate: "110615",
          titleEmissionDate: "120515",
          titleType: "01",
          titleValue: "0000000190000",
        },
      ],
      trailler: {
        registerId: "9",
        sequencialId: "000067",
      },
    };

    expect(result).toStrictEqual(expected);
  });
});
