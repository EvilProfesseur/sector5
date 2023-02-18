import './box.scss'
import { IBoxProps } from './box.types'

export const Box = (props: IBoxProps) => {

    return (
        <div className={`box ${props.classNames}`}>
            <div className='border-wrapper'>
                <div className='hold left'>
                    <div className='fill'></div>
                </div>
                <div className='hold right'>
                    <div className='fill'></div>
                </div>
            </div>
        </div>
    )
}
