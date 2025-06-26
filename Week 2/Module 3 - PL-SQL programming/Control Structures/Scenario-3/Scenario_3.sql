-- The bank wants to send reminders to customers whose loans are due within the next 30 days.
-- Question: Write a PL/SQL block that fetches all loans due in the next 30 days and prints a reminder message for each customer

-- Scenario 3: Loan reminders within 30 days

SET SERVEROUTPUT ON;
BEGIN
  FOR rec IN (
    SELECT c.Name, l.LoanID, l.DueDate
    FROM Loans l
    JOIN Customers c ON c.CustomerID = l.CustomerID
    WHERE l.DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: ' || rec.Name || ' has Loan ' || rec.LoanID || ' due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/
