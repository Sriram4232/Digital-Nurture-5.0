public class Logger{

    private static Logger instance = null;
    private Logger(){
        System.out.println("Singleton/Logger instance called");
    }
    public static Logger getInstance(){
        if(instance == null){
            instance = new Logger();
        }
        return instance;
    }
}