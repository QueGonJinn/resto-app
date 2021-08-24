const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequsted = () => {
    return {
        type: 'MENU_REQUSTED',
        
    };
};

export {
    menuLoaded,
    menuRequsted
};