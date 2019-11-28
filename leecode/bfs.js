const node={
    name:1,
    children:[
        {
            name:2,
            children:[
                {
                    name:4
                },
                {
                    name:5
                }
            ]
        },
        {
            name:3
        }
    ]
}
// 深度优先
function dfs(node,nodeList){
    if(node){
        nodeList.push(node);
        if(node.children){
            for(let i = 0;i<node.children.length;i++){
                dfs(node.children[i],nodeList)
            }
        }
    }
    return nodeList;
}
// 广度优先
function bfs(node){
    const nodes=[];
    const stack=[];
    if(node){
        stack.push(node);
        while(stack.length){
            const cur = stack.shift();
            nodes.push(cur);
            if(cur.children){
                for(let i=0;i<cur.children.length;i++){
                    stack.push(cur.children[i])
                }
            }
        }
    }
    return nodes;
}
console.log(dfs(node,[]))
console.log(bfs(node))