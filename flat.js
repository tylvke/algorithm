const arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];
const flatten = array => array.reduce((acc, cur) => (Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]), [])
console.log(flatten(arr))
const arr1=[1,2,3,4,5,6];
console.log(arr1.splice(3,arr1.length).concat(arr1))
console.log([0,0,0,1].lastIndexOf(0))

const obj = {
    name:1,
    left:{
        name:2,
        left:{
            name:3
        },
        right:{
            name:4
        }
    },
    right:{
        name:5,
        left:{
            name:6
        }
    }
}

const values = [];
const traversing = (obj, values) => {
    if(obj.left){
        traversing(obj.left,values)
    }
    if(obj.right){
        traversing(obj.right,values)
    }
    values.push(obj.name);

}
traversing(obj,values);
console.log(values)

