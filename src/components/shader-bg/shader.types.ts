export enum UniformsRequired {
    time = 'TIME',
    resolution = 'RESOLUTION',
    mouse = 'MOUSE',
}

export interface IShader {
    uniformsRequired: UniformsRequired[],
    code: string;
}

export interface IUniformUpdateData {
    width?: number,
    height?: number,
    time?: number,
    mouse?: {x: number, y: number, z: number, w: number}
}
