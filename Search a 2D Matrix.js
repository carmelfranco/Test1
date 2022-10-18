// using 2 D matrix wise Binary search Operation , T- O(log m+log n), S- O(1)
var searchMatrix = function(matrix, target) {
    let top = 0, bot = matrix.length-1, left =0, right = matrix[0].length-1, row ;
    while(top<=bot){
        row = top+Math.trunc((bot-top)/2);
        if(target<matrix[row][0]){
            bot = row -1;
        }else if(target>matrix[row][right]){
            top = row +1;
        }else{
            break;
        }
    }
    if(top>bot) return false;
    while(left<=right){
        let mid = left + Math.trunc((right-left)/2);
        if(target<matrix[row][mid]){
            right = mid -1 ;
        }else if(target>matrix[row][mid]){
            left = mid +1;
        }else{
            return true;
        }
    }

    return false;
}
