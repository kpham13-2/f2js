function Add(x, y) {
    return x + y;
}

function countDecorator(z) {
    var count = 0;
    
    function increaseCount() {
        count++;
        return z.apply(null, arguments);
    }
    
    increaseCount.callCount = function() {
        if (count === 1) {
            console.log('Passed function called ' + count + ' time.');
            return count;
        } else {
            console.log('Passed function called ' + count + ' times.');
            return count;
        }
    };
    
    return increaseCount;
}
    
var Add = countDecorator(Add);
Add(1, 1);
// -> 2 Dont pay attention to this number. The important part is we called the `Add` function once.
Add.callCount();
// -> 1
Add(2, 2);
// -> 4 Dont pay attention to this number either. The important part is we called the `Add` function again.
Add.callCount();
// -> 2

// JSFIDDLE: http://jsfiddle.net/kpham13/k9s3ordq/1/
