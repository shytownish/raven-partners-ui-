

export class DataListService{
  todo = [
    'Pan',
    'NetworkReferenceId',
    'transanctionId',
    'totalTransanctionAmount',
    'IssuerAmount',
    'AcquirerAmount',
    'TransanctionDate'
  ];

  public getList():string[]{
    return this.todo;
  }
}
