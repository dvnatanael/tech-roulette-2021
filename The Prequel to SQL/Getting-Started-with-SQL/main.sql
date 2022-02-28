/* 
	This line loads the database so you have access to 
	the data. Do not change or remove this line. 
	
	You can always click "Run" to start over.
*/
.read m1.sql

/* 
	This line will print the schematics of the "Students"
	table. You'll be able to see query used to create the table. Keep in mind that it does not print out the data rows, but only the headers.
*/
.schema Students

/*** WRITE YOUR QUERIES BELOW ***/

-- Scenario 1 --
INSERT INTO Students (FirstName, LastName) VALUES ('Bobby', 'Di''angelo');

-- Scenario 2 --
UPDATE Students
SET Grade = 100,
    HonorRoll = 1
WHERE
    FirstName = 'Bobby'
    AND LastName = 'Di''angelo';

-- Scenario 3 --
DELETE FROM Students
WHERE FirstName = 'Sage'
    AND LastName = 'Wieser';

-- Scenario 4 --
SELECT * FROM Students
WHERE HonorRoll = 1;

-- Scenario 5 --
CREATE TABLE Members(
    ID               INTEGER NOT NULL
        PRIMARY KEY AUTOINCREMENT,
    FirstName        TEXT    NOT NULL,
    LastName         TEXT    NOT NULL,
    GradeLevel       INTEGER NOT NULL,
    MathCompetitions INTEGER
);
.schema Members