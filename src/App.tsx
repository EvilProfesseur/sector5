import { DecodeText } from './components/decode-text/decodeText';
import { GradientBlur } from './components/gradient-blur/gradientBlur';
import { fadingTriangles } from './components/shader-bg/fading-triangles/fading-triangles';
import { recursion } from './components/shader-bg/recursion/recursion';
import { ShaderBG } from './components/shader-bg/shaderBg';
import { ether } from './components/shader-bg/shaders/ether/ether';
import { proteanClouds } from './components/shader-bg/shaders/proteanClouds/protheanClouds';

import './style.scss';

export default function App() {
  return (
    <div className="bg">
      <ShaderBG shader={recursion} />
      <div className="bg-image"></div>
      <div className="title">
        <DecodeText text="GIGGER" />
        <h4>v4.52</h4>
      </div>
      <GradientBlur />
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
    </div>
  );
}
