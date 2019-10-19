1.冒泡排序(bubble sort)
function bubbleSort(arr){
  for(let i = 0;i<arr.length;i++){  //从左往右
    for(let j = arr.length-1;j>i;j--){ //从右往左
      if(arr[i]>arr[j]){
         arr[j] = arr[i]+arr[j];//借助加减法来交换数组的值
         arr[i] = arr[j]-arr[i];
         arr[j] = arr[j]-arr[i];
      }
    }
  }
  return arr;
}
2.快速排序(Quicksort)  选一个数为中轴，让大的数放右边小的放左边，然后递归
function quickSort(arr){
  if(arr[])
}


3.选择排序(selection sort):通过交换index进行排序，实际上还不如冒泡排序，思想是一样的
function exchange(array, r1, r2){
     var temp = array[r1];
      array[r1] = array[r2];
      array[r2] = temp;
  }
  
function selectionSort(arr){
    for(let i = 0;i < arr.length;i++){
       var minIndex = i;
       for(let j = i + 1; j < arr.length; j++){
           if(arr[j] < arr[minIndex]){
               minIndex = j;
            }
        }
       exchange(arr, i, minIndex);
     }
    return arr;
 }
