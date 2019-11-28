const oldTree = {
    name:'a',
    children:[
        {
            name:'b',
            children:[
                {
                    name:'c',
                },
                {
                    name:'d'
                }
            ]
        },
        {
            name:'e',
            children:[
                {
                    name:'z'
                }
            ]
        }
    ]
}

const newTree = {
    name:'a',
    children:[
        {
            name:'b',
            children:[
                {
                    name:'f',
                },
                {
                    name:'g'
                }
            ]
        },
        {
            name:'e',
            children:[
                {
                    name:'x'
                }
            ]
        }
    ]
}

function diff(oldTree, newTree){
    var index = 0;
    var patchs = {};
    walk(oldTree, newTree, index, patchs);
    return patchs;
}

function walk(oldNode, newNode, index, patchs){
    if(oldNode.name!== newNode.name){
        if(!patchs[index]){
            patchs[index]=[]
        }
        patchs[index].push({
            type:'replace',
            node:newNode
        });
    }else{
        if(oldNode.children && newNode.children){
            diffChildren(oldNode.children,newNode.children,index,patchs)
        }
    }
}

function diffChildren(oldChilds, newChilds, index, patchs){
    var left;
    for(var i = 0;i<oldChilds.length;i++){
        index= left && left.children ? index + left.children.length + 1 : index + 1;
        walk(oldChilds[i],newChilds[i],index,patchs)
        left = oldChilds[i];
    }
}

console.log(diff(oldTree,newTree))