import { useRef } from 'react';
import './style.css'


const Slider = ({ children }) => {
    const sliderContentRef = useRef(null);
    const startX = useRef(null);
    const scrollLeft = useRef(null);

    const onHandleClikNext = () => {
        sliderContentRef.current.scrollLeft += sliderContentRef.current.children[0].offsetWidth;
    }

const onHandleClikPrevious = () => {
    sliderContentRef.current.scrollLeft -= sliderContentRef.current.children[0].offsetWidth;
}

    return (
        <div className="slider">
            <button onClick={onHandleClikPrevious} type='button' className='previousButton'><span>&lt;</span></button>
            <button onClick={onHandleClikNext} type='button' className='nextButton'><span>&gt;</span></button>

            <div 
                ref={sliderContentRef}
                 className='sliderContent'>
                onMouseDown={}
                onMouseLeave={}
                onMouseUp={}
                onMouseMove={}
                onTouchEnd={}
                onTouchMove={}

                {children}
            </div>
        </div>
    )
}

export default Slider;