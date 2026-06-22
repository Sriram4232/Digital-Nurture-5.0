import java.util.*;

public class BinarySearch{
    public static Product search(Product[] prods, String target_name){
        
        Arrays.sort(prods, (p1, p2) -> {
            if(p1 == null && p2 == null) return 0;
            if(p1 == null) return 1;
            if(p2 == null) return -1;

            String n1 = p1.getProductName();
            String n2 = p2.getProductName();

            if(n1 == null && n2 == null) return 0;
            if(n1 == null) return 1;
            if(n2 == null) return -1;

            return n1.compareToIgnoreCase(n2);
        });

        int lo = 0, hi = prods.length - 1;
        while(lo <= hi){
            int mid = lo + (hi - lo) / 2;

            if(prods[mid] == null || prods[mid].getProductName() == null){
                hi= mid - 1;
                continue;
            }
            int compare = prods[mid].getProductName().compareToIgnoreCase(target_name);

            if(compare == 0){
                return prods[mid];
            }
            else if(compare < 0){
                lo = mid + 1;
            }
            else{
                hi = mid - 1;
            }
        }

        return null;
    }
}