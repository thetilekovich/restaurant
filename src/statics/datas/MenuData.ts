import { store } from "../../store"
import { menuItemType } from "../../types"


export function getMenuData () {

    const menuData: menuItemType[] = [
        {
            id: 1,
            title:  getTitle('Интерьер','Интерьер','Interior'),
            url: '/'
        },{
            id: 2,
            title:  getTitle('О нас','Биз жонундо','About Us'),
            url: '/about'
        },{
            id: 3,
            title:   getTitle('Меню','Меню','Menu'),
            url: '/menu'
        },{
            id: 4,
            title:   getTitle('Контакты','Байланышуу','Contacts'),
            url: '/contacts'
        }
    ]
    return menuData
}

function getTitle (rus: string, kgz: string, eng: string) {
    const {language} = store.getState().language
    if(language === 'rus'){
        return rus
    }else if(language === 'eng'){
        return eng
    }else if(language === 'kgz'){
        return kgz
    }
    return ''
}

