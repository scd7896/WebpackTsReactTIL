import * as React from "react";
import Hello from "../components/atomic/Hello";

const Test = () => {
    console.log('이건찍힘');
    return(
        <div>
            Hello world
            <Hello framework="test" />
        </div>
    )   
}
export default Test;



