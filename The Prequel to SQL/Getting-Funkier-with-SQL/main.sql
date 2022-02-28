/* 
	This line loads the database so you have access to 
	the data. Do not change or remove this line. 
	
	You can always click "Run" to start over.
*/
.read m2.sql

/* 
	This line will print the schematics of the "Students"
	table and the "Advisors" table. You'll be able to see query used to create the tables. Keep in mind that it does not print out the data rows, but only the headers.
*/
.schema Students
.schema Advisors

/*** WRITE YOUR QUERIES BELOW ***/

-- Scenario 1 --
SELECT
    Students.FirstName,
    Students.LastName,
    Students.Advisor,
    Advisors.MeetingDay,
    Advisors.MeetingTime,
    Advisors.MeetingLocation
FROM
    Students,
    Advisors
ON
    Students.Advisor = Advisors.FirstName || ' ' || Advisors.LastName;

-- Scenario 2 --
SELECT GradeLevel, COUNT(ID) FROM Students GROUP BY GradeLevel;
SELECT FavoriteClass, COUNT(ID) FROM Students GROUP BY FavoriteClass;
SELECT
    GradeLevel,
    FavoriteClass,
    COUNT(ID)
FROM
    Students
GROUP BY
    GradeLevel,
    FavoriteClass;

-- Scenario 3 --
SELECT FirstName || ' ' || LastName AS FullName
  FROM Students
 WHERE FullName LIKE '%ika%';

SELECT FirstName || ' ' || LastName
  FROM Students
 WHERE GradeLevel = 9
   AND Grade > 95;

SELECT FirstName || ' ' || LastName
  FROM Students
 WHERE FirstName LIKE 'Bl%';

SELECT FirstName || ' ' || LastName AS FullName
  FROM Students
 WHERE FullName LIKE '%orri%';