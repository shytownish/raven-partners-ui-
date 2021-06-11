import {Item} from "./welcome/display/data";


export class DataListService{

  displayMap:Item[] = [
    {
      display: "Pan",
      data: "Pan"
    },
    {
      display: "Network Reference Id",
      data: 'NetworkReferenceId'
    },
    {
      display: "Transaction Id",
      data: "TransactionId"
    },
    {
      display: "Total Transaction Amount",
      data: 'TotalTransanctionAmount',
    },
    {
      display: "Issuer Amount",
      data: "IssuerAmount"
    },
    {
      display: "Acquirer Amount",
      data: "AcquirerAmount"
    },
    {
      display: "Transaction Date",
      data: "TransactionDate"
    }
  ];

  getNoTDisplayName(done:string[]):string[]{
    let fo:string[] = [];

    done.forEach((x)=>{
      let i =  this.displayMap.find((y)=>{
        return y.display === x;
      })
      fo.push(i.data);
    })

    return fo;
  }

  public getList():Item[]{
    return this.displayMap;
  }
}
