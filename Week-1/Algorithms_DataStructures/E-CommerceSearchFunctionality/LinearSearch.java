public class LinearSearch{
    public static Product search(Product[] prods, String target_name){
        
        for (Product p : prods){
            if(p.getProductName().equalsIgnoreCase(target_name)){
                return p;
            }
        }

        return null;
    }
}