function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const { type } = employee;
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience,
      type,
    };

    switch (type) {
      case 'manager':
        data.portfolio = employee.getMBAProjects();
        break;
      case 'developer':
        data.githubLink = employee.getGithubLink();
        break;
      case 'sales':
        data.salesTargets = employee.getSalesTargets();
        break;
    }

    render(data);
  });
}

function render(data) {
  const { type, expectedSalary, experience } = data;
  console.log(`Employee Data (${type}):`);
  console.log('Expected Salary:', expectedSalary);
  console.log('Experience:', experience);

  switch (type) {
    case 'manager':
      console.log('Portfolio:', data.portfolio);
      break;
    case 'developer':
      console.log('GitHub Link:', data.githubLink);
      break;
    case 'sales':
      console.log('Sales Targets:', data.salesTargets);
      break;
    default:
      console.log('Unknown employee type');
  }

  console.log('---------------------');
}

// Define the Employee class
class Employee {
  constructor(type, name) {
    // TODO: add type check to be 'manager', 'developer' or 'sales'
    this.type = type;
    this.name = name;
  }

  calculateExpectedSalary() {
    // Default implementation, can be overridden in subclasses
    return 0;
  }

  getExperience() {
    // Default implementation, can be overridden in subclasses
    return 0;
  }

  getSalesTargets() {
    // Default implementation, can be overridden in subclasses
    return '';
  }

  getGithubLink() {
    // Default implementation, can be overridden in subclasses
    return '';
  }

  getMBAProjects() {
    // Default implementation, can be overridden in subclasses
    return [];
  }
}

// Manager subclass
class Manager extends Employee {
  constructor(name, MBAProjects) {
    super('manager', name);
    this.MBAProjects = MBAProjects;
  }

  calculateExpectedSalary() {
    // Manager-specific implementation
    return 80000;
  }

  getExperience() {
    // Manager-specific implementation
    return 5;
  }

  getMBAProjects() {
    return this.MBAProjects;
  }
}

// Developer subclass
class Developer extends Employee {
  constructor(name, githubLink) {
    super('developer', name);
    this.githubLink = githubLink;
  }

  calculateExpectedSalary() {
    // Developer-specific implementation
    return 60000;
  }

  getExperience() {
    // Developer-specific implementation
    return 3;
  }

  getGithubLink() {
    return this.githubLink;
  }
}

// Sales subclass
class Sales extends Employee {
  constructor(name, salesTargets) {
    super('sales', name);
    this.salesTargets = salesTargets;
  }

  calculateExpectedSalary() {
    // Sales-specific implementation
    return 70000;
  }

  getExperience() {
    // Sales-specific implementation
    return 4;
  }

  getSalesTargets() {
    return this.salesTargets;
  }
}

// Sample array of employees
const employees = [
  new Manager('John Manager', ['Project A', 'Project B']),
  new Developer('Alice Developer', 'github.com/alice'),
  new Sales('Bob Sales', ['Meet sales targets consistently', 'Sale 24/7']),
  new Manager('Jane Manager', ['Project C', 'Project D']),
  new Developer('Charlie Developer', 'github.com/charlie'),
  new Manager('Sam Manager', ['Project E', 'Project F']),
  new Developer('Eva Developer', 'github.com/eva'),
];

// Example usage of the showEmployeeList function
showEmployeeList(employees);
