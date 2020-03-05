import * as React from "react";
import Hello2 from "./Hello2";
import JsComponent from "./JsComponent";
import Canvas from "./Canvas";
import { HelloProps, UserData } from "../../model/parent";
import CanvasWrapper from '../container/CanvasWrapper';
import "./Hello.scss";
import { test } from "./JsComponent/test.js";

const users: Array<UserData> = [
    {
        name: "김철수",
        counts: [10, 30, 40, 20, 50]
    },
    {
        name: "김영지",
        counts: [40, 10, 20, 30, 40]
    }
];

const Hello = (props: HelloProps) => {
    test();
    return (
        <div className="hello_class">
            Hello {props.compiler}, and
            {props.framework} 안녕하세요 게임끝sss
            <div className="hello2-text">불필요한거 삭제 했음</div>
            <Hello2 />
            <JsComponent />
            <CanvasWrapper>
                <Canvas howMany={4} UserDatas={users} />
            </CanvasWrapper>
        </div>
    );
};

export default Hello;
