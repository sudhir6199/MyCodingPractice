
function zip (x,y) {
    //console.log("x,y:",x,y)
    let xy= new Map()
    //console.log("xy:",xy)
    //console.log("x.length:",x.length)
    for(i=0;i<x.length;i++){
        xy.set(x[i], y[i]);
        //console.log("i=>xy:",i,xy)
    }
    //console.log("i:",i)
    return xy
}


function isIsomorphic (s, t) {

    //console.log("Object zip(s,t):",zip(s,t))
    KeysArray = Array.from(zip(s,t).keys())
    //console.log("KeysArray:",KeysArray)
 
    //console.log("Object zip(t,s):",zip(t,s))
    ValuesArray = Array.from(zip(t,s).values())
    //console.log("ValuesArray:",ValuesArray)

    if (JSON.stringify(KeysArray) == JSON.stringify(ValuesArray)) {
                 return true
    }
    return false
};

s = "egg"
t = "add"
s="13"
t="42"
s="badc"
t="baba"
console.log(`${s} & ${t} are Isomorphic: ${isIsomorphic(s,t)}`)