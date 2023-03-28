import data from '../../data/db.json'

//retrive images info
const imagesInfo = data.images

//function to create a card
function createCard(cardInfo) {
    const cardDom = document.createElement('div')
    cardDom.classList.add('card')
    cardDom.style.backgroundImage = `url(${cardInfo.address})`
    return cardDom
}

//用json中的数据创建image group 并抛出
export const cardGroup = document.createElement('div')
cardGroup.classList.add('cardGroup')

//往card group中加入写有c图片的card节点
imagesInfo.forEach(imageInfo => {
    //创建一个card
    const cardDom = createCard(imageInfo)
    cardGroup.append(cardDom)
})