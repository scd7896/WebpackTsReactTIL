import * as React from "react";
import Hello2 from "./Hello2";
import JsComponent from './JsComponent';
import { HelloProps } from "../../model/parent/hello";
import './Hello.scss'
import { test } from './JsComponent/test.js'

const Hello = (props: HelloProps) => {
    
    test()
    return (
        <div className = 'hello_class'>
            Hello {props.compiler}, and
            {props.framework} 안녕하세요
            게임끝sss
            <div className='hello2-text'>
                불필요한거 삭제 했음
            </div>
            <Hello2 />
            <JsComponent />
        </div>
    );
};

export default Hello;