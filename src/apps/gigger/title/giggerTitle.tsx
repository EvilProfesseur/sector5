import { useSpring, animated, useChain, useSpringRef, useTrail, easings } from "@react-spring/web";
import { useEffect, useLayoutEffect } from "react";
import { DecodeText } from "../../../components/decode-text/decodeText"

import './giggerTitle.scss';

export const GiggerTitle = () => {

    const delay = 3;
    const initMessages = [
        'Establishing a secure connection...', 
        'Validating your identity...',
        'Obscufating packet route...'
    ];
    // const messages = useTrail(initMessages.length, {
    //     from: { opacity: 0, transform: 'translateY(-2rem)'},
    //     to: { opacity: 1, transform: `translateY(0)}`},
    //     delay: 4200,
    //     config: {
    //         duration: 10200,
    //         easing: easings.easeInOutQuad
    //     },
    // });

    return (
        <div className="gigger-title">

            {/* {messages.map((msgStyle, index) => (
                <animated.div
                    key={initMessages[index]}
                    className='gigger-title__message' 
                    style={msgStyle}
                >
                    <DecodeText text={initMessages[index]} />
                </animated.div> 
            ))} */}

            {initMessages.map((msg, index) => (
                <div
                    key={msg+index}
                    className='gigger-title__message' 
                    style={{animationDelay: `${index * delay}s`}}
                >
                    <DecodeText delay={index * delay * 1000} text={initMessages[index]} />
                </div> 
            ))}

            <div 
                className="gigger-title__message gigger-title__message--final" 
                style={{animationDelay: `${initMessages.length * delay }s`}}
            >
                <DecodeText text='GIGGER' delay={initMessages.length * delay * 1000} classNames='gigger-title__main' />
                <DecodeText text='v4.52' delay={initMessages.length * delay * 1000} />
            </div>
        </div>
    )
}
