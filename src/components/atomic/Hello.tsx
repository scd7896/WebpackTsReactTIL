import * as React from "react";
import Hello2 from "./Hello2";
import { HelloProps } from "../../model/parent/hello";
import * as styles from './Hello.scss'; 


const Hello = (props: HelloProps) => {
    const test = styles as any;
    return (
        <div className = {`${test.hello_class} ${test.hello2}`}>
            Hello {props.compiler}, and
            {props.framework} 안녕하세요
            게임끝sss
            <div>
                불필요한거 삭제 했음
            </div>
            <Hello2 />
        </div>
    );
};

export default Hello;