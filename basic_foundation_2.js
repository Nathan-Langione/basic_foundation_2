/* Biggie Size  */
function biggie_size(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i]  > 0){
        arr[i] = 'big';
        }
    }
    return arr;
}
biggie_size_result = biggie_size([-1,3,5,-5])
console.log(biggie_size_result)




/* Print Low, Return High */
function plow_rhigh(arr){
    var min = null;
    var max = null;
    for (i = 0; i < arr.length; i++){
        if (arr[i]  < min){
        min = arr[i];
        }
    }
    for (i = 0; i < arr.length; i++){
        if (arr[i]  > max){
        max = arr[i];
        }
    }
    console.log(min);
    console.log("Print Low, Return High^^")
    return max;
}
plow_rhigh_result = plow_rhigh([-1,3,5,-5])
console.log(plow_rhigh_result)




function pone_ranother(arr){
    console.log(arr[arr.length-2])
    console.log("pone_ranother^^")
    for (i = 0; i < arr.length; i++){
        if (arr[i]  < 0){
        return arr[i];
        }
    }
}
pone_ranother_result = pone_ranother([1,-3,5,-5])
console.log(pone_ranother_result)




/* Double Vision */
function d_vision(arr){
    newarr = [];
    for (i = 0; i < arr.length; i++){
        newarr.push(arr[i]*2);
    }
    return newarr;
}
d_vision_result = d_vision([1,2,3])
console.log(d_vision_result)




/* Count Positives */
function count_positives(arr){
    var count = 0;
    for (i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
        arr.pop();
        arr.push(count)
    }
    return arr;
}
count_positives_result = count_positives([-1,1,1,1])
console.log(count_positives_result)




/* Evens and odds */
function evens_and_odds(arr){
    var even_count = 0;
    var odd_count = 0;
    for (i = 0; i < arr.length; i++){
        if(arr[i]%2==0){
            even_count++;
            odd_count = 0;
            if(even_count == 3){
                console.log("Even more so!")
            }
        }
        else if(arr[i]%2!=0){
            odd_count++;
            even_count = 0;
            if(odd_count == 3){
                console.log("That's odd!")
            }
        }
    }
}
evens_and_odds([1,4,3,5,1,2,1,8,22,6,1])




/* Increment the Seconds  */
function inc_seconds(arr){
    for (i = 0; i < arr.length; i++){
        if(i%2 != 0){
            arr[i]+=1;
        }
    }
    for (i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    return arr;
}

inc_seconds_result = inc_seconds([1,4,3,5,1,2])
console.log(inc_seconds_result)




/* Previous lengths */
function prev_lengths(arr){
    for (i = arr.length - 1; i > 0; i--){
        arr[i] = (arr[i-1].length);
    }
    return arr;
}
prev_lengths_result = prev_lengths(["hello", "dojo", "awesome"])
console.log(prev_lengths_result)




/* Add Seven */
function add_seven(arr){
    var tmparr = [];
    for (i = 0; i < arr.length; i++){
        tmparr.push(arr[i]+7)
    }
    return tmparr;
}
add_seven_result = add_seven([1,2,3])
console.log(add_seven_result)




/* Reverse Array */
function arr_rev(arr){
    var count = 1;
    for (i = 0; i < arr.length/2; i++){
        [arr[i], arr[arr.length-count]] = [arr[arr.length-count], arr[i]];
        count++
        
    }
    return arr;
}
arr_rev_result = arr_rev([3,1,6,4,2])
console.log(arr_rev_result)




/* Outlook Negative */
function outlook_neg(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = arr[i]* -1;
        }
    }
    return arr;
}

outlook_neg_result = outlook_neg([1,-3,5])
console.log(outlook_neg_result)




/* Always Hungry */
function hungry(arr){
    var food = false;
    for (i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy")
            food = true;
        }
    }
    if (food == false){
        console.log("I'm hungry")
    }
}
hungry_result = hungry([1,2,3,4,5])
hungry_result = hungry([1,"food",3,4,"food",5])





/* Swap Toward the Center */
function swap_to_center(arr){
    [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
    [arr[2], arr[arr.length-3]] = [arr[arr.length-3], arr[2]];
    return arr;
}
swap_to_center_result1 = swap_to_center([true,42,"Ada",2,"pizza"])
swap_to_center_result2 = swap_to_center([1,2,3,4,5,6])
console.log(swap_to_center_result1)
console.log(swap_to_center_result2)




/* Scale the Array  */
function scale_arr(arr, num){
    for (i = 0; i < arr.length; i++){
        arr[i] = (arr[i]*num);
    }
    return arr;
}
scale_arr_result = scale_arr([1,2,3], 3)
console.log(scale_arr_result)