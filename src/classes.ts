abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = []; //like 'private' but also available in all classes that extend this class

    constructor(private readonly name: string) {
        console.log(Department.fiscalYear);
     }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // validate employee here //
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(`there are ${this.employees.length} employees in ${this.name}`);
        console.log(`employee names: ${this.employees}`);
    }
}

class ITDepartment extends Department {
    constructor( public admins: string[]) {
        super('IT');
    }

    describe() {
        console.log('IT department');
    }
}

const it = new ITDepartment(['Max']);
it.describe();
it.addEmployee('Frank');
it.addEmployee('Laura');
it.printEmployeeInformation();

class MarketingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('please pass in a value')
        }
        this.addReport(value);
    }

    constructor(private reports: string[] = []) {
        super('Marketing');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    addEmployee(name: string) {
        if (name === 'Adam') {
            return;
        }

        this.employees.push(name)
    }

    printReports() {
        console.log(`Marketing Reports: ${this.reports}`);
    }

    describe() {
        console.log('hello')
    }
}

const marketing = new MarketingDepartment();
marketing.addEmployee('Adam');
marketing.addEmployee('Laura');
marketing.printEmployeeInformation();
marketing.mostRecentReport = 'Analytics';
console.log(marketing.mostRecentReport);
marketing.printReports();
const employee1 = Department.createEmployee('Juliet');
console.log(employee1, Department.fiscalYear);

class AccountingDepartment extends Department {
    lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(private reports: string[] = []) {
        super('Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        } 

        this.instance = new AccountingDepartment([]);
        return this.instance;
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('please pass in a value')
        }
        this.addReport(value);
    }

    private addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    describe() {
        console.log('hello from accounting')
    }
}

const accounting = AccountingDepartment.getInstance();

accounting.describe();

