import { FC, useLayoutEffect, useRef } from 'react';
import { ShaderCanvas } from 'shader-canvas';
import { IShader, IUniformUpdateData, UniformsRequired } from './shader.types';

import './shaderBg.scss';

export const ShaderBG: FC<{ shader: IShader }> = (props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const shaderCanvas = new ShaderCanvas();

  const renderFrame = () => {
    let animReq: number;
    const animate = (timestamp: number) => {
      setUniforms({
        time: timestamp / 1000,
      })
      shaderCanvas.render();
      animReq = window.requestAnimationFrame(animate);
    };
    animReq = window.requestAnimationFrame(animate);
  };

  const initShaderCanvas = () => {
    const width = window.innerWidth / 4;
    const height = window.innerHeight / 4;

    shaderCanvas.setShader(props.shader.code);
    shaderCanvas.setSize(width, height);
    setUniforms({width, height, time: 0});

    wrapperRef.current?.appendChild(shaderCanvas.domElement);
    renderFrame();
  };

  const setUniforms = (updateData: IUniformUpdateData) => {
    const uniformsRequired = props.shader.uniformsRequired;

    if (uniformsRequired.includes(UniformsRequired.resolution)) {
      shaderCanvas.setUniform('iResolution', [
        (window.innerWidth / 2) * window.devicePixelRatio,
        (window.innerHeight / 2) * window.devicePixelRatio,
        1.0,
      ]);
    }

    if (uniformsRequired.includes(UniformsRequired.time)) {
      shaderCanvas.setUniform('iTime', updateData.time!);
    }

    if (uniformsRequired.includes(UniformsRequired.mouse)) {
      shaderCanvas.setUniform('iMouse', [0, 0, 0]);
    }
  }

  useLayoutEffect(initShaderCanvas, []);

  return <div ref={wrapperRef} className="shader-wrapper"></div>;
};
