CREATE TABLE Customers (
    c_id NUMBER PRIMARY KEY,
    c_name VARCHAR2(100),
    balance NUMBER,
    VIP_status VARCHAR2(5)
);
/

INSERT INTO Customers (c_id, c_name, balance, VIP_status)
VALUES (204, 'Vishal', 9000, NULL);

INSERT INTO Customers (c_id, c_name, balance, VIP_status)
VALUES (206, 'Charan', 12000, NULL);

INSERT INTO Customers (c_id, c_name, balance, VIP_status)
VALUES (209, 'Sainag', 8000, NULL);

INSERT INTO Customers (c_id, c_name, balance, VIP_status)
VALUES (211, 'Nikhil', 15000, NULL);

INSERT INTO Customers (c_id, c_name, balance, VIP_status)
VALUES (232, 'Sriram', 5000, NULL);

COMMIT;
/

SET SERVEROUTPUT ON;

DECLARE
    CURSOR IsVIP IS
        SELECT c_id
        FROM Customers
        WHERE balance > 10000;
BEGIN
    FOR bal_rec IN IsVIP LOOP
        UPDATE Customers
        SET VIP_status = 'TRUE'
        WHERE c_id = bal_rec.c_id;

        DBMS_OUTPUT.PUT_LINE('c_id ' || bal_rec.c_id || ' marked as VIP');
    END LOOP;

    COMMIT;
END;
/
