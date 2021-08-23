import React from 'react'

function MainButton({ text, backgroundColor, hoverBackgroundColor, textColor, style, onClick }: any) {
    return (
        <div onClick={ onClick } className={`flex items-center justify-center w-full py-6 ${ backgroundColor } hover:${ hoverBackgroundColor } cursor-pointer ${ style }`}>
            <p className={`font-rubik ${ textColor }`}>{ text }</p>
        </div>
    )
}

export default MainButton
