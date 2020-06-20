/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    row_len = matrix.length;
    let low = matrix[0][0];
    let high = matrix[row_len-1][row_len-1];
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        let num = lesser(matrix, mid);
        if (num < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};

// return number of elements lesser than a in matrix
function lesser(matrix, a) {
    let i = 0, j = 0;
    let num = 0;
    row_len = matrix.length;
    while (i < row_len) {
        j = 0;
        while (j < row_len) {
            if (matrix[i][j] <= a) {
                num++;
            } else if (j == 0) {
                return num;
            } else {
                break;
            }
            j++;
        }
        i++;
    }
    return num;
}