INSERT INTO departments (name)
VALUES ("Executive");
INSERT INTO departments (name)
VALUES ("Sales");
INSERT INTO departments (name)
VALUES ("Finance");
INSERT INTO departments (name)
VALUES ("Legal");
INSERT INTO departments (name)
VALUES ("Engineering");


INSERT INTO roles (title, salary, department_id)
VALUES
  ('CEO',"200000", 1 ),
  ('Sales Manager',"100000", 2),
  ('CFO',"100000", 3),
  ('Head Lawyer','100000', 4),
  ('Head Engineer','100000',5);
  
  

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ron','E', 1, NULL),
  ('Harrison','F', 2, NULL),
  ('Andrew','B', 3, NULL),
  ('Jonathan','G', 4, NULL),
  ('Mark','L', 5, NULL);