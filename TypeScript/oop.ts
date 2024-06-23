class Employee {
  constructor(
    private _empName: string, 
    private _age: number, 
    private _empJob: string
) {

  }

  get empName(){ 
    return this._empName 
  }

  set empName(val : string){ 
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      `이름 : ${this._empName}\n나이 : ${this._age}\n직업 : ${this._empJob}`
    );
  };
}

let employee1 = new Employee('kim', 20, '개발자');
employee1.empName = 'lee'; 

employee1.printEmp();
