public class Test {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Phone", "Electronics"),
            new Product(102, "Jeans", "Cloths"),
            new Product(103, "Laptop", "Electronics"),
            new Product(104, "RemoteCar", "Toys"),
        };

        String item = "Jeans";

        System.out.println("Linear Search:");
        Product linear_search = LinearSearch.search(products, item);
        System.out.println(linear_search == null ? "Product not found." : "Found: " + linear_search.getProductName() + "(ID: " + linear_search.getProductId() + ", Category: " + linear_search.getProductCategory() + ")");

        System.out.println("\nBinary Search:");
        Product binary_search = BinarySearch.search(products, item);
        System.out.println(binary_search == null ? "Product not found." : "Found: " + binary_search.getProductName() + "(ID: " + binary_search.getProductId() + ", Category: " + binary_search.getProductCategory() + ")");
    }
}