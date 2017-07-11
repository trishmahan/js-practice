function zipperV1 (arr1, arr2) {
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
            newArray.push(arr1[i]);            
            newArray.push(arr2[i]);
        }
    console.log(newArray)
}

// zipperV1([1,1,1,1,1,1], [2,2,2,2,2,2,2]);

function zipperV2 (arr1, arr2) {
    var newArray = [];
    for (var i = 0; i < arr1.length || i < arr2.length; i++) {
        if (arr1[i] != null) {
            newArray.push(arr1[i]);
        }
        if (arr2[i] != null){        
            newArray.push(arr2[i]);
        }
    }
    console.log(newArray)
}


function zipperV3 (arr1, arr2) {
    k = 1
    for (var i = 0; i < arr2.length; i++) {
        arr1.splice(k, 0, arr2[i]);
        k+=2;
    }
    console.log(arr1);
}
// zipperV3([1,1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2]);
// zipperV2([1,1,1,1,1,1], ['a','b','c',2,2,2,2,2,2]);