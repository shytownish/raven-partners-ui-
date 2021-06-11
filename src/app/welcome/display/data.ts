export interface Item {
  display: string;
  data: string;
}

export interface Result {
  Pan?:string,
  networkReferenceId?:string,
  transactionId?:string,
  totalTransanctionAmount?:string,
  issuerAmount?:string
  AcquirerAmount?:string,
  transactiondate?:string
}

export interface RowObject {
  items: Result[];
}

