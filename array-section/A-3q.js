//*
const plaindorm = (character) => {
    let characterString = character.split('');
    //*If the interview says that don't use the revese then we could right the reverse logic by our self and the big(O) will be O(n)
    if (characterString.reverse('').join('') === character) {
        return 'palindorm'
    }
    return 'not palindrom'
}