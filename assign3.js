let arr = [5,7,9]
function array(arr1){

for(let i=0; i<arr1.length ;i++)
{
    let num = 2;
arr1[i]=arr1[i]+num
}
return arr1;
}
console.log(array(arr))