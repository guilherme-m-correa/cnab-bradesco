const content = `01REMESSA01COBRANCA       00000000000000002324BFC FUNDOS DE INVESTIMENTOS EM237BRADESCO       130515        MX0000017                                                                                                                                                                                                                                                                                     000001
100000000000000000000009029600069000700000000000000000000692890000000029602731541P00000000002               01069289    12061500000000654730000000001N120515000000000000000000000000000000000000000000000000000000000000000212118443000160QUEIJARIA SABOR DIVINO LTDA EPP         RUA MARILIA 171, 171   JARDIM PINHEIROS             06835055BOLETO PARA PAGAMENTO SOMENTE ATE O VENCIMENTO              000002
100000000000000000000009029600069000700000000000000000000692900000000029602731542800000000002               01069290    11061500000001900000000000001N120515000000000000000000000000000000000000000000000000000000000000000257952814000143ESPETINHO CHURRA BOM LTDA.              AV.DEPUTADO EMILIO CARLOS,1533, 1533   L            02721100BOLETO PARA PAGAMENTO SOMENTE ATE O VENCIMENTO              000003
9                                                                                                                                                                                                                                                                                                                                                                                                         000067
`;

const especification = {
  header: {
    registerId: {
      startIndex: 0,
      endIndex: 1,
      type: "number",
    },
    shippingFileId: {
      startIndex: 1,
      endIndex: 2,
      type: "number",
    },
    shippingLiteral: {
      startIndex: 2,
      endIndex: 9,
      type: "string",
    },
    serviceCode: {
      startIndex: 9,
      endIndex: 11,
      type: "number",
    },
    serviceLiteral: {
      startIndex: 11,
      endIndex: 26,
      type: "string",
    },
    companyCode: {
      startIndex: 26,
      endIndex: 46,
      type: "number",
    },
    companyName: {
      startIndex: 46,
      endIndex: 76,
      type: "string",
    },
    bankCode: {
      startIndex: 76,
      endIndex: 79,
      type: "number",
    },
    bankName: {
      startIndex: 79,
      endIndex: 94,
      type: "string",
    },
    recordDate: {
      startIndex: 94,
      endIndex: 100,
      type: "date",
    },
    systemId: {
      startIndex: 108,
      endIndex: 110,
      type: "string",
    },
    shippingSequencialId: {
      startIndex: 110,
      endIndex: 117,
      type: "number",
    },
    sequencialId: {
      startIndex: 394,
      endIndex: 400,
      type: "number",
    },
  },
  transactions: {
    registerId: {
      startIndex: 0,
      endIndex: 1,
      type: "number",
    },
    debitAgency: {
      startIndex: 1,
      endIndex: 6,
      type: "number",
    },
    debitAgencyDigit: {
      startIndex: 6,
      endIndex: 7,
      type: "string",
    },
    accountLedger: {
      startIndex: 7,
      endIndex: 12,
      type: "number",
    },
    account: {
      startIndex: 12,
      endIndex: 19,
      type: "number",
    },
    accountDigit: {
      startIndex: 19,
      endIndex: 20,
      type: "string",
    },
    beneficiaryId: {
      startIndex: 20,
      endIndex: 37,
      type: "number",
    },
    participantControlNumber: {
      startIndex: 37,
      endIndex: 62,
      type: "number",
    },
    debitBankCode: {
      startIndex: 62,
      endIndex: 65,
      type: "number",
    },
    fineField: {
      startIndex: 65,
      endIndex: 66,
      type: "number",
    },
    finePercentage: {
      startIndex: 66,
      endIndex: 70,
      type: "number",
    },
    ourNumber: {
      startIndex: 70,
      endIndex: 81,
      type: "number",
    },
    ourNumberDigit: {
      startIndex: 81,
      endIndex: 82,
      type: "string",
    },
    discount: {
      startIndex: 82,
      endIndex: 92,
      type: "number",
    },
    billingEmissionCondition: {
      startIndex: 92,
      endIndex: 93,
      type: "string",
    },
    automaticDebitSlipEmissionId: {
      startIndex: 93,
      endIndex: 94,
      type: "string",
    },
    operationId: {
      startIndex: 94,
      endIndex: 104,
      type: "string",
    },
    creditApportionmentId: {
      startIndex: 104,
      endIndex: 105,
      type: "string",
    },
    addressingForAutomaticDebitNotice: {
      startIndex: 105,
      endIndex: 106,
      type: "number",
    },
    ocorrenceId: {
      startIndex: 109,
      endIndex: 110,
      type: "number",
    },
    documentNumber: {
      startIndex: 110,
      endIndex: 120,
      type: "number",
    },
    titleDueDate: {
      startIndex: 120,
      endIndex: 126,
      type: "date",
    },
    titleValue: {
      startIndex: 126,
      endIndex: 139,
      type: "number",
    },
    billingBank: {
      startIndex: 139,
      endIndex: 142,
      type: "number",
    },
    depositAgency: {
      startIndex: 142,
      endIndex: 147,
      type: "number",
    },
    titleType: {
      startIndex: 147,
      endIndex: 149,
      type: "number",
    },
    id: {
      startIndex: 149,
      endIndex: 150,
      type: "string",
    },
    titleEmissionDate: {
      startIndex: 150,
      endIndex: 156,
      type: "date",
    },
    firstInstruction: {
      startIndex: 156,
      endIndex: 158,
      type: "number",
    },
    secondInstruction: {
      startIndex: 158,
      endIndex: 160,
      type: "number",
    },
    arrearsPerDayValue: {
      startIndex: 160,
      endIndex: 173,
      type: "number",
    },
    discountLimitDate: {
      startIndex: 173,
      endIndex: 179,
      type: "date",
    },
    discountValue: {
      startIndex: 179,
      endIndex: 192,
      type: "number",
    },
    iofValue: {
      startIndex: 192,
      endIndex: 205,
      type: "number",
    },
    rebateValue: {
      startIndex: 205,
      endIndex: 218,
      type: "number",
    },
    payerType: {
      startIndex: 218,
      endIndex: 220,
      type: "number",
    },
    payerDocumentNumber: {
      startIndex: 220,
      endIndex: 234,
      type: "string",
    },
    payerName: {
      startIndex: 234,
      endIndex: 274,
      type: "string",
    },
    payerFullAddress: {
      startIndex: 274,
      endIndex: 314,
      type: "string",
    },
    firstMessage: {
      startIndex: 314,
      endIndex: 326,
      type: "string",
    },
    payerZipCode: {
      startIndex: 326,
      endIndex: 331,
      type: "string",
    },
    payerZipCodeSuffix: {
      startIndex: 331,
      endIndex: 334,
      type: "string",
    },
    guarantorOrSecondMessage: {
      startIndex: 334,
      endIndex: 394,
      type: "string",
    },
    sequencialId: {
      startIndex: 394,
      endIndex: 400,
      type: "number",
    },
  },
  trailler: {
    registerId: {
      startIndex: 0,
      endIndex: 1,
      type: "number",
    },
    sequencialId: {
      startIndex: 394,
      endIndex: 400,
      type: "number",
    },
  },
};

export default { content, especification };
