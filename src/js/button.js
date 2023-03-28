import data from '../../data/db.json'

//retrive buttons info
const buttonsInfo = data.buttons

//function to create button dom
function createButton(buttonInfo) {
    //create a dom for button
    //button is going to use font awesome
    const buttonDom = document.createElement('i')
    buttonDom.classList.add('button')
    //循环吧一个button里的class加进button dom中
    buttonInfo.classNames.forEach(className => {
        buttonDom.classList.add(className)
    });
    return buttonDom
}

//创建并抛出buttonGroup dom
export const buttonGroup = document.createElement('div')
buttonGroup.classList.add('buttonGroup')

//根据buttonsInfo 创建button 并添加进 buttonGroup中
buttonsInfo.forEach(buttonInfo => {
    //创建button dom，并添加button info
    const buttonDom = createButton(buttonInfo)
    //把有信息的button添加进button group
    buttonGroup.append(buttonDom)
})