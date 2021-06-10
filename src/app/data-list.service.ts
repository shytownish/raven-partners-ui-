

export class DataListService{
  todo = [
    'Service',
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  public getList():string[]{
    return this.todo;
  }
}
