
public class Main {
    public static void main(String[] args) {
        Logger logger1=Logger.getInstance();
        Logger logger2=Logger.getInstance();
        System.out.println("Both Variables has same Instance"+(logger1==logger2));
    }
}
