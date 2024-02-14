export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        let m = Math.floor(low + (high - low) / 2);
        if (haystack[m] === needle) {
            return true;
        } else if (haystack[m] > needle) {
            high = m;
        } else {
            low = m + 1;
        }
    } while (low < high);
    return false;
}
