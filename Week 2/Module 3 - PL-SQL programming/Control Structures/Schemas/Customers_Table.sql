CREATE TABLE Customers (
    CustomerID     NUMBER PRIMARY KEY,
    Name           VARCHAR2(50),
    Age            NUMBER,
    Balance        NUMBER(10,2),
    LoanInterest   NUMBER(5,2),
    IsVIP          VARCHAR2(5)
);

INSERT INTO Customers VALUES (1, 'Akash', 65, 12000, 9.5, 'FALSE');
INSERT INTO Customers VALUES (2, 'Dharshan', 45, 9500, 10.0, 'FALSE');
INSERT INTO Customers VALUES (3, 'Tamil', 70, 10500, 8.5, 'FALSE');
INSERT INTO Customers VALUES (4, 'Mithilesh', 58, 20000, 9.0, 'FALSE');

COMMIT;