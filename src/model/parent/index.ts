export interface UserData {
    name: string;
    counts: Array<number>;
}
export interface CanvasProps {
    readonly howMany?: number;
    readonly UserDatas: Array<UserData>;
    readonly colors?: Array<string>;
}

export interface HelloProps {
    readonly compiler?: string;
    readonly framework: string;
}
