
    let num = '337221';
    let arr = num.split('');
    let str = arr.join('');
    let b = 0;
    var str2 = 1;
    for (let i = 0; i < str.length; i++)  {
        
        var str2 = str2 * arr[b++];
       console.log(str2)
       
    }
    console.log(str2);
