import * as React from "react";
import Hello2 from "./Hello2";
import JsComponent from './JsComponent';
import { HelloProps } from "../../model/parent/hello";
import * as styles from './Hello.scss'; 
import { test } from './JsComponent/test.js'

const Hello = (props: HelloProps) => {
    const styleTest = styles as any;
    test()
    return (
        <div className = {`${styleTest.hello_class} ${styleTest.hello2}`}>
            Hello {props.compiler}, and
            {props.framework} 안녕하세요
            게임끝sss
            <div>
                불필요한거 삭제 했음
            </div>
            <Hello2 />
            <JsComponent />
        </div>
    );
};

export default Hello;