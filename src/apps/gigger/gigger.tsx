import { Box } from "../../components/box/box"
import { ShaderBG } from "../../components/shader-bg/shaderBg"
import { blackFlower } from "../../components/shader-bg/shaders/blackFlower/blackFlower"
import { GiggerTitle } from "./title/giggerTitle"

import './gigger.scss';

export const Gigger = () => {
    return (
        <div className="gigger">
            <ShaderBG shader={blackFlower} />
            <GiggerTitle />
            <Box classNames='w-[70vw] h-[70vh]' />
        </div>
    )
}
