import * as React from "react";
import { CanvasProps, UserData } from "../../../model/parent";
import { useEffect } from "react";

const Canvas = (props: CanvasProps) => {
    const { howMany, UserDatas, colors } = props;
    useEffect(() => {
        const canvasDom: HTMLCanvasElement = document.getElementById("canvas_test") as HTMLCanvasElement;
        canvasDom.innerHTML = ``;
        const ctx = canvasDom.getContext("2d");
        const resizeCtx = () => {
            ctx.canvas.width = window.innerWidth;
            UserDatas.map((UserData : UserData)=>{
                const first = UserData.counts[0]
                ctx.moveTo(10, 300-first);
                ctx.strokeStyle="#"+Math.round( Math.random() * 0xFFFFFF ).toString(16);
                UserData.counts.map((count : number, index: number)=>{
                    console.log(count)
                    ctx.lineTo((index*60)+10, 300-count);
                    ctx.arc((index*60)+10, 300-count,1,0,2*Math.PI, false);
                    
                })
                ctx.stroke();
            })
        };
        resizeCtx();
        window.addEventListener("resize", resizeCtx);
        // return window.removeEventListener('resize', resizeCtx)
    }, []);
    return (
        <div style={{ width: "100%", backgroundColor: "#ffffff" }}>
            <canvas id="canvas_test" height="400px">
                캔버스 안에서는 어디에 글이 써지나요?
            </canvas>
        </div>
    );
};

export default Canvas;
