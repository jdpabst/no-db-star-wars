export function randomString(length){
    let str = ''
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    while(str.length < length){
        const randomIndex = Math.floor(Math.random() * characters.length);
        str += characters.charAt(randomIndex)
    }

    return str;
}