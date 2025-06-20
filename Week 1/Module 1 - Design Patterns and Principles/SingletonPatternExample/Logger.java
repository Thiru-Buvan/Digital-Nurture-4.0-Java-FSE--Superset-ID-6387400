public class Logger{
    private static volatile Logger instanceLogger=null;

    private Logger(){
        System.out.println("Logger is Instanitied");
    }

    public static Logger getInstance(){
        if(instanceLogger==null){
            synchronized(Logger.class){ 
                if(instanceLogger==null){
                    instanceLogger=new Logger();
                }
            }
        }
      return instanceLogger;  
    }

}