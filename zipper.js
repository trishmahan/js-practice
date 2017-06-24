function zipperV1 (arr1, arr2) {
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
            newArray.push(arr1[i]);       
            newArray.push(arr2[i]);
        }
    }
    console.log(newArray)
}

zipperV1([1,1,1,1,1,1], ['a','b','c',2,2,2,2,2,2]);

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

zipperV2([1,1,1,1,1,1], ['a','b','c',2,2,2,2,2,2]);