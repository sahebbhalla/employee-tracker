INSERT INTO department(id,name)
VALUES
(1,"Front-End"),
(2,"Accounts");
INSERT INTO  roles(id,title,salary,department_id)
VALUES
(1,"Team Lead Front End",20000.00,1),
(2,"HTML Developer",20000.00,1),
(3,"CSS Develoepr",20000.00,1),
(4,"Team Lead Accountants",20000.00,2),
(5,"CRA specialist",20000.00,2);

INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
VALUES
(1,"James","Web",1,NULL),
(2,"Charles","Vandike",2,NULL),
(3,"Jonathan","Marvel",4,NULL);



