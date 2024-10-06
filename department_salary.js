// Task 1: Create a Department Structure

const company = 
{
    departments: 
    [
        {
       departmentName: 'Engineering',
       employees: 
         [
            {
                name: 'Alice',
                salary: 100000,
                subordinates: 
                [
                    {
                    name: 'Bob',
                    salary: 80000,
                    subordinates:
                    [
                        {
                            name: 'Charlie',
                            salary: 60000,
                            subordinates: []
                        }
                    ]
                    }
                ]
            },
            {
                name: 'David',
                salary: 90000,
                subordinates: []
            }
         ] 
        },
        {
            departmentName: 'Sales',
            employees: 
            [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: 
                    [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }



    ]
}

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) 
{
    let totalSalary = 0;

    function addSubordinateSalary(employee)
    {
        let salary = employee.salary;
        employee.subordinates.forEach(subordinate => {salary += calculateEmployeeSalary(subordinate)});

        return salary;
    }

    department.employees.forEach(employee => {totalSalary += addSubordinateSalary(employee)});

    return totalSalary;
}

// Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company)
{
    let companySalary = 0;

    company.departments.forEach(department => 
        {
            const departmentSalary = calculateDepartmentSalary(deparment);
            totalCompanySalary += departmentSalary;
            
        });
        console.log('Company Salary: ' + totalCompanySalary);
        
}