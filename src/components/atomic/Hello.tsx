import * as React from "react";
import { HelloProps } from "../../model/parent/hello";
import * as styles from './Hello.scss'; 

const Hello = (props: HelloProps) => {
    const test = styles as any;
    return (
        <div className = {`${test.hello_class} ${test.hello2}`}>
            Hello {props.compiler}, and
            {props.framework} 나는 천재라고 한다.
        </div>
    );
};

export default Hello;
