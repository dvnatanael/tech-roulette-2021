/* 
	This line loads the database so you have access to 
	the data. Do not change or remove this line. 
	
	You can always click "Run" to start over.
*/
.read m3.sql

/*
	These lines will print the schematics of the table and show you a few rows of the data as examples. Keep in mind that the actual table is longer than the displayed rows.
*/
.schema Students
SELECT * FROM Students LIMIT 3;

/*** WRITE YOUR QUERIES BELOW ***/

/* Q1: Matchmaker */
CREATE TABLE matchmaker AS
    SELECT A.pet, A.song, A.color, B.color
    FROM Students AS A CROSS JOIN Students AS B
    WHERE A.time < B.time
        AND A.pet = B.pet
        AND A.song = B.song;

/* Q2: The Smallest Unique Positive Integer */
CREATE TABLE smallest_int_having AS 
	SELECT time, smallest
    FROM Students
    GROUP BY smallest
    HAVING COUNT(time) = 1;

/* Q3 [OPTIONAL]: The Smallest Unique Positive Integer (Part 2) */
CREATE TABLE smallest_int_count AS 
	SELECT smallest, COUNT(smallest)
    FROM Students
    GROUP BY smallest;