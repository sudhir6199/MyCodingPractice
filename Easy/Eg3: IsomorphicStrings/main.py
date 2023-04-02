def isIsomorphic(s, t):
    print("zip(z,t):",list(dict(zip(s,t)).keys()))
    print("zip(t,z):",list(dict(zip(t,s)).values()))
    if list(dict(zip(s,t)).keys()) == list(dict(zip(t,s)).values()):
       return True
    return False

s="bbbaaaba"
t="aaabbbba"

print(f"{s} & {t} are Isomorphic: {isIsomorphic(s,t)}")
