package org.sriram;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    int value;

    // Setup (runs BEFORE each test)
    @Before
    public void setUp() {
        value = 10;
        System.out.println("Setup executed");
    }

    // Teardown (runs AFTER each test)
    @After
    public void tearDown() {
        value = 0;
        System.out.println("Teardown executed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = value;
        int b = 5;

        // Act
        int result = a + b;

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {

        // Arrange
        int a = value;
        int b = 3;

        // Act
        int result = a - b;

        // Assert
        assertEquals(7, result);
    }
}