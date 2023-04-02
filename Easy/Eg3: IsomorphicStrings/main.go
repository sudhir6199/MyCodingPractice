package main

import "fmt"

func isIsomorphic(s string, t string) bool {
	m1 := make(map[byte]byte)
	m2 := make(map[byte]byte)
	for i := 0; i < len(s); i++ {
		if _, ok := m1[s[i]]; !ok {
			m1[s[i]] = t[i]
		}
		if _, ok := m2[t[i]]; !ok {
			m2[t[i]] = s[i]
		}
		if m1[s[i]] != t[i] || m2[t[i]] != s[i] {
			return false
		}
	}
	return true
}

func main() {
	s := "bbbaaaba"
	t := "aaabbbba"

	fmt.Printf("\n %v & %v are Ismorphic: %v \n\n", s, t, isIsomorphic(s, t))
}
