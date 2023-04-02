
function isIsomorphic(s, t) {

     let st = new Map();
     let ts = new Map();

     for (i=0;i<s.length;i++){

        if ((st.has(s[i]) && st.get(s[i])!=t[i]) || (ts.has(t[i]) && ts.get(t[i])!=s[i])){
            return false
        }
        else{
            st.set(s[i], t[i]);
            ts.set(t[i], s[i]);
        }
     }
     return true
};


s="badc"
t="baba"

console.log(`${s} & ${t} are Isomorphic: ${isIsomorphic(s,t)}`)