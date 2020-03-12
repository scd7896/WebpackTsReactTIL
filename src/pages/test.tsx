import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "../components/atomic/Hello";
import { HelloProps } from "../model/parent";

const testFun = (arguement: HelloProps): HelloProps => {
    console.log(arguement.compiler);
    console.log(arguement.framework);
    let a: number[] = [1, 2, 3, 4, 5];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 11 -> 배열 원소 일부를 바꾸는 건 불가능
    ro = [2, 3, 4, 5, 6];
    console.log(ro); // 하지만 전체를 바꾸려고 하면 가능!

    const returnValue: HelloProps = {
        compiler: "test",
        framework: "return framework"
    };
    return returnValue;
};

const res: HelloProps = testFun({
    compiler: "컴파일링",
    framework: "프레임워크이다"
});
const root = document.getElementById("root");
console.log(JSON.parse(root.dataset.objtest));
ReactDOM.render(<Hello framework="프레임워크다" />, root);
