create table Students
(
    ID            INTEGER not null
        primary key autoincrement,
    FirstName     TEXT    not null,
    LastName      TEXT    not null,
    Advisor       TEXT,
    Grade         INTEGER,
    GradeLevel    INTEGER,
    FavoriteClass TEXT
);

INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (1, 'Emerson', 'Bowley', 'Maryann Royster', 98, 9, 'Math');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (2, 'Blair', 'Malet', 'Alisha Slusarski', 92, 10, 'Science');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (3, 'Brock', 'Bolognia', 'Meaghan Garufi', 85, 11, 'History');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (4, 'Lorrie', 'Nestle', 'Mattie Poquette', 81, 11, 'Science');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (5, 'Sabra', 'Uyetake', 'Allene Iturbide', 80, 11, 'Math');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (6, 'Margaret', 'Mastella', 'Meaghan Garufi', 75, 10, 'English');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (7, 'Karl', 'Klonowski', 'Mattie Poquette', 98, 12, 'Spanish');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (8, 'Tonette', 'Wenner', 'Chanel Caudy', 99, 12, 'History');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (9, 'Amber', 'Monarrez', 'Willow Kusko', 80, 9, 'Math');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (10, 'Shenika', 'Seewald', 'Ezekiel Chui', 81, 9, 'History');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (11, 'Delmy', 'Ahle', 'Mattie Poquette', 78, 10, 'Spanish');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (12, 'Deeanna', 'Juhas', 'Ezekiel Chui', 89, 9, 'History');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (13, 'Blondell', 'Pugh', 'Bernardo Figeroa', 74, 11, 'Spanish');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (14, 'Jamal', 'Vanausdal', 'Maryann Royster', 94, 12, 'Science');
INSERT INTO Students (ID, FirstName, LastName, Advisor, Grade, GradeLevel, FavoriteClass) VALUES (15, 'Cecily', 'Hollack', 'Maryann Royster', 83, 11, 'Math');

create table Advisors
(
    ID              INTEGER not null
        primary key autoincrement,
    FirstName       TEXT    not null,
    LastName        TEXT    not null,
    Specialty       TEXT,
    MeetingDay      TEXT,
    MeetingTime     TEXT,
    MeetingLocation TEXT
);

INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (1, 'Mattie', 'Poquette', 'College applications', 'Monday', '3:00 PM', 'East Wing');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (2, 'Meaghan', 'Garufi', 'Extracurricular support', 'Tuesday', '4:00 PM', 'Auditorium');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (3, 'Maryann', 'Royster', 'Extracurricular support', 'Tuesday', '3:00 PM', 'Auditorium');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (4, 'Alisha', 'Slusarski', 'Extracurricular support', 'Thursday', '3:00 PM', 'East Wing');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (5, 'Allene', 'Iturbide', 'Academic support', 'Wednesday', '2:00 PM', 'Office');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (6, 'Chanel', 'Caudy', 'College applications', 'Wednesday', '5:00 PM', 'Auditorium');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (7, 'Ezekiel', 'Chui', 'Academic support', 'Monday', '4:00 PM', 'Office');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (8, 'Willow', 'Kusko', 'College applications', 'Tuesday', '5:00 PM', 'East Wing');
INSERT INTO Advisors (ID, FirstName, LastName, Specialty, MeetingDay, MeetingTime, MeetingLocation) VALUES (9, 'Bernardo', 'Figeroa', 'Academic support', 'Wednesday', '4:00 PM', 'East Wing');