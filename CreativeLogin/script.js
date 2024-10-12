let $ = document

let userInputElem = $.querySelector('#userInput')
let passInputElem = $.querySelector('#passInput')
let lefteyeElem = $.querySelector('.lefteye')
let righteyeElem = $.querySelector('.righteye')

let lefteyeElemTop = 75
let lefteyeElemLeft = 110
let lefteyeElemPaddingtop = 0
let lefteyeElemPaddingLeft = 0

let righteyeElemTop = 75
let righteyeElemLeft = 174
let righteyeElemPaddingtop = 0
let righteyeElemPaddingLeft = 0

const userInputFocus = () => {
    console.log('user input focus');
    let eyePosition = setInterval(() => {
        if (lefteyeElemPaddingtop === 8) {
            clearInterval(eyePosition)
        }
        lefteyeElem.style.paddingTop = lefteyeElemPaddingtop + 'px'
        lefteyeElem.style.left = lefteyeElemLeft + 'px'

        righteyeElem.style.paddingTop = righteyeElemPaddingtop + 'px'
        righteyeElem.style.left = righteyeElemLeft + 'px'

        lefteyeElemPaddingtop++
        lefteyeElemLeft--
        righteyeElemPaddingtop++
        righteyeElemLeft--


    }, 10)

}

const userInputBlur = () => {
    console.log('user input Blur');
    let eyePosition = setInterval(() => {
        if (lefteyeElemPaddingtop === 0) {
            clearInterval(eyePosition)
        }
        lefteyeElem.style.paddingTop = lefteyeElemPaddingtop + 'px'
        lefteyeElem.style.left = lefteyeElemLeft + 'px'

        righteyeElem.style.paddingTop = righteyeElemPaddingtop + 'px'
        righteyeElem.style.left = righteyeElemLeft + 'px'

        lefteyeElemPaddingtop--
        lefteyeElemLeft++
        righteyeElemPaddingtop--
        righteyeElemLeft++


    }, 10)
}

const userInputKeyFollow = (event) => {
    console.log('user input key', event);

    if(lefteyeElemPaddingLeft > 19){
        return false
    }
    if (event.code === 'Backspace') {
        lefteyeElemPaddingLeft--
        righteyeElemPaddingLeft--
    } else {
        lefteyeElemPaddingLeft++
        righteyeElemPaddingLeft++
    }
    lefteyeElem.style.paddingLeft = lefteyeElemPaddingLeft + 'px'
    righteyeElem.style.paddingLeft = righteyeElemPaddingLeft + 'px'

}

const passInputFocus = () => {
    console.log('pass input focus');
    let eyePosition = setInterval(() => {
        if (lefteyeElemTop === 62) {
            clearInterval(eyePosition)
        }
        lefteyeElem.style.top = lefteyeElemTop + 'px'
        lefteyeElem.style.left = lefteyeElemLeft + 'px'
        righteyeElem.style.top = righteyeElemTop + 'px'
        righteyeElem.style.left = righteyeElemLeft + 'px'

        lefteyeElemTop--
        lefteyeElemLeft++
        righteyeElemTop--
        righteyeElemLeft--


    }, 10)

}

const passInputBlur = () => {
    console.log('pass input Blur');
    let eyePosition = setInterval(() => {
        if (lefteyeElemTop === 75) {
            clearInterval(eyePosition)
        }
        lefteyeElem.style.top = lefteyeElemTop + 'px'
        lefteyeElem.style.left = lefteyeElemLeft + 'px'
        righteyeElem.style.top = righteyeElemTop + 'px'
        righteyeElem.style.left = righteyeElemLeft + 'px'

        lefteyeElemTop++
        lefteyeElemLeft--
        righteyeElemTop++
        righteyeElemLeft++


    }, 10)
}





userInputElem.addEventListener('focus', userInputFocus)
userInputElem.addEventListener('blur', userInputBlur)
userInputElem.addEventListener('keydown', userInputKeyFollow)

passInputElem.addEventListener('focus', passInputFocus)
passInputElem.addEventListener('blur', passInputBlur)


