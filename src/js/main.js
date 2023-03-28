import '../css/style.scss'

import { cardGroup } from './card.js'

import { buttonGroup } from './button.js'

const appDom = document.getElementById('app')

// 加载 card grou
appDom.append(cardGroup)

// 加载 button group
cardGroup.append(buttonGroup)

//get button dom and add event listener

const leftButton = buttonGroup.querySelector('.left')

const rightButton = buttonGroup.querySelector('.right')

// left button press, last image dom move to first
leftButton.addEventListener('click', () => {
    //get all card doms
    const cardList = cardGroup.querySelectorAll('.card')
    cardGroup.prepend(cardList[cardList.length - 1])
})

rightButton.addEventListener('click', () => {
    //get all card doms
    const cardList = cardGroup.querySelectorAll('.card')
    cardGroup.insertBefore(cardList[0], buttonGroup)
})