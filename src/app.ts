class Department {
    private employees: string[] = [];

    constructor(private readonly id: number, private name: string) { }

    describe(this: Department) {
        console.log(`${this.name} department - id ${this.id}`)
    }

    addEmployee(employee: string) {
        // validate employee here //
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(`there are ${this.employees.length} employees in ${this.name}`);
        console.log(`employee names: ${this.employees}`);
    }
}

const accounting = new Department(32, 'Accounting');
accounting.describe();
accounting.addEmployee('Adam');
accounting.addEmployee('Maya');
accounting.printEmployeeInformation();

class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
    }
}

const it = new ITDepartment(12, ['Max']);
it.describe();
it.addEmployee('Frank');
it.addEmployee('Laura');
it.printEmployeeInformation();

class MarketingDepartment extends Department {
    private reports: string[] = [];

    constructor() {
        super(63, 'Marketing');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(`Marketing Reports: ${this.reports}`);
    }
}

const marketing = new MarketingDepartment();

marketing.addReport('Analytics');
marketing.printReports();
