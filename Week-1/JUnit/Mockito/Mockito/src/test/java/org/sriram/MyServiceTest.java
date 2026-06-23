package org.sriram;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub behavior
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject mock
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData();

        // Assert
        assertEquals("Mock Data", result);

        // Verify interaction
        verify(mockApi).getData();
    }

    @Test
    public void testVerifyInteraction() {

        // Step 1: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject into service
        MyService service = new MyService(mockApi);

        // Step 3: Call method
        service.fetchData();

        // Step 4: Verify interaction
        verify(mockApi).getData();
    }
}