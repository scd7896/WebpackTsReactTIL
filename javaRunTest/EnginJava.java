import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Test {
    public static void main(String[] args){

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("JavaScript");
        try {
            /** 타겟을 webpack bundle이 된 파일을 찍는다 */
            engine.eval(Files.newBufferedReader(Paths.get("/Users/kimserver/Documents/running js file/src/main/java/target.js"), StandardCharsets.UTF_8));

            Invocable inv = (Invocable) engine;
            
            /** 그 파일에 필요한 정보를 넣어주고 받아온다 */
            String result = (String) inv.invokeFunction("display", "kimserver");
            System.out.println("js에서 받아온 값 : " + result);
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("아무튼에러남");
        }

    }
}
