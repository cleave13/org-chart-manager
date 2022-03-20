INSERT INTO department (id, name)
VALUES (1, "Finance"),
       (2, "Marketing"),
       (3, "Sales"),
       (4, "Support");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Chief Executive Officer", 1000000, NULL),
       (2, "Chief Financial Officer", 180000, 1),
       (3, "Controller", 90000, 1),
       (4, "VP of Financial Planning", 90000, 1),
       (5, "Financial Analyst", 50000, 1),
       (6, "Chief Marketing Officer", 17000, 2),
       (7, "Director of Marketing", 120000, 2),
       (8, "Marketing Analyst", 45000, 2),
       (9, "VP of Sales", 130000, 3),
       (10, "Regional Sales Manager", 85000, 3),
       (11, "Account Executive", 40000, 3),
       (12, "VP of Support", 120000, 4),
       (13, "Tier 3 Support Representative", 65000, 4),
       (14, "Tier 2 Support Representative", 55000, 4),
       (15, "Tier 1 Support Representative", 40000, 4);

-- Insert CEO
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Tony", "Stark", 1, NULL);

-- Insert executives
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (2, "Bruce", "Wayne", 2, 1),
        (9, "Natasha", "Romanoff", 6, 1),
        (14, "Eddie", "Brock", 9, 1),
        (26, "Thor", "Odinson", 12, 1);

-- Insert middle management
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (3, "Bruce", "Banner", 3, 2),
        (4, "Carol", "Danvers", 4, 2),
        (10, "Susan", "Storm", 7, 9),
        (11, "Matthew", "Murdock", 7, 9),
        (15, "Lex", "Luthor", 10, 14),
        (16, "Cletus", "Kasady", 10, 14),
        (17, "Oswald", "Cobblepot", 10, 14);
        
-- Insert worker bees
        
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (5, "Damian", "Wayne", 5, 3),
        (6, "Peter", "Parker", 5, 3),
        (7, "Barry", "Allen", 5, 4),
        (8, "Clint", "Barton", 5, 4),
        (12, "Charles", "Xavier", 8, 10),
        (13, "Peter", "Quill", 8, 11),
        (18, "Wade", "Wilson", 11, 15),
        (19, "Wally", "West", 11, 15),
        (20, "Selina", "Kyle", 11, 15),
        (21, "Hank", "Pym", 11, 16),
        (22, "Sam", "Wilson", 11, 16),
        (23, "Arthur", "Curry", 11, 16),
        (24, "Hal", "Jordan", 11, 17),
        (25, "Loki", "Laufeyson", 11, 17),
        (27, "Steve", "Rogers", 13, 26),
        (28, "Miles", "Morales", 14, 26),
        (29, "Benjamin",  "Grimm", 15, 26),
        (30, "James", "Howlett", 15, 26);