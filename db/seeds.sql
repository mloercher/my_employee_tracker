
INSERT INTO departments (name)
VALUES ("Sales");
INSERT INTO departments (name)
VALUES ("Engineering");
INSERT INTO departments (name)
VALUES ("Finance");
INSERT INTO departments (name)
VALUES ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES
  ('CEO',"200000", 1 );    
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Mark','L', 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('fgdfg','gfdg', 2, NULL);   
 