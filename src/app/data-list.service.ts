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
      display: "Transaction Id",
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
