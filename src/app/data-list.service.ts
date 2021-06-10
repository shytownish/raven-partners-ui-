

export class DataListService{
  todo = [
    'Pan',
    'NetworkReferenceId',
    'transanctionId',
    'totalTransanctionAmount',
    'IssuerAmount',
    'AcquirerAmount'
  ];

  public getList():string[]{
    return this.todo;
  }
}
