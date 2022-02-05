# MY_EMPLOYEE_TRACKER

MY_EMPLOYEE_TRACKER is CLI program to build, edit and view your company's employees and department structure. Users can add employees, departments and roles as well as edit current ones. 

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Screen Shots

![CLI-starting-point](start.png)
![View-all-depts](depts.png)

## Getting Started

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

**Important**: You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.

You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

* `department`

  * `id`: `INT PRIMARY KEY`

  * `name`: `VARCHAR(30)` to hold department name

* `role`

  * `id`: `INT PRIMARY KEY`

  * `title`: `VARCHAR(30)` to hold role title

  * `salary`: `DECIMAL` to hold role salary

  * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

  * `id`: `INT PRIMARY KEY`

  * `first_name`: `VARCHAR(30)` to hold employee first name

  * `last_name`: `VARCHAR(30)` to hold employee last name

  * `role_id`: `INT` to hold reference to employee role

  * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
