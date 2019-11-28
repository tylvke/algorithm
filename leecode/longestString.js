/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
    let result = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        let set = new Set();
        set.add(s.charAt(i));
        for (let j = i + 1; j < len; j++) {
            if (set.has(s.charAt(j))) {
                break;
            }
            set.add(s.charAt(j));
        }
        result = Math.max(result,set.size);
    }
    return result;
};
console.log(lengthOfLongestSubstring('abcdacbbb'))