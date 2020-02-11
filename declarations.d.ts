declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}

//scss파일을 ts의 객체로 뽑아내기 위한 설정