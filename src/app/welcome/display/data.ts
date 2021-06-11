export interface Item {
  display: string;
  data: string;
}

export interface Result {
  Pan?:string,
  NetworkReferenceId?:string,
  TransactionId?:string,
  TotalTransanctionAmount?:string,
  IssuerAmount?:string
  AcquirerAmount?:string,
  TransactionDate?:string
}

export interface RowObject {
  items: Result[];
}

export interface Response{
  data: Result[];
}
