import {Item} from "./welcome/display/data";


export class DataListService{

  displayMap:Item[] = [
    {
      display: "Pan",
      data: "Pan"
    },
    {
      display: "Network Reference Id",
      data: 'networkReferenceId'
    },
    {
      display: "Transanction Id",
      data: "transactionId"
    },
    {
      display: "Total Transaction Amount",
      data: 'totalTransanctionAmount',
    },
    {
      display: "Issuer Amount",
      data: "issuerAmount"
    },
    {
      display: "Acquirer Amount",
      data: "AcquirerAmount"
    },
    {
      display: "Transaction date",
      data: "transactiondate"
    }
  ];

  public getList():Item[]{
    return this.displayMap;
  }
}
