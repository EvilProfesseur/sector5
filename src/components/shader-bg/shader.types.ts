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
    width: number,
    height: number,
    time: number,
    mouse: [number, number, number, number]
}

export interface IShaderBGProps {
    shader: IShader,
    resolutionModifier?: number;
    classNames?: string;
}
