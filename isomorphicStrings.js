function isomorphic(s1, s2) {
    if (s1.length !== s2.length) return false; 

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i];
        let char2 = s2[i];

        if ((map1[char1] && map1[char1] !== char2) || 
            (map2[char2] && map2[char2] !== char1)) {
            return false;
        }
        map1[char1] = char2;
        map2[char2] = char1;
    }

    return true; 
}


console.log(isomorphic('egg', 'add')); // true
console.log(isomorphic('foo', 'bar')); // false
console.log(isomorphic('paper', 'title')); // true
console.log(isomorphic('ab', 'aa')); // false
