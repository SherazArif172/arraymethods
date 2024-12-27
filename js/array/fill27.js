const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// arr.fill(3); // change all values with 3
arr.fill(20, 2, 5); // 20 = value needs to be replaced / 2 = will start changing from 7 index / 5= values will be changed uptill index 5

console.log(arr);

// modifies the origional array
