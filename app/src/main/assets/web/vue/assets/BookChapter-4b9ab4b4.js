import{a1 as ze,n as A,o as f,d as v,g as e,t as H,F as j,O as ee,u as o,a8 as T,z as y,a9 as Ne,S as xe,v as Q,e as W,w as J,a2 as He,A as Ae,aa as Je,f as Z,L as ce,ab as We,x as qe,ac as _e,p as ke,i as Be,s as Ve,J as Me,ad as re,V as Te,N as ye,ae as Ge,k as N,af as Ze,a6 as Ye,c as Xe,a7 as je}from"./vendor-884da3f2.js";import{i as $e,g as De,l as et}from"./el-loading-5ad84dce.js";import{_ as te,u as ue,A as Ie}from"./index-ec27f27d.js";const tt={class:"title",wordCount:"0"},ot=["wordCount"],nt=["src"],st=["innerHTML"],at={__name:"ChapterContent",props:{contents:{type:Array,required:!0},title:{type:String,required:!0},spacing:{type:Object,required:!0},fontFamily:{type:String,required:!0},fontSize:{type:String,required:!0}},setup(a){const n=a;ze(c=>({f550acea:n.spacing.letter,"1db54a99":n.spacing.line,"5bcd0de9":n.spacing.paragraph}));const g=c=>{const I=/<img[^>]*src="([^"]*(?:"[^>]+\})?)"[^>]*>/,r=c.match(I)[1];return $e(r)?De(r):r},C=c=>{c.target.src=De(c.target.src)},i=c=>{const I=/<img[^>]*src="[^"]*(?:"[^>]+\})?"[^>]*>/g,r=" ";return c.replaceAll(I,r).length},D=A(()=>Array.from(n.contents,c=>i(c)));return(c,I)=>(f(),v(j,null,[e("div",tt,H(a.title),1),(f(!0),v(j,null,ee(a.contents,(r,p)=>(f(),v("div",{key:p,wordCount:o(D)[p]},[/^\s*<img[^>]*src[^>]+>$/.test(r)?(f(),v("img",{key:0,class:"full",src:g(r),onErrorOnce:C,loading:"lazy"},null,40,nt)):(f(),v("p",{key:1,style:T({fontFamily:a.fontFamily,fontSize:a.fontSize}),innerHTML:r},null,12,st))],8,ot))),128))],64))}},it=te(at,[["__scopeId","data-v-a0211daf"]]);const lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=",ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEX6+fP8+/X+/ff///kbczPAAAACeElEQVQozxXHQUgUUQAG4P8936yzs6VvZNZmN9QxVxiF9OLBoOjtOC6rQq6ygXjI2fCQBdXBg4egtzFGdqkoI+zgBFbqkm3hQSxhFYLotOcubeKhOnVYoqQy+m4f5g5TvpX0xHLbLY9j8SMhJp+Jk4LfAUS2kVRIjILmnwGBTX42PhCVlDJQkIiy2nWAvaJ1h+oFIpJ0hMSYVbyyrgDWshcMpMyL1brPDQKWmduO+KTJ6XeXAMK9Yc3FpD7atyNwg6kt5XgFpLPhjUTFSYVn2abDiugGShwD8JTVRJVo/2ecuKtRb/qc4BK+9TboFfokog4T2Fn6Oqdnsjk90NMS76Rji6E0NmwkPBAZ4Xbkw8KoDAkAbEhkc78e9omxxgxg6qa5HvMv+UZbCV0qmHnSHKl5TxeA2XTCGWekR581mwC5crBH81PznASqB9va3TbkYAjJPLfg5uBfXaJgIgIBv9eessRIhxe7PA7kj6uUMeMaQ/OEQOYRaaHlqH2Gxwsl6E/pwVY5FH7uCypBZPKvDQyVziYBrAkMURe2MOOOxG/eQpp5PF+bFzUV5HtPj9GeiVSNZDELleifYTp9NAjsoiXg4cW+4ZORkdSMB/B74aAdjhsVakhgkugsbmqcDSLEoWp8zRjrux3tli6Q5uM3E+maT99Wy0RiP7tboiuRZle2c6CYeL2kcUc1KvPtQKucogMadKVTQOJYCeyCYlhQQ/Q7Etfd/vBygy9iqy+LyHeF46saCYvW6ingsbA9RBWtdi8GgUXW+oQx9/wP6bAAX1TWeV+CbShZDlQ9xT6SoSxZmKRAkmXb60kzEzkRF+Ccb94BGspGJoN/UzmyR4wjXHAAAAAASUVORK5CYII=",At="data:image/png;base64,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",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEXx58b168ny6Mjz6sn06sf27Mvw5sTz6cbw5cLy58T37svv47/168v37s7t4Ltrv0//AAAEjUlEQVQ4yw2Ty2sTURxGf3dmOqmPxb0zmaStCnfmZpL6gpmbxIpUSMZGrSJkxsZiVZimNVaqMklrUnWTRq2KIDFWWx+IFrIRFxXEB4KIgqu6EBdu7M6FIPg32PW3+DhwDmBaYrK56KP4HGIsvg/uvOV0wK+qgBMlO9BujuH4DSJlOseqV5a/BEF97gt0ChyIPqBhXI9BtqtIB8vJB/LdCQ3OVjaLNX0g7+OmoI4e7nkemAqX6o8vg0yyQAyQS7IfgvFbI+6QyI3R4KELxw7kwM2ooQfyQigYnwY5MZbMlHI1DvnQVCoVcrt+R+bO7vPDif3ybNajwqAAe443dpfDsPt379VMWZzGRuqM79mQF+DUz9nt74bQ8J/O80MtVR51U02JKKmTCvTzLVf+vuxP/aHnPo9+2bW+zVsJ0Y630/CrfzX+b+UL+7O68Rczv+7lrMh5etfKXvhc2rk6KforxuoO2xB2tcxKfeXHt18rHOiHI/0RRjW/YGRDkHiwo3nzqL60o58C/bgRuaj7vk+QOwOhpnFNdjuWpKMCGP8Yapu9Ty5FTHKQLGSEFikjd9ADwP9ciaNNjc5qMH6w50AF/LKOsOYqsOG9GjKgc7ZXolqntm6fysJ6Ma6ll2CiqmOgE6O7x1wXExklbeqMYcwsmJmOoigt8SBg2WfilDSsAZJcBxDcrqtBXzFQJqZNHfscyIhoZlygAtyYAceah+elrFbI+46gEHDGiW878Kj7JpWyfhg6iyRMymV1MKBSeVpfgLHIohyTojI6sRyK1VpcqzVZeEBLOnA9unhGKUXPJDYtV9Dxuz4iA5xSkSWhCJdAiJR9PHlvfvbntbrR14FDqUNRAYDJmSnv3oKxuz5+7fiblgVJyYLTbgUM05P7LESkoXvyWNfb0aUU6FZizgQIa25VqKQZqFrk6v6BsqqIHlQmkQ9KrBhkC20/DrFsAFEEYLjM+lj2wYHXCwnNvZQR42XJ2iVK+UBXnI+OBE6oXpUUHiQ1yg0MhA03iwGbnOdQYc1CMiPIPQrCQJFH4L4BMFktAtKd9PN5gnU2Gra4KuK+V+mjtBRpAGIqDVe4wnSnajiFGO5d7smvhVQEMEYwqshrENIEaY7YeblJYtsb3QhAHWZCEKK67swwPMKw0If1Ta+6DgHmlgPzcUTSbi3rrv1Y64/BYEMPQ5SDHUOR022B4QRF6xLUPAaPX/V4IDI5N2BMwx4LqO1uO4j6uW7NvM7lATqGAxY/ZHVgoGZbu7SvkNR75x6qGSB23FdouENVwN7sCbewTdsXGrrnQ5ZZKOCOFtMTIzxlPu6eYmtL+nMFmoK7OeXajn86r9sqWbfmvHC4IagE5qfCPGZvLSq5F55hHIxJFa4/vRxHBlz0og4TojU1l/MOHJX17lybdF0mQhFO44JYUNt3UA473IXw/iPfDWtKG5oFSXIF5iU/VnyDSjxxeDk3jAXRyVyGTNB9FxH9qcFDNJpVbt2y9LytUXkK7Py6+z1RezHQqnoY8XcLimmd8dCnBhQCuaGpJCq3SoIlmYvLz8UkWhJw7T8k+Db/DYEKwgAAAABJRU5ErkJggg==",dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX48dr48Nf58tv379X17NJtIBxUAAACFUlEQVQ4y1XRUZakMAgF0Af2AiDWApDZgHZqAV1nZv9rGh7Rj7Y8McUFEg1wvcMESMNVD/neU8Xcaz7nYYkYlYO6Ti82PBI4BvIEg1aj3wKwRvIMgZsUy5LdhCawPFh1sZs4SrlyN9fQKpv8s5dgZ2eLyqqJiu+WkCmUEybXkm3INS01WAiv0PapJ0CZc0SJQUzcWnZYbOOY20iFD8Bk+/j2A3wNxH7GdShFYS5ff237kXh9I9zSkQmIAhOsOSVfJ6DIXTMDaPnzkRJ92S1BQQmXl5LdirgRLLDdcYqcGPwe3QN4xCBiGNbrqq9wpW1XCecChwaQdVOsRDpPCpeoolPdxeXp3WNB9PHVzWBHlygy4NJCCrFHREv6bDt0VGwJZASkpONmm1UseGeFKAQexgaAkrfYWl3AGxWOLL2AIMBNbCXpktmS3k3vHeYjGCPBa43wJTurO3ZFVpQSJdAZGLoHTyk1upkjxMEaIxum3iIARcCa5kSkFAW5fi1mUlL9eyOsaanFmOMruwvEdE3ZYzsRSzo5ewRLXyVPPEvknt8ij4DvCg2O7xOgBCUprEzV4z1WekSpUgI8DT2mrnSOXKRfQavwuKA1F+tFnMKdJSUpMA7wQAifWRkMgjUKKZE4lBl6MCM4B1pq1P4uIjDE6Pq6rL0FnW1nIFmta5vrSvq/Ch4tpqG/ZNyyWa5jZPktq81eYv8Bt5s4iFITOp4AAAAASUVORK5CYII=",gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXN383Q4tDP4c/R5NEInCCXAAACVElEQVQozw3Hv2sTYRwH4M/79pJ7bZL2bXqtERJ97zjUpbZDhg6pfC8qibi8hLR0EaJ0EFxaCSWDxjfpj1zrYBcRBKE6SAfBJWsx9i8IQfdQxDlKtA6t2OnhQfN3lbG7ytYRywF8rVoPCNO0X2sQOKDpAnSDK2VwkHgmh5yLGT8qASt+2KofnNt2Xg1gf1UF8AoM6052cRMNaloLZb7RKQGrKKji2OefsZF+VqIvos5ZLVIZCX61JcwUdk56wASVkgQvzPfvmT2twTSwyYaC/Pl/UhAHorFhBgZtL6XdAZRp1tkPwC1NLa9CWs5prLhI85NBQsLdXvjDymG3/EbYfQhVNYqc3TtktQhWLY3ko0QsdMbSEp+64v0NfxyqLbIGdh6M2xHHlLBGqKTyQo4E/nebBgBfe1GpdeywYXc8CT7D3cKXuMXkBy4xN6o5OuKamYp3DVI6uccO9lxgd2CAlJgI2BGgaAgIJV/TYwKqu3WFccjbMuA+bVkWgS2bfnlRbD1Eb1sDyWMmjKYIBgGAWbqKRicfvzBkBIz3V5AKnguWdglQEysQsSuVzOg6ALy1pitA5ykGCsc857BRYcgCSZyFOdvoOigSGoPc5Ta73mgxshIcQE5sHMHd9D7yqITw7JO+GHVMxjhzYLcKPSEgmz3fU+BRy3iYNtiXLaBssCW8KguReqkQOTb3MStV0Ugt4U1eIs1RZWRII6Ww8xeNNItyGGQI4ZMlpg/3lQtkl2JFnBp1imRyFe0kK2Id3PCslMgiQNMS77gvFeDhG3cSkYvheeg/e7ClIh5oh+IAAAAASUVORK5CYII=",pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7eHl8eXj7+Pn8+eTbH1KAAACPElEQVQozxWPQWrbQABF/0xn3JFKQRTZOIuUsbCCbOgdRoYEOauxkYPcTRyTlPQWIxEltrsRwQ6hK9nEQek6F+gNTE/Q3qLLusv34cN7SH3mFicdYW4gNIhJWXPBRVXzjcFD0IqeU4o4PRbAIVjyico0vJpIifqPfL80QN9DAQY5ucRHE/hpHxBldXe9GilaHKcKMlj6pho2zXgkNdBl0oJ8kiF1DSiJF1ZHBJkQr0Dbux/5I42Zp4cFahJDFGeW6/QjBwmFY/Q7vZ2SnoOdW2parv/Cnm81+m0xrEfiVXQ3W4nOXIqVYi3l6AAQBwMFkViVBANMto4enXHPNTkHBB0oVj4r5vHzCWayrgBvxtygDlDB2CNDjd80ZInY69aKVYZcfJ8DW+fWuc+syEODALx+ojqoafHsthTI+ZW27PGpIeo/cR6YKcbqIuIFhHmBrzAovzIOOJk1ucvcDzrMRYGVBH2yvcAOf0KiKwfRovBI3tm/kW1eemtfNWwIIXE2mJNhvoszfmMBfRCv0OPwd2321uDW3nx2q/BDxFVeoN1g7a6Im8yRnoawa8kbdXnU0cHeTMxKfZGlJgvLb3sKsxgglQnDdAfvj9LUnqWRDo0GiUmPwyU7TAsD7wHeIW3Nfy1qVGKoE9NgJCdYCAexNRob9yCn4DAQmXtQuUtera6bEmTTXhZy6h856xi4mnEl6BI9mfISkLbtJyZIMJIAUd5ZOBEu88KRAk71yxfItj/hpIB0Errv4gO1os4/UICf+o3kkqwAAAAASUVORK5CYII=",ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX0/PTx+fH2/vbz+/P4//htSO9OAAAC5UlEQVQ4yyWT0QGjMAxDZTsDWKQDmJQBYrgBUsr+M517x0+LRWw9CyA+pC1YzndrMgHaNXVKQ+di13Of1qbur48nWhuRjj8i6ON8e7pNm7zyag/DBTfS9Z4Hup1fUuXMKY4HEE8QOHCByXkIkl7lDT239RtL9quO4JItmmhOAHXg45QuYKrQFLyGJcRvaTw6kQqZy6mkR6JAPFH/XqsQjEDRmUOA+MNLHGyMUT7AHApoAhjgjIJmCxy6XHdf648AWCdGe57IUDazCeTImQOY4/z+eVYVX2IjOw9RydeAeJwl79iGi4HpgQgHEchWraUZLtayu8scq0lHHHUKMY3Ml8hB7CS1jOckDLG9ccgNeX3124phOcjL9fPnWJhTXpLHeG9DRmHnTxHEaHakS2J51lwAJcUraNbuU7q4gMTDQj3Eripc/x+qFM5VEKAB1roQfAkX5/PxqnS2QpOrxfK1Zft0/omV5T+xCSBUAIbEIwUQgvAfxFE1O8dnk233+1UZiqJ1mAbsue6Yt8tF+yOrxC/YrUhzC4qPlE3EbR5hGKhhHdlrg7J9WunV7L7BcYQwAeE59u2tnN1c6gfVYrQiLSZ9OxZdWDXQq0+r0Pbarh3UqGCwauVvbiXuDsNxCtLDdW9rTF8oQYN4EoXXdfmwNguQP26n/tRjDeo+F2W7PjWtfSr6Bn/z+cXOLp4NnMV4RytvSW4B68m+XN9XfZTFGhO/S+cHTuTqZDC21ccA0N7QsePALaDQC3D1f94U9CWo+aq6BjB3v0rxIimBM12296M3aKPHjXLQE9KQKH4By8RHraJ3AgVto2r4xdFqlaPaiAHLl1ZF4P2pI6cYc+K8UZdcmxy7lqGc1IoPxLmIFuIeEZ6j2sQT88muEg1zwrEDTIX5U/ZmcsqfgVlBumiBLF4sAyhf9BFlXOPKLZ4H0iFb3VoHrGhtHTldKrOvP2/reu2zfV8CXMPqzRdlgd0a5eI7WwB/AYcgavcqxXWEAAAAAElFTkSuQmCC",ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXM2t7O3ODQ3uLR4OTDp25yAAACdUlEQVQozw3P70sTcQDH8c/3/M7NG+j35mnHwjwh4hRy/QFK3zvPNbeIG1koPZmxfj2IDAwihL53zj0JYisfmEHcZJZOiBUG60lZiI8T/ANusuftgQ+kCPIPeMP7hS5mUrV9c1g6MQCAEZ8tDLHwofImAGRlX+SZK3Vu9rRRPuO4PK6/9nA4GIATsxlODS+rdCMhkAZivpYV0LWoQHSLSA4NfUg+6mY+7BKL2++F9LvnrBDYm6JO9i/YO3i/HJTGQ4pdIV82TbEDFG6vGYCd4wZchgK5J2CrKTLE+Tx0v+YGlIbdWJFcQl4ptBN8fUJQN1MCJLcZLYwUVVo+famGGty8EXJF5ofOEDzcodT3/Fb0I5sHmc1ZG7CcSl8COgxlXx09jT05OafjCZLIHJhGIaU6wDZHsuMQ41wbdjmQXbhKnMq1zlXSYrjCnyZblqexA7fC8RxS74tq2P3OxSQwTuJSApH8OZLzBBp1pOe0i3rdyDUA47GySZ31YmC4EQYSXvFSvieORGBxXF9aeVtUWKGS9WMC4Z9Y2uXnJ2nCUXVMbPOYqNYNmGWWQ7Evr+BWC+a0JAMTImcq/S4Z5INdQMeuOqDIMa9beilxfA60iC6sP1INcPDpmHBW8drZHNmqwyddJtVje9q8WGUgWAOzmbU4FCQBFi8B2Wk6pickBnYhJMenmJGuRmtt2IoKq9NuFGbNFR99sHnvrnLsLysKANDIsxbp6RNMAsoDSKuRpMwZbAAzI68QatIjmZ0aImyM3O8/4e2MNlOHZomFsa/fLDsysliHS+nlYLQJMnynxrH8QO4PaAV2Li8B/+52UgeGIVNFYf8B1XG/kFSmLcUAAAAASUVORK5CYII=",vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7vLf7PDj8PTm8/ecW+lZAAACZElEQVQozw2RsU8TUQCHfz3fw7MS87jeI7DdmSMpDEoHE+P0HqGkvRR8vb5XC4NpN2RQZqcK9xJkwtriekcggerC4OZADDiT+A+goxv/gfwB3zd8H/T6vYF/pTZkCSmDNd3CBEtmZJP4N+CvvhecDvmntKsvwB17rpbIRTLOEoYkj9KZzRUuJsuBQFwgptyJ3Y7EL4V+ud5LO1UnMeQSSObqisiISZkbQBlliP3qWSk3GPQXjxv6VF2BTDO4ySx1zhuJXbA2wBNJF4t5vH9keg6wu5NvUpLtXrZ3OHC9ZsgVcZdOl38PM1y/L6m8GRiErj4AqezUjHGatGGIgs5NJDHh8Ua1IuB4035haVT6SaYWMoQ0eJ3rB/Gpnr3fB49YAy1Wa21YKqAHOmAveVw6CCMGMZh5bGtVI7jnZaiQNbta1Z+285oSoKoRbta1KZ/1bBdKH/RIxv2pRVpkoCmvpr097RWoo0CpMlTWllIenSjECU8mV43mHx2fIRfH/pncrJm3+58BWdbSqCS07/yiQnvHiCG4ZPGRFeAtfreoOubyctzHvLNHhjNvIhukxQzjU5O6QdOEzUp1Ef4d98Pxz+IPYX0bcpnT52dbedfz8y7C4R89RV+MjJkuCCx7mWDt4eyK/62lQB55xXGJK7p8u6bgRv4hVHylelYGGFs64W94tng8sAIVqSRJBpqRA9rFvAysS+9ak8s7557pz5HR4qhCRmWgplpTRJ+bhYfSAMO8/YBucWPuSdmFFtOnuWqvV2NbF6CJnbhNDzEZ/T0XSDrUydzkZCG1z/oIEyUFYxW/KPXNfwopuHDcO04UAAAAAElFTkSuQmCC",mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXm9PXq+Pno9vfs+vttWKBGAAACPElEQVQozw3RQWrbQACF4TfCMjPqZgIj4RRaxsZKE0PuMBZ2cLKaCI9RDAXFmJJknUWWI1O1UlamOMHJSjGkuFn3AD2Cr9CepDrAg+/xIxK4QwIqHHQkUhQ/WuphInVIFBojl8QXc012Tgq4RTtVHWVLZVFh1tEoI91uiN4joCqde8Ukn/zGM1B2W4ari2PtTwyw55Ld+Wways54qhGPyS6FzbIT3lIY8WwWdCq56Yolx6KmSKzoqrsCB5heAp4TGNQWJ1Pc6XlE5jQD5OlIX9I47A9uiUQcPQxcury/ToyxWJG/za6ki88crxKPocKS59Sl3EtBG7C89fCGflpfqoSzCeC4crioJA7F0V5+8MaSIk4qSCdwzpogmbqzEirVpGiS2dOVJvUuuqFEmhHao06KEpq+8lvHI14NJk3Qrmi9vBuRLwAz0qZB4hsDXQFXgtnlpDX3C6ug9BquSw/CYtwAzuTz5vuQNdr/YibhR68378ehZH30FSpjh71LpQkrsj+Q062h5WwZ5wlRoD6uQJy1DqvSYuCUapMBqT5YA4ZFw4KlWapxoUGlKWrx0eDQvmigu4WMYt97ruru98fYL8/0lG6CTOFcFWBhFK5gKw19h2JN808nh7xhkU6sWKLXdtkqBL6h+lULK5k19wFB/FldnGYf3LDeuf6IC2/MzJOSOP0qPxLqzaGIqtBcFIItrstkazONOkrc1D1czjuwEGESB4JJnjgSMN7PXAu7fZQpl1C236C+9mM4Af8P98Ch4R2TRl8AAAAASUVORK5CYII=",Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXPz8/R0dHT09PU1NToNyAhAAACdElEQVQozw3NP0xTQQDH8d9d7sFrG+QeKVgQ4aoFCwFkYERyLY//0UB8GNGg1WAC0RBGJrzW4mCXQmpgvCYOwEAYiulSpYtza2KiW7s5FgNJFSV2/CzfL7RwpoJ20iadmgA8owOyaxmusKE44scBeb4vIv00dqYgmf6jzWcr7W6INbDQeZbQL9ytXeYgtFfzmW1Fek5msxJlwhyt6qDDxOLQzpVPompYrMPnEnhvLm7M5BxY5nowAj3zkydAkpC0FIG6g7AK+Ub25ybyNWVYwtpseP2rfrQwiGRpfqrnMuPeuvr2dA0p2YsHF2XghkrXKtZ8tLBjR7S2qIaYbKmyLd/QP+EogLjqqwNw5Lq1pDlMLkM5+gNoSvdq+Pxmz9/61EFq6GYM6GqaGvlN95zy3gsmEWI8K3k8OP9OmRLEPO6DP3Wv3g42COinJTZ33dcIvs4ESp6opMTjDs6mcYTEbFeUifuxh989yZrIx4lkpuixxz0nHLCekKbE17suKhYkMGhoYhTZtVBvg4bfq/1L1Im0AGMVpBFwumM0zwyuKiCMi5dqR4Flx47AGyF2xTbxqUdTwCH94BT3DozpLV5WuAL/N8rGtHKjotBOOuOtCJ9E21uqsyBoLOzaXbHPrK5PQBP+fBfeidvJAeMIAmzVt5IkJJ9DBWaZDAepYUhlQqHt0h72SJ3j8TZHom64f516xx9T5evgMPgwG82jZdJaJIDyWp6LAjOCclVyzNA3iTKzIULlBQEPaTXlPHok5gISclmyaWZlqY2aTHdRHpJOwTdDEQ3ZfKtbpclcNhyVClagmY+fIfyKukntPqBgnx5QvZHk/D/MK8JMClrSigAAAABJRU5ErkJggg==",bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXe3t7a2trc3Nzg4OCXP9lCAAACoklEQVQozwXBzU/TYBwA4N+QEr4CNbSFwcFuowSqMRvEAwShHWAYNsu7dS0dLnGUSWT4kZB4lGzE4VtcwgIDJqcOWLJxcv4BOoQZuCPxSNSD4WSWLJGL8XmAIiyo2RgJ4A1pxQQlOxRAszLTdnPu2oQGb05RC5slJld7ZAIfo4O44Bn1ud59F0BcjnYOa17Jhwc6EdiKettncsXjT1f8KUBZUW41pK0Jc1Az4dEV3rkkPBtDSZ83Blyt0kSf2PRjzIykoBwINisPbPPtljdVE9iAXRfUPkXLVIgYrCccp5g687NdZbcJ+xa5VE/HhTtT23IKsN5jj/pcUd0dTZNAqCVw72n4gOwnTOC0vvHfaauT8d9zAoRRfPpISZRVyUiw8ELzOG1b2DZpFzkSrHLhq52twDEdyZHwvp2j4uv/bjvOf23/AcEtTuJbY5Cp4YcAer1IGkUzOo2rn8LQOKjFJw3NTw24nprQXY5aF4wxcqcSdbFQ00H4xFl8Drx4X4CikvAM1tuR8bKIBCBoLnKN10KJG4zKAsc7c9WEB9gnCi6BhVjqoco6t20ILAJuVctvaEZK732cRHDRmGfuihOam0o2CHByUZ/epCcVlRs2wmCnMqsd6aSim3ibBJtm1LGyXW3Bb7tJCPlFtUG+SvPdeEUAB60lNdo+VQbLcwRNVtT68FsLcr1+NotgNihlpExS1V2SFgNbeC8bEhgm8sM17wSi6Us2gxVWJU/5GKBpandvfyYbU1yHCLpCgWGbbPXn40rehEsUXKIJr9DMKgICfjc4bl1YfvUhE/YIECGRqjCxSM9hrybAIkND5OeWfFZsXkxB+qDzb7pUQ3EfQ3Ml6EChEt3D+iS01VqC7EQ/Z/DuPQcz4yChoFQJce2Qr+NNAv0HxofmpXGqgHkAAAAASUVORK5CYII=",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEXm5ubo6Ojp6enr6+vt7e1FnZagAAACrklEQVQ4yx1SixUbMQgT3AKAFwDcAfzpBN1/qMrJS5w7bCQhC6IGSUGYQJd6Ox9ZPXi1AGJBavhUTT0JjYPGAab9WcDYIxsmlnxkayX8mhxCmKHA75az5cfRbWybEExiu08xDSgGym0mwuf3j4SvHeQxDJJzh2zp4iOlrD8iOb4SXyC1wiOLRTcnrje+nGamFeXVKWkmzbFIPChkmJ6Fg7mBpV8n+JGOVCd4jv1thThkjeQGNeafpeV3rsEWLfyWc8tC9jOv6FQ8rRzHOOVB+jCYEUAJpDvh8xHNFm/Tm5p5lw94Pp3NhtKEfQsGvnXhowdZE73hPwxKvjDd4i4PCdd0fe3W5fO8ktAsUAacLgstpUw60JCiPLg2XpkgiqPIYYXJd9ksGIT3q+LlevypzItvO+s0F1dBzVr2QDMUkYmuyGcrIS44mVJ7JVKwQXjYuBYp0Uetecbswzsikzu3gUR8bJC/C8Gd/NAzI/xdUGOYQQHDZ8X2d5XuzGRUiXAi9si5CRgoiToRZPtzLJkd0FUHRHZwJf0BHT1sE7gcnh0jmKKlSSF4/GBirGk5+K9NKlGDCfc9JtPhg78JdabH0YQRKNZnJ8tFnPfXHJb4xum1TTCeEmyEdbyEJLjznMLHuFD2Y9NEkSleIBs7SiCbblhgctVi9ch++kDYnn1C9DA5TvdPsToXM55wI6k+8eKT1blwPTqWb5CFJ+7dTBmab+KHy+xwNtItXhZNSpHD2fxnynrxG3ZBKRe8KBpXk11AnadlccEhr9w1nBBvBylNkv7A8eqpGBCDqhitmWQXBjjdS6idr/QjXWLDeMzMbVDoJuM8zN7WenMZWXgZ2vX3F01J3jHZbwk1LRP+DWEvDJtOUoh/AIaBUz5VpWyhuyx4QtgL/NmgC6kM/JvNe+R/C/5aL7BKIbYAAAAASUVORK5CYII=",It="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUQERMODxESFBYWGBkaHB0eICLm6ozJAAACkUlEQVQ4yyWTUdLbMAiEASfvoOkBkBy/O5keIE0v8E/uf5h+68qZWALELgu2MG9PP9qyvCzTVhrrsPGOCjvTfXQZvtp/W3Gy6LCITqs4q/DZ+KYl76zKzHVYpY2wNY27nqN1sbLGcrLH3/ENH4oWlGctsDu8AO+HzTLlsYdh8MzP1m6YDMz0ACfcimvakBj+mwO/+5Uta5teOD379sxK1fUxmUhv8MU3jUT5gs26PMephFznkLcpQZ6/dPL9C/GWHcCxDN6oZhD5xBm5qoYBPA+PFE/H1tXDWcWl8TW7rS+4dUzAVy0BIrvC4/HcqW2TkG1HO8q9dC23INAg7NA4AFRFkDTM2lfELPyFzi1VddcpX2z0KjHBUDmdLNJ6dDps4ytrX+FPsZwE31wSL+6OWfHOAJ3+Y0Rk/MiKfmWNPg7oVP/U3Ck9FoCkC2gBpALOiqbMNTkOe8P4FWkTD2Y9Q3+5VmV0uLUJBl68U5uAK2Kl6QDXvLxbwweOL2sixW78uU8p0ysfc7cWrF1j6B1sPJ4WgclYSnJN1bzozrhEcFHmRzBkbJWqqdG+EYJXRFmT5jnLXPUNF6WBdoFbTxYsmDXVLU/WA7MExNc93sJS5hIXDeLxzMScHzdhKvEkibr6cQXYPrmtmTA7JcInISrTzRDvShTdka0uVGrsJAAR6tSn1sKziZtfKVjAxPrJsYgZO0bye+vKTZ/DgoAoLGNO6jYHimZYTL/3pLJHawquJukjBpfz8WOGVSVIWx9ywUfS5iENutidRM4NzkAmxgUSQ68xgNOU+ZLalr4TS2V+D2xqukZig+Z9DilR7Nouzwp1cp/3E5q6Rdlf08obKvAM4qZ6pMr+w3PmQALSSBfjyZn5DwrNRVbywBQiAAAAAElFTkSuQmCC",kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==",Bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==";var X={themes:[{body:"#ede7da url("+lt+") repeat",content:"#ede7da url("+ct+") repeat",popup:"#ede7da url("+rt+") repeat"},{body:"#ede7da url("+At+") repeat",content:"#ede7da url("+ut+") repeat",popup:"#ede7da url("+dt+") repeat"},{body:"#ede7da url("+gt+") repeat",content:"#ede7da url("+pt+") repeat",popup:"#ede7da url("+ft+") repeat"},{body:"#ede7da url("+ht+") repeat",content:"#ede7da url("+vt+") repeat",popup:"#ede7da url("+mt+") repeat"},{body:"#ebcece repeat",content:"#f5e4e4 repeat",popup:"#faeceb repeat"},{body:"#ede7da url("+Ct+") repeat",content:"#ede7da url("+bt+") repeat",popup:"#ede7da url("+yt+") repeat"},{body:"#ede7da url("+It+") repeat",content:"#ede7da url("+kt+") repeat",popup:"#ede7da url("+Bt+") repeat"}],fonts:["Microsoft YaHei, PingFangSC-Regular, HelveticaNeue-Light, Helvetica Neue Light, sans-serif","PingFangSC-Regular, -apple-system, Simsun","Kaiti"]};const u=a=>(ke("data-v-7c8b23a7"),a=a(),Be(),a),St=u(()=>e("div",{class:"settings-title"},"设置",-1)),wt={class:"setting-list"},Et={class:"theme-list"},Ut=u(()=>e("i",null,"阅读主题",-1)),Qt=["onClick"],Dt={key:0,class:"iconfont"},xt={key:1,class:"moon-icon"},_t={class:"font-list"},Vt=u(()=>e("i",null,"正文字体",-1)),Mt=["onClick"],Ft={class:"font-list"},Ot=u(()=>e("i",null,"自定字体",-1)),Pt=u(()=>e("p",null," 请确认输入的字体名称完整无误，并且该字体已经安装在您的设备上。 ",-1)),Rt=u(()=>e("p",null,"确定保存吗？",-1)),Lt={style:{"text-align":"right",margin:"0"}},Kt=u(()=>e("span",{type:"text",class:"font-item"},"保存",-1)),zt={class:"font-size"},Nt=u(()=>e("i",null,"字体大小",-1)),Ht={class:"resize"},Jt=u(()=>e("em",{class:"iconfont"},"",-1)),Wt=[Jt],qt=u(()=>e("b",null,null,-1)),Tt={class:"lang"},Gt=u(()=>e("b",null,null,-1)),Zt=u(()=>e("em",{class:"iconfont"},"",-1)),Yt=[Zt],Xt={class:"letter-spacing"},jt=u(()=>e("i",null,"字距",-1)),$t={class:"resize"},eo=u(()=>e("em",{class:"iconfont"},"",-1)),to=[eo],oo=u(()=>e("b",null,null,-1)),no={class:"lang"},so=u(()=>e("b",null,null,-1)),ao=u(()=>e("em",{class:"iconfont"},"",-1)),io=[ao],lo={class:"line-spacing"},co=u(()=>e("i",null,"行距",-1)),ro={class:"resize"},Ao=u(()=>e("em",{class:"iconfont"},"",-1)),uo=[Ao],go=u(()=>e("b",null,null,-1)),po={class:"lang"},fo=u(()=>e("b",null,null,-1)),ho=u(()=>e("em",{class:"iconfont"},"",-1)),vo=[ho],mo={class:"paragraph-spacing"},Co=u(()=>e("i",null,"段距",-1)),bo={class:"resize"},yo={class:"resize"},Io=u(()=>e("em",{class:"iconfont"},"",-1)),ko=[Io],Bo=u(()=>e("b",null,null,-1)),So={class:"lang"},wo=u(()=>e("b",null,null,-1)),Eo=u(()=>e("em",{class:"iconfont"},"",-1)),Uo=[Eo],Qo={key:0,class:"read-width"},Do=u(()=>e("i",null,"页面宽度",-1)),xo={class:"resize"},_o=u(()=>e("em",{class:"iconfont"},"",-1)),Vo=[_o],Mo=u(()=>e("b",null,null,-1)),Fo={class:"lang"},Oo=u(()=>e("b",null,null,-1)),Po=u(()=>e("em",{class:"iconfont"},"",-1)),Ro=[Po],Lo={class:"infinite-loading"},Ko=u(()=>e("i",null,"无限加载",-1)),zo={__name:"ReadSettings",setup(a){const n=ue(),g=y(0),C=y(n.config.theme==6),i=y(""),D=Ne([{background:"rgba(250, 245, 235, 0.8)"},{background:"rgba(245, 234, 204, 0.8)"},{background:"rgba(230, 242, 230, 0.8)"},{background:"rgba(228, 241, 245, 0.8)"},{background:"rgba(245, 228, 228, 0.8)"},{background:"rgba(224, 224, 224, 0.8)"},{background:"rgba(0, 0, 0, 0.5)"}]),c=y({display:"inline",color:"rgba(255,255,255,0.2)"}),I=y(["雅黑","宋体","楷书"]),r=y(n.config.customFontName),p=y(!1);xe(()=>{var k=n.config;g.value=k.theme,g.value==6?i.value="":i.value=""});const l=A(()=>n.config),V=A(()=>({background:X.themes[l.value.theme].popup})),M=A(()=>n.config.theme),L=A(()=>n.config.font),E=k=>{k==6?(C.value=!0,i.value="",c.value.color="#ed4259"):(C.value=!1,i.value="",c.value.color="rgba(255,255,255,0.2)"),l.value.theme=k,U(l.value)},S=k=>{l.value.font=k,U(l.value)},P=()=>{l.value.font=-1,l.value.customFontName=r.value,U(l.value)},R=A(()=>n.config.fontSize),x=()=>{l.value.fontSize<48&&(l.value.fontSize+=2),U(l.value)},d=()=>{l.value.fontSize>12&&(l.value.fontSize-=2),U(l.value)},m=A(()=>n.config.spacing),G=()=>{n.config.spacing.letter-=.01,U(l.value)},de=()=>{n.config.spacing.letter+=.01,U(l.value)},ge=()=>{n.config.spacing.line-=.1,U(l.value)},pe=()=>{n.config.spacing.line+=.1,U(l.value)},fe=()=>{n.config.spacing.paragraph-=.1,U(l.value)},oe=()=>{n.config.spacing.paragraph+=.1,U(l.value)},he=A(()=>n.config.readWidth),ne=()=>{l.value.readWidth+=160,U(l.value)},ve=()=>{l.value.readWidth>640&&(l.value.readWidth-=160),U(l.value)},se=A(()=>n.config.infiniteLoading),ae=k=>{l.value.infiniteLoading=k,U(l.value)},U=k=>{n.setConfig(k),localStorage.setItem("config",JSON.stringify(k)),ie(k)},ie=k=>{Ie.saveReadConfig(k)};return(k,w)=>{const q=We,le=qe,me=_e;return f(),v("div",{class:Q(["settings-wrapper",{night:o(C),day:!o(C)}]),style:T(o(V))},[St,e("div",wt,[e("ul",null,[e("li",Et,[Ut,(f(!0),v(j,null,ee(o(D),(_,K)=>(f(),v("span",{class:Q(["theme-item",{selected:o(M)==K}]),key:K,style:T(_),ref_for:!0,ref:"themes",onClick:Ce=>E(K)},[K<6?(f(),v("em",Dt,"")):(f(),v("em",xt,H(o(i)),1))],14,Qt))),128))]),e("li",_t,[Vt,(f(!0),v(j,null,ee(o(I),(_,K)=>(f(),v("span",{class:Q(["font-item",{selected:o(L)==K}]),key:K,onClick:Ce=>S(K)},H(_),11,Mt))),128))]),e("li",Ft,[Ot,W(q,{effect:"dark",content:"自定义的字体名称",placement:"top"},{default:J(()=>[He(e("input",{type:"text",class:"font-item font-item-input","onUpdate:modelValue":w[0]||(w[0]=_=>Ae(r)?r.value=_:null),placeholder:"请输入自定义的字体名称"},null,512),[[Je,o(r)]])]),_:1}),W(me,{placement:"top",width:"180",trigger:"click",visible:o(p),"onUpdate:visible":w[3]||(w[3]=_=>Ae(p)?p.value=_:null)},{reference:J(()=>[Kt]),default:J(()=>[Pt,Rt,e("div",Lt,[W(le,{size:"small",plain:"",onClick:w[1]||(w[1]=_=>p.value=!1)},{default:J(()=>[Z("取消")]),_:1}),W(le,{type:"primary",size:"small",onClick:w[2]||(w[2]=_=>{P(),p.value=!1})},{default:J(()=>[Z("确定")]),_:1})])]),_:1},8,["visible"])]),e("li",zt,[Nt,e("div",Ht,[e("span",{class:"less",onClick:d},Wt),qt,Z(),e("span",Tt,H(o(R)),1),Gt,e("span",{class:"more",onClick:x},Yt)])]),e("li",Xt,[jt,e("div",$t,[e("span",{class:"less",onClick:G},to),oo,Z(),e("span",no,H(o(m).letter.toFixed(2)),1),so,e("span",{class:"more",onClick:de},io)])]),e("li",lo,[co,e("div",ro,[e("span",{class:"less",onClick:ge},uo),go,Z(),e("span",po,H(o(m).line.toFixed(1)),1),fo,e("span",{class:"more",onClick:pe},vo)])]),e("li",mo,[Co,e("div",bo,[e("div",yo,[e("span",{class:"less",onClick:fe},ko),Bo,e("span",So,H(o(m).paragraph.toFixed(1)),1),wo,e("span",{class:"more",onClick:oe},Uo)])])]),o(n).miniInterface?ce("",!0):(f(),v("li",Qo,[Do,e("div",xo,[e("span",{class:"less",onClick:ve},Vo),Mo,Z(),e("span",Fo,H(o(he)),1),Oo,e("span",{class:"more",onClick:ne},Ro)])])),e("li",Lo,[Ko,(f(),v("span",{class:Q(["infinite-loading-item",{selected:o(se)==!1}]),key:0,onClick:w[4]||(w[4]=_=>ae(!1))},"关闭",2)),(f(),v("span",{class:Q(["infinite-loading-item",{selected:o(se)==!0}]),key:1,onClick:w[5]||(w[5]=_=>ae(!0))},"开启",2))])])])],6)}}},No=te(zo,[["__scopeId","data-v-7c8b23a7"]]);const Ho={class:"wrapper"},Jo=["onClick"],Wo={__name:"CatalogItem",props:["index","source","gotoChapter"],setup(a){const n=a,g=ue(),C=A(()=>g.readingBook.index),i=c=>c==C.value,D=A(()=>{var c;return((c=n.source)==null?void 0:c.catas)??[n.source]});return(c,I)=>(f(),v("div",Ho,[(f(!0),v(j,null,ee(o(D),r=>(f(),v("div",{class:Q(["cata-text",{selected:i(r.index)}]),key:r.url,onClick:p=>a.gotoChapter(r)},H(r.title),11,Jo))),128))]))}},qo=te(Wo,[["__scopeId","data-v-63716c56"]]);const To=a=>(ke("data-v-fb222a7f"),a=a(),Be(),a),Go=To(()=>e("div",{class:"title"},"目录",-1)),Zo={__name:"PopCatalog",emits:["getContent"],setup(a,{emit:n}){const g=ue(),C=A(()=>I.value==6),{catalog:i,popCataVisible:D,miniInterface:c}=Ve(g),I=A(()=>g.config.theme),r=A(()=>({background:X.themes[I.value].popup})),p=A({get:()=>g.readingBook.index,set:S=>g.readingBook.index=S}),l=A(()=>{let S=i.value;if(c.value)return S;let P=Math.ceil(S.length/2),R=new Array(P),x=0;for(;x<P;)R[x]={index:x,catas:S.slice(2*x,2*x+2)},x++;return R}),V=S=>{p.value=i.value.indexOf(S),g.setPopCataVisible(!1),g.setContentLoading(!0),n("getContent",p.value)},M=y(),L=A(()=>c.value?p.value:Math.floor(p.value/2)),E=y(!1);return Me(D,S=>{S&&!E.value&&(E.value=!0),S&&re(()=>M.value.scrollToIndex(L.value))}),(S,P)=>(f(),v("div",{class:Q({"cata-wrapper":!0,correctSize:o(E)}),style:T(o(r))},[Go,W(o(Te),{style:{height:"300px",overflow:"auto"},class:Q({night:o(C),day:!o(C)}),ref_key:"virtualListRef",ref:M,"data-key":"index","wrap-class":"data-wrapper","item-class":"cata","data-sources":o(l),"data-component":qo,"estimate-size":40,"extra-props":{gotoChapter:V}},null,8,["class","data-sources","extra-props"])],6))}},Yo=te(Zo,[["__scopeId","data-v-fb222a7f"]]),Xo=(a,n,g,C)=>(a/=C/2,a<1?g/2*a*a+n:(a--,-g/2*(a*(a-2)-1)+n)),jo=()=>{let a,n,g,C,i,D,c,I,r,p,l,V,M;function L(){let d=a.scrollTop||a.scrollY||a.pageYOffset;return d=typeof d>"u"?0:d,d}function E(d){const m=d.getBoundingClientRect().top,G=a.getBoundingClientRect?a.getBoundingClientRect().top:0;return m-G+g}function S(d){a.scrollTo?a.scrollTo(0,d):a.scrollTop=d}function P(d){p||(p=d),l=d-p,V=D(l,g,I,r),S(V),l<r?requestAnimationFrame(P):R()}function R(){S(g+I),n&&c&&(n.setAttribute("tabindex","-1"),n.focus()),typeof M=="function"&&M(),p=!1}function x(d,m={}){switch(r=m.duration||1e3,i=m.offset||0,M=m.callback,D=m.easing||Xo,c=m.a11y||!1,typeof m.container){case"object":a=m.container;break;case"string":a=document.querySelector(m.container);break;default:a=window}switch(g=L(),typeof d){case"number":n=void 0,c=!1,C=g+d;break;case"object":n=d,C=E(n);break;case"string":n=document.querySelector(d),C=E(n);break}switch(I=C-g+i,typeof m.duration){case"number":r=m.duration;break;case"function":r=m.duration(I);break}requestAnimationFrame(P)}return x},Y=jo();const O=a=>(ke("data-v-fc41fde5"),a=a(),Be(),a),$o={class:"tools"},en=O(()=>e("div",{class:"iconfont"},"",-1)),tn=O(()=>e("div",{class:"icon-text"},"目录",-1)),on=[en,tn],nn=O(()=>e("div",{class:"iconfont"},"",-1)),sn=O(()=>e("div",{class:"icon-text"},"设置",-1)),an=[nn,sn],ln=O(()=>e("div",{class:"iconfont"},"",-1)),cn=O(()=>e("div",{class:"icon-text"},"书架",-1)),rn=[ln,cn],An=O(()=>e("div",{class:"iconfont"},"",-1)),un=O(()=>e("div",{class:"icon-text"},"顶部",-1)),dn=[An,un],gn=O(()=>e("div",{class:"iconfont"},"",-1)),pn=O(()=>e("div",{class:"icon-text"},"底部",-1)),fn=[gn,pn],hn={class:"tools"},vn=O(()=>e("div",{class:"iconfont"},"",-1)),mn={key:0},Cn={key:0},bn=O(()=>e("div",{class:"iconfont"},"",-1)),yn=O(()=>e("div",{class:"chapter-bar"},null,-1)),In={class:"content"},kn=["chapterIndex"],Bn={__name:"BookChapter",setup(a){const n=y(!1),g=y(null),C=y();Me(n,t=>{var s;if(!t)return(s=g.value)==null?void 0:s.close();g.value=je.service({target:C.value,spinner:et,text:"正在获取信息",lock:!0})});const i=ue();try{const t=JSON.parse(localStorage.getItem("config"));t!=null&&i.setConfig(t)}catch{localStorage.removeItem("config")}const D=y(),c=y(!0),I=y(!1),r=y([]),p=y(null),l=y(null),{catalog:V,popCataVisible:M,readSettingsVisible:L,miniInterface:E,showContent:S,config:P,readingBook:R}=Ve(i),x=A({get:()=>R.value.chapterPos,set:t=>R.value.chapterPos=t}),d=A({get:()=>R.value.index,set:t=>R.value.index=t}),m=A(()=>P.value.theme),G=A(()=>P.value.infiniteLoading),de=A(()=>i.config.font>=0?X.fonts[i.config.font]:i.config.customFontName),ge=A(()=>i.config.fontSize+"px"),pe=A(()=>X.themes[m.value].body),fe=A(()=>X.themes[m.value].content),oe=A(()=>X.themes[m.value].popup),he=A(()=>E.value?window.innerWidth+"px":i.config.readWidth-130+"px"),ne=A(()=>E.value?window.innerWidth-33:i.config.readWidth-33),ve=A(()=>({background:pe.value})),se=A(()=>({background:fe.value,width:he.value})),ae=A(()=>({background:oe.value,marginLeft:E.value?0:-(i.config.readWidth/2+68)+"px",display:E.value&&!I.value?"none":"block"})),U=A(()=>({background:oe.value,marginRight:E.value?0:-(i.config.readWidth/2+52)+"px",display:E.value&&!I.value?"none":"block"})),ie=A(()=>m.value==6);ye(()=>{r.value.length>0&&(i.setContentLoading(!1),Le())}),ye(()=>{var t;document.title=((t=V.value[d.value])==null?void 0:t.title)||document.title,i.saveBookProcess()}),ye(()=>{var t,s;G.value?(s=p.value)==null||s.observe(D.value):(t=p.value)==null||t.disconnect()});const k=y(),w=(t,s=!0,b=0)=>{s&&(i.setShowContent(!1),n.value=!0,Y(k.value,{duration:0}),Ee(t,b));let B=sessionStorage.getItem("bookUrl"),{title:F,index:z}=V.value[t];Ie.getBookContent(B,z).then(h=>{if(h.data.isSuccess){let Ke=h.data.data.split(/\n+/);be({index:t,content:Ke,title:F},s),s&&le(b)}else{N({message:h.data.errorMsg,type:"error"});let $=[h.data.errorMsg];be({index:t,content:$,title:F},s)}if(i.setContentLoading(!0),n.value=!1,c.value=!1,i.setShowContent(!0),!h.data.isSuccess)throw h.data},h=>{throw N({message:"获取章节内容失败",type:"error"}),be({index:t,content:["获取章节内容失败！"],title:F},s),n.value=!1,i.setShowContent(!0),h})},q=y(),le=t=>{re(()=>{let s=0;if(q.value.length==1){for(let b of q.value[0].children)if(s+=parseInt(b.getAttribute("wordCount"))+1,s-1>=t){Y(b,{duration:0});break}}})},me=()=>{if(q.value.length==0)return;let t=q.value.find(b=>b.getAttribute("chapterIndex")==d.value);if(!t)return;let s=0;for(let b of t.children)if(s+=parseInt(b.getAttribute("wordCount"))+1,b.getBoundingClientRect().top>=0){x.value=s-1;break}},_=y(),K=()=>{Y(k.value)},Ce=()=>{Y(_.value)},Se=()=>{i.setContentLoading(!0);let t=d.value+1;typeof V.value[t]<"u"?(N({message:"下一章",type:"info"}),w(t)):N({message:"本章是最后一章",type:"error"})},we=()=>{i.setContentLoading(!0);let t=d.value-1;typeof V.value[t]<"u"?(N({message:"上一章",type:"info"}),w(t)):N({message:"本章是第一章",type:"error"})},Ee=(t,s=x.value)=>{let b=sessionStorage.getItem("bookUrl");var B=JSON.parse(localStorage.getItem(b));B.index=t,B.chapterPos=s,localStorage.setItem(b,JSON.stringify(B)),B=JSON.parse(localStorage.getItem("readingRecent")),B.chapterIndex=t,B.chapterPos=s,localStorage.setItem("readingRecent",JSON.stringify(B)),d.value=t,x.value=s,sessionStorage.setItem("chapterIndex",t),sessionStorage.setItem("chapterPos",String(s))},be=async(t,s)=>{s&&r.value.splice(0),r.value.push(t)},Fe=()=>{let t=r.value.slice(-1)[0].index;V.value.length-1>t&&w(t+1,!1)},Oe=Ye(),Ue=()=>{Oe.push("/")},Qe=t=>{switch(t.key){case"ArrowLeft":t.stopPropagation(),t.preventDefault(),we();break;case"ArrowRight":t.stopPropagation(),t.preventDefault(),Se();break;case"ArrowUp":t.stopPropagation(),t.preventDefault(),document.documentElement.scrollTop===0?N({message:"已到达页面顶部",type:"warn"}):Y(0-document.documentElement.clientHeight+100);break;case"ArrowDown":t.stopPropagation(),t.preventDefault(),document.documentElement.clientHeight+document.documentElement.scrollTop===document.documentElement.scrollHeight?N({message:"已到达页面底部",type:"warn"}):Y(document.documentElement.clientHeight-100);break}},Pe=t=>{if(!n.value)for(let{isIntersecting:s}of t){if(!s)return;Fe()}},Re=t=>{re(()=>{for(let{isIntersecting:s,target:b,boundingClientRect:B}of t){let F=parseInt(b.getAttribute("chapterIndex"));s?d.value=F:B.top<0?d.value=F+1:d.value=F-1}})},Le=()=>{re(()=>{let t=q.value;t&&t.forEach(s=>l.value.observe(s))})};return Ge((t,s,b)=>{me(),Ee(d.value),b()}),xe(()=>{n.value=!0;let t=sessionStorage.getItem("bookUrl"),s=sessionStorage.getItem("bookName"),b=sessionStorage.getItem("bookAuthor"),B=Number(sessionStorage.getItem("chapterIndex")||0),F=Number(sessionStorage.getItem("chapterPos")||0);var z=JSON.parse(localStorage.getItem(t));(z==null||B!=z.index||F!=z.chapterPos)&&(z={bookName:s,bookAuthor:b,bookUrl:t,index:B,chapterPos:F},localStorage.setItem(t,JSON.stringify(z))),Ie.getChapterList(t).then(h=>{if(n.value=!1,!h.data.isSuccess){N({message:h.data.errorMsg,type:"error"}),setTimeout(Ue,500);return}let $=h.data.data;i.setCatalog($),i.setReadingBook(z),w(B,!0,F),window.addEventListener("keyup",Qe),p.value=new IntersectionObserver(Pe,{rootMargin:"-100% 0% 20% 0%"}),G.value&&p.value.observe(D.value),l.value=new IntersectionObserver(Re),document.title=null,document.title=s+" | "+V.value[B].title},h=>{throw n.value=!1,N({message:"获取书籍目录失败",type:"error"}),h})}),Ze(()=>{var t,s;window.removeEventListener("keyup",Qe),L.value=!1,M.value=!1,(t=p.value)==null||t.disconnect(),(s=l.value)==null||s.disconnect()}),(t,s)=>{const b=Yo,B=_e,F=No,z=it;return f(),v("div",{class:Q(["chapter-wrapper",{night:o(ie),day:!o(ie)}]),style:T(o(ve)),onClick:s[2]||(s[2]=h=>I.value=!o(I))},[e("div",{class:"tool-bar",style:T(o(ae))},[e("div",$o,[W(B,{placement:"right",width:o(ne),trigger:"click","show-arrow":!1,visible:o(M),"onUpdate:visible":s[0]||(s[0]=h=>Ae(M)?M.value=h:null),"popper-class":"pop-cata"},{reference:J(()=>[e("div",{class:Q(["tool-icon",{"no-point":o(c)}])},on,2)]),default:J(()=>[W(b,{onGetContent:w,class:"popup"})]),_:1},8,["width","visible"]),W(B,{placement:"right",width:o(ne),trigger:"click","show-arrow":!1,visible:o(L),"onUpdate:visible":s[1]||(s[1]=h=>Ae(L)?L.value=h:null),"popper-class":"pop-setting"},{reference:J(()=>[e("div",{class:Q(["tool-icon",{"no-point":o(c)}])},an,2)]),default:J(()=>[W(F,{class:"popup"})]),_:1},8,["width","visible"]),e("div",{class:"tool-icon",onClick:Ue},rn),e("div",{class:Q(["tool-icon",{"no-point":o(c)}]),onClick:K},dn,2),e("div",{class:Q(["tool-icon",{"no-point":o(c)}]),onClick:Ce},fn,2)])],4),e("div",{class:"read-bar",style:T(o(U))},[e("div",hn,[e("div",{class:Q(["tool-icon",{"no-point":o(c)}]),onClick:we},[vn,o(E)?(f(),v("span",mn,"上一章")):ce("",!0)],2),e("div",{class:Q(["tool-icon",{"no-point":o(c)}]),onClick:Se},[o(E)?(f(),v("span",Cn,"下一章")):ce("",!0),bn],2)])],4),yn,e("div",{class:"chapter",ref_key:"content",ref:C,style:T(o(se))},[e("div",In,[e("div",{class:"top-bar",ref_key:"top",ref:k},null,512),(f(!0),v(j,null,ee(o(r),h=>(f(),v("div",{key:h.index,chapterIndex:h.index,ref_for:!0,ref_key:"chapter",ref:q},[o(S)?(f(),Xe(z,{key:0,contents:h.content,title:h.title,spacing:o(i).config.spacing,fontSize:o(ge),fontFamily:o(de)},null,8,["contents","title","spacing","fontSize","fontFamily"])):ce("",!0)],8,kn))),128)),e("div",{class:"loading",ref_key:"loading",ref:D},null,512),e("div",{class:"bottom-bar",ref_key:"bottom",ref:_},null,512)])],4)],6)}}},Un=te(Bn,[["__scopeId","data-v-fc41fde5"]]);export{Un as default};
