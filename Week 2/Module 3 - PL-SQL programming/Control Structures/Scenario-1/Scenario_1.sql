-- The bank wants to apply a discount to loan interest rates for customers above 60 years old.
-- Question: Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, 
-- apply a 1% discount to their current loan interest rates.

-- Scenario 1: Discount for age > 60

BEGIN
  FOR rec IN (SELECT CustomerID, Age FROM Customers) LOOP
    IF rec.Age > 60 THEN
      UPDATE Customers
      SET LoanInterest = LoanInterest - 1
      WHERE CustomerID = rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/