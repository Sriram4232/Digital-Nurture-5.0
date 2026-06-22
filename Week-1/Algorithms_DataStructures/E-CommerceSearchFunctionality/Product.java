public class Product{
    private final int product_id;
    private final String product_name;
    private final String product_category;

    public Product(int id, String name, String category){
        this.product_id = id;
        this.product_name = name;
        this.product_category = category;
    }

    public int getProductId(){
        return product_id;
    }

    public String getProductName(){
        return product_name;
    }

    public String getProductCategory(){
        return product_category;
    }
}