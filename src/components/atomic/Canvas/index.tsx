import * as React from "react";
import { CanvasProps, UserData } from "../../../model/parent";
import { useEffect } from "react";

const Canvas = (props: CanvasProps) => {
    const { howMany, UserDatas } = props;
    useEffect(() => {
        const canvasDom: HTMLCanvasElement = document.getElementById("canvas_test") as HTMLCanvasElement;
        const ctx = canvasDom.getContext("2d");

        const resizeCtx = () => {
            ctx.canvas.width = window.innerWidth;
            for (let i = 0; i < howMany; i++) {
                ctx.fillStyle = `#00${i * 2}000`;
                ctx.fillRect(i * 100, i * 100, 40, 40);
            }
        };

        // resizeCtx();
        let currentX =0;
        let currentY =0;
        UserDatas.map((UserData : UserData)=>{
            const first = UserData.counts[0]
            ctx.moveTo(10, 300-first);
            ctx.strokeStyle="#"+Math.round( Math.random() * 0xFFFFFF ).toString(16);
            UserData.counts.map((count : number, index: number)=>{
                console.log(count)
                ctx.lineTo((index*30)+10, 300-count)
            })
            ctx.stroke();
        })
        
        window.addEventListener("resize", resizeCtx);
        // return window.removeEventListener('resize', resizeCtx)
    }, []);
    return (
        <div style={{ width: "100%", backgroundColor: "#ffffff" }}>
            <canvas id="canvas_test" height="700px"></canvas>
        </div>
    );
};

export default Canvas;
