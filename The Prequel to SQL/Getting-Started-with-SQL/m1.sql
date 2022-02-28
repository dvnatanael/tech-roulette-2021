create table Students
(
    ID        INTEGER not null
        primary key autoincrement,
    FirstName TEXT    not null,
    LastName  TEXT    not null,
    Grade     INTEGER,
    HonorRoll INTEGER
);

INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (1, 'James', 'Bart', 90, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (2, 'Josephine', 'Darakjy', 75, 0);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (3, 'Art', 'Venere', 93, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (4, 'Lenna', 'Paprocki', 94, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (5, 'Donette', 'Foller', 88, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (6, 'Simona', 'Morasca', 82, 0);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (7, 'Mitsue', 'Tollner', 78, 0);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (8, 'Leota', 'Dilliard', 99, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (9, 'Sage', 'Wieser', 95, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (10, 'Kris', 'Marrier', 90, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (11, 'Minna', 'Amigon', 88, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (12, 'Abel', 'Maclead', 79, 0);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (13, 'Kiley', 'Caldarera', 88, 1);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (14, 'Graciela', 'Ruta', 80, 0);
INSERT INTO Students (ID, FirstName, LastName, Grade, HonorRoll) VALUES (15, 'Cammy', 'Albares', 83, 0);