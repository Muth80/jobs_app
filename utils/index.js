export const checkImageURL = (url) => {
    if(!url) return false
    else {
        const patten = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|webp|bmp|gif|svg)$', 'i');
        return patten.test(url);
    }
}