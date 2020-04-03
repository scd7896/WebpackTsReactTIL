import java.io.FileNotFoundException;
import java.io.FileReader;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

class Test {
public void runDisplay() {
ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
try {
  engine.eval(new FileReader("./target.js"));
  Invocable invocable = (Invocable) engine;
  Object result;
  result = invocable.invokeFunction("display", "kimserver");
  System.out.println(result);
  System.out.println(result.getClass());
  } catch (FileNotFoundException | NoSuchMethodException | ScriptException e) {
    e.printStackTrace();
    }
  }
}