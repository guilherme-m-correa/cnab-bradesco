const CNAB_SHIPPING_BRADESCO_ESPECIFICATION = {
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
      type: "string",
    },
    participantControlNumber: {
      startIndex: 37,
      endIndex: 62,
      type: "string",
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
    discountPerDay: {
      startIndex: 82,
      endIndex: 92,
      type: "number",
    },
    billingEmissionCondition: {
      startIndex: 92,
      endIndex: 93,
      type: "number",
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
      type: "string",
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
      type: "number",
    },
    payerZipCodeSuffix: {
      startIndex: 331,
      endIndex: 334,
      type: "number",
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

const CNAB_RETURN_BRADESCO_ESPECIFICATION = {
  header: {
    registerId: {
      startIndex: 0,
      endIndex: 1,
      type: "number",
    },
    returnFileId: {
      startIndex: 1,
      endIndex: 2,
      type: "number",
    },
    returnLiteral: {
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
    recordDensity: {
      startIndex: 100,
      endIndex: 108,
      type: "number",
    },
    bankNoticeNumber: {
      startIndex: 108,
      endIndex: 113,
      type: "string",
    },
    creditDate: {
      startIndex: 379,
      endIndex: 385,
      type: "date",
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
    companySubscriptionType: {
      startIndex: 1,
      endIndex: 3,
      type: "number",
    },
    companyDocumentNumber: {
      startIndex: 3,
      endIndex: 17,
      type: "number",
    },
    companyBankId: {
      startIndex: 20,
      endIndex: 37,
      type: "string",
    },
    participantControlNumber: {
      startIndex: 37,
      endIndex: 62,
      type: "string",
    },
    titleId: {
      startIndex: 70,
      endIndex: 82,
      type: "string",
    },
    creditApportionmentId: {
      startIndex: 104,
      endIndex: 105,
      type: "number",
    },
    wallet: {
      startIndex: 107,
      endIndex: 108,
      type: "number",
    },
    ocurrenceId: {
      startIndex: 108,
      endIndex: 110,
      type: "number",
    },
    ocurrenceDate: {
      startIndex: 110,
      endIndex: 116,
      type: "date",
    },
    documentNumber: {
      startIndex: 116,
      endIndex: 126,
      type: "string",
    },
    titleId2: {
      startIndex: 126,
      endIndex: 146,
      type: "string",
    },
    titleDueDate: {
      startIndex: 146,
      endIndex: 152,
      type: "date",
    },
    titleValue: {
      startIndex: 152,
      endIndex: 165,
      type: "number",
    },
    collectingBank: {
      startIndex: 165,
      endIndex: 168,
      type: "number",
    },
    collectingAgency: {
      startIndex: 168,
      endIndex: 173,
      type: "number",
    },
    titleType: {
      startIndex: 173,
      endIndex: 175,
    },
    expenseValue: {
      startIndex: 175,
      endIndex: 188,
      type: "number",
    },
    otherExpensesValue: {
      startIndex: 188,
      endIndex: 201,
      type: "number",
    },
    interestOverdueOperationValue: {
      startIndex: 201,
      endIndex: 214,
      type: "number",
    },
    iofValue: {
      startIndex: 214,
      endIndex: 227,
      type: "number",
    },
    titleDiscountValue: {
      startIndex: 227,
      endIndex: 240,
      type: "number",
    },
    discountValue: {
      startIndex: 240,
      endIndex: 253,
      type: "number",
    },
    paidValue: {
      startIndex: 253,
      endIndex: 266,
      type: "number",
    },
    arrearsValue: {
      startIndex: 266,
      endIndex: 279,
      type: "number",
    },
    otherCredits: {
      startIndex: 279,
      endIndex: 292,
      type: "number",
    },
    ocurrenceReason: {
      startIndex: 294,
      endIndex: 295,
      type: "string",
    },
    creditDate: {
      startIndex: 295,
      endIndex: 301,
      type: "date",
    },
    paymentOrigin: {
      startIndex: 301,
      endIndex: 304,
      type: "number",
    },
    isCheck: {
      startIndex: 314,
      endIndex: 318,
      type: "number",
    },
    rejectReason: {
      startIndex: 318,
      endIndex: 328,
      type: "number",
    },
    registryNumber: {
      startIndex: 368,
      endIndex: 370,
      type: "number",
    },
    protocolNumber: {
      startIndex: 370,
      endIndex: 380,
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
    returnId: {
      startIndex: 1,
      endIndex: 2,
      type: "number",
    },
    registerTypeId: {
      startIndex: 2,
      endIndex: 4,
      type: "number",
    },
    bankCode: {
      startIndex: 4,
      endIndex: 7,
      type: "number",
    },
    billingTitlesQtd: {
      startIndex: 17,
      endIndex: 25,
      type: "number",
    },
    billingTotalValue: {
      startIndex: 25,
      endIndex: 39,
      type: "number",
    },
    bankNoticeNumber: {
      startIndex: 39,
      endIndex: 47,
      type: "string",
    },
    ocurrence02RecordsQtd: {
      startIndex: 57,
      endIndex: 62,
      type: "number",
    },
    ocurrence02RecordsValue: {
      startIndex: 62,
      endIndex: 74,
      type: "number",
    },
    ocurrence06RecordsNetValue: {
      startIndex: 74,
      endIndex: 86,
      type: "number",
    },
    ocurrence06RecordsQtd: {
      startIndex: 86,
      endIndex: 91,
      type: "number",
    },
    ocurrence06RecordsValue: {
      startIndex: 91,
      endIndex: 103,
      type: "number",
    },
    writeOffRecordsQtd: {
      startIndex: 103,
      endIndex: 108,
      type: "number",
    },
    writeOffRecordsValue: {
      startIndex: 108,
      endIndex: 120,
      type: "number",
    },
    cancelledRebateRecordsQtd: {
      startIndex: 120,
      endIndex: 125,
      type: "number",
    },
    cancelledRebateRecordsValue: {
      startIndex: 125,
      endIndex: 137,
      type: "number",
    },
    updatedDueDateRecordsQtd: {
      startIndex: 137,
      endIndex: 142,
      type: "number",
    },
    updatedDueDateRecordsValue: {
      startIndex: 142,
      endIndex: 154,
      type: "number",
    },
    grantedRebateRecordsQtd: {
      startIndex: 154,
      endIndex: 159,
      type: "number",
    },
    grantedRebateRecordsValue: {
      startIndex: 159,
      endIndex: 171,
      type: "number",
    },
    protestRecordsQtd: {
      startIndex: 171,
      endIndex: 176,
      type: "number",
    },
    protestRecordsValue: {
      startIndex: 176,
      endIndex: 188,
      type: "number",
    },
    apportionmentsValue: {
      startIndex: 362,
      endIndex: 377,
      type: "number",
    },
    apportionmentsQtd: {
      startIndex: 377,
      endIndex: 385,
      type: "number",
    },
    sequencialId: {
      startIndex: 394,
      endIndex: 400,
      type: "number",
    },
  },
};

module.exports = {
  CNAB_SHIPPING_BRADESCO_ESPECIFICATION,
  CNAB_RETURN_BRADESCO_ESPECIFICATION,
};
