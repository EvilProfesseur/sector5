import { DecodeText } from "../../../components/decode-text/decodeText"

import './giggerTitle.scss';

export const GiggerTitle = () => {

    const delay = 3;
    const initMessages = [
        'Establishing a secure connection...', 
        'Validating your identity...',
        'Obscufating packet route...'
    ];

    return (
        <div className="gigger-title">

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
