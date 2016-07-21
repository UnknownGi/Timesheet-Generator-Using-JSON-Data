describe("Checking Validity", function() {
    describe("Username:: Input#1", function() {
        it("I", function() {
            expect(checkUsername("I")).toBeTruthy();
        });
    });

    describe("Username:: Input#2", function() {
        it("-*&wx+/}ymmLp]$qS7FDdeCGs'y51FOfiKsmzg)Mc€", function() {
            expect(checkUsername("-*&wx+/}ymmLp]$qS7FDdeCGs'y51FOfiKsmzg)Mc€")).toBeTruthy();
        });
    });

    describe("Username:: Input#3", function() {
        it("Ansar", function() {
            expect(checkUsername("Ansar")).toBeFalsy();
        });
    });

    describe("Username:: Input#4", function() {
        it("Anwar  Maqsood", function() {
            expect(checkUsername("Anwar  Maqsood")).toBeTruthy();
        });
    });

    describe("Username:: Input#5", function() {
        it("_e[€TW[€_aOeF", function() {
            expect(checkUsername("_e[€TW[€_aOeF")).toBeTruthy();
        });
    });

    describe("Username:: Input#6", function() {
        it("l^c/i;RrGWl#:)Dvm,39Rkpiim5", function() {
            expect(checkUsername("l^c/i;RrGWl#:)Dvm,39Rkpiim5")).toBeTruthy();
        });
    });

    describe("Username:: Input#7", function() {
        it("$Nn[)c^?1t*ze]{},l?DtPjko3iU8Zw~W24*u%1huFd5zmv-", function() {
            expect(checkUsername("$Nn[)c^?1t*ze]{},l?DtPjko3iU8Zw~W24*u%1huFd5zmv-")).toBeTruthy();
        });
    });

    describe("Username:: Input#8", function() {
        it("fipjoWz.m?QJ'C)#Wl'3=A*&iBmy/Z:C_F3HaH|B", function() {
            expect(checkUsername("fipjoWz.m?QJ'C)#Wl'3=A*&iBmy/Z:C_F3HaH|B")).toBeTruthy();
        });
    });

    describe("Username:: Input#9", function() {
        it("", function() {
            expect(checkUsername("")).toBeTruthy();
        });
    });

    describe("Username:: Input#10", function() {
        it(".^=L`Srw9<R>9Ut)P{%f{CK.Ul;%KX}>(z-ex:,)", function() {
            expect(checkUsername(".^=L`Srw9<R>9Ut)P{%f{CK.Ul;%KX}>(z-ex:,)")).toBeTruthy();
        });
    });

    describe("Username:: Input#11", function() {
        it("8`CA.^XEp/rnEgh", function() {
            expect(checkUsername("8`CA.^XEp/rnEgh")).toBeTruthy();
        });
    });

    describe("Username:: Input#12", function() {
        it("^,t9py+P@_2wp*&", function() {
            expect(checkUsername("^,t9py+P@_2wp*&")).toBeTruthy();
        });
    });

    describe("Username:: Input#13", function() {
        it("Haz6f/x~Z`vYx6e=5MaUb2x3N€v/hSa7*DNeIP,VsX", function() {
            expect(checkUsername("Haz6f/x~Z`vYx6e=5MaUb2x3N€v/hSa7*DNeIP,VsX")).toBeTruthy();
        });
    });

    describe("Username:: Input#14", function() {
        it("oS.=I&<&;q|x", function() {
            expect(checkUsername("oS.=I&<&;q|x")).toBeTruthy();
        });
    });

    describe("Username:: Input#15", function() {
        it("(roE8G}oga51XOdtALjQS", function() {
            expect(checkUsername("(roE8G}oga51XOdtALjQS")).toBeTruthy();
        });
    });

    describe("Username:: Input#16", function() {
        it("bHR22UP4x'TL0bx66vx&5cz-@:", function() {
            expect(checkUsername("bHR22UP4x'TL0bx66vx&5cz-@:")).toBeTruthy();
        });
    });

    describe("Username:: Input#17", function() {
        it("_$Z[=,FNtAk^n", function() {
            expect(checkUsername("_$Z[=,FNtAk^n")).toBeTruthy();
        });
    });

    describe("Username:: Input#18", function() {
        it("tCG4A1n@G€/yZW'=Aukm];0t/k$<)+12TBx'n1y", function() {
            expect(checkUsername("tCG4A1n@G€/yZW'=Aukm];0t/k$<)+12TBx'n1y")).toBeTruthy();
        });
    });

    describe("Username:: Input#19", function() {
        it("{<bwU]q8TCvx]0wCVETZGVtaO%TlBxMAjte}", function() {
            expect(checkUsername("{<bwU]q8TCvx]0wCVETZGVtaO%TlBxMAjte}")).toBeTruthy();
        });
    });

    describe("Username:: Input#20", function() {
        it("EZmE}gM#D^b~fjYbA{+ax1>z", function() {
            expect(checkUsername("EZmE}gM#D^b~fjYbA{+ax1>z")).toBeTruthy();
        });
    });

    describe("Username:: Input#21", function() {
        it("MuEGxx1ZB'O(CZnD.bI.itX?6Ekn3I,w(", function() {
            expect(checkUsername("MuEGxx1ZB'O(CZnD.bI.itX?6Ekn3I,w(")).toBeTruthy();
        });
    });

    describe("Username:: Input#22", function() {
        it("Z[7,2€]O@,83]%4G{(yPrp0gexs3H", function() {
            expect(checkUsername("Z[7,2€]O@,83]%4G{(yPrp0gexs3H")).toBeTruthy();
        });
    });

    describe("Username:: Input#23", function() {
        it("$^S2^rVF|_:+tk|1+~U(Ea", function() {
            expect(checkUsername("$^S2^rVF|_:+tk|1+~U(Ea")).toBeTruthy();
        });
    });

    describe("Username:: Input#24", function() {
        it("@Hlhg)oNKOlE#Wn^8p&~if}W4^E.NqxIUM)xo", function() {
            expect(checkUsername("@Hlhg)oNKOlE#Wn^8p&~if}W4^E.NqxIUM)xo")).toBeTruthy();
        });
    });

    describe("Username:: Input#25", function() {
        it("z<", function() {
            expect(checkUsername("z<")).toBeTruthy();
        });
    });

    describe("Username:: Input#26", function() {
        it("-u7GFl", function() {
            expect(checkUsername("-u7GFl")).toBeTruthy();
        });
    });

    describe("Username:: Input#27", function() {
        it("k*^=H,V^@ZGjs.Vx5C7€d?QKK€@?HT$|XXf+r[xlOeE%_z", function() {
            expect(checkUsername("k*^=H,V^@ZGjs.Vx5C7€d?QKK€@?HT$|XXf+r[xlOeE%_z")).toBeTruthy();
        });
    });

    describe("Username:: Input#28", function() {
        it("sCPi:$vw0oUW0mz)'}NtM?QxpDQ.J@5€RW", function() {
            expect(checkUsername("sCPi:$vw0oUW0mz)'}NtM?QxpDQ.J@5€RW")).toBeTruthy();
        });
    });

    describe("Username:: Input#29", function() {
        it("*ex~x9nCEHEFFF[//@;vKo}", function() {
            expect(checkUsername("*ex~x9nCEHEFFF[//@;vKo}")).toBeTruthy();
        });
    });

    describe("Username:: Input#30", function() {
        it("E||VBFXgD}5Q~Zl", function() {
            expect(checkUsername("E||VBFXgD}5Q~Zl")).toBeTruthy();
        });
    });

    describe("Username:: Input#31", function() {
        it("rz@dBd-*|%T)}wCU)D8QZ,", function() {
            expect(checkUsername("rz@dBd-*|%T)}wCU)D8QZ,")).toBeTruthy();
        });
    });

    describe("Username:: Input#32", function() {
        it("", function() {
            expect(checkUsername("")).toBeTruthy();
        });
    });

    describe("Username:: Input#33", function() {
        it("dH8y~^k4<&RZdVEE`(L#?Kt9", function() {
            expect(checkUsername("dH8y~^k4<&RZdVEE`(L#?Kt9")).toBeTruthy();
        });
    });

    describe("Username:: Input#34", function() {
        it("2>xX*/IuHc", function() {
            expect(checkUsername("2>xX*/IuHc")).toBeTruthy();
        });
    });

    describe("Username:: Input#35", function() {
        it("J*&7jyGCdbc]~P5LWbzxROI", function() {
            expect(checkUsername("J*&7jyGCdbc]~P5LWbzxROI")).toBeTruthy();
        });
    });

    describe("Username:: Input#36", function() {
        it(";Q?G99b6ex9'", function() {
            expect(checkUsername(";Q?G99b6ex9'")).toBeTruthy();
        });
    });

    describe("Username:: Input#37", function() {
        it("6Sf1@qc][ah|su0]d", function() {
            expect(checkUsername("6Sf1@qc][ah|su0]d")).toBeTruthy();
        });
    });

    describe("Username:: Input#38", function() {
        it("7C@", function() {
            expect(checkUsername("7C@")).toBeTruthy();
        });
    });

    describe("Username:: Input#39", function() {
        it("€r^dDU-7(L]2[(^whCW0,H7$€6/5++nY*2#suv:7aSL`", function() {
            expect(checkUsername("€r^dDU-7(L]2[(^whCW0,H7$€6/5++nY*2#suv:7aSL`")).toBeTruthy();
        });
    });

    describe("Username:: Input#40", function() {
        it("_Q%>;ReLGwRPQYB}€+_.f@#1[QgT", function() {
            expect(checkUsername("_Q%>;ReLGwRPQYB}€+_.f@#1[QgT")).toBeTruthy();
        });
    });

    describe("Username:: Input#41", function() {
        it("XM4oQG~QHnnNTYez%;i6L3t9D}z4tQ~.,3/mho9G'n]@=>'X+", function() {
            expect(checkUsername("XM4oQG~QHnnNTYez%;i6L3t9D}z4tQ~.,3/mho9G'n]@=>'X+")).toBeTruthy();
        });
    });

    describe("Username:: Input#42", function() {
        it("|6^S9T_er", function() {
            expect(checkUsername("|6^S9T_er")).toBeTruthy();
        });
    });

    describe("Username:: Input#43", function() {
        it("Q", function() {
            expect(checkUsername("Q")).toBeTruthy();
        });
    });

    describe("Username:: Input#44", function() {
        it("hGf*aF;8:7wuqCz'^@&d>vE]&DYul1UHik3c#~&{`", function() {
            expect(checkUsername("hGf*aF;8:7wuqCz'^@&d>vE]&DYul1UHik3c#~&{`")).toBeTruthy();
        });
    });

    describe("Username:: Input#45", function() {
        it("G[4?)4PL8<*D+C{€wfCs^", function() {
            expect(checkUsername("G[4?)4PL8<*D+C{€wfCs^")).toBeTruthy();
        });
    });

    describe("Username:: Input#46", function() {
        it("Ggw^XNJ>P'9:T&$jC|G", function() {
            expect(checkUsername("Ggw^XNJ>P'9:T&$jC|G")).toBeTruthy();
        });
    });

    describe("Username:: Input#47", function() {
        it("[?V>DF34Y5kb#2S/3Oi^v}KP)uVy=Dix'", function() {
            expect(checkUsername("[?V>DF34Y5kb#2S/3Oi^v}KP)uVy=Dix'")).toBeTruthy();
        });
    });

    describe("Username:: Input#48", function() {
        it(">WU", function() {
            expect(checkUsername(">WU")).toBeTruthy();
        });
    });

    describe("Username:: Input#49", function() {
        it("f4ppA#3Ko[$+Kj7xd%6w#?(G4|", function() {
            expect(checkUsername("f4ppA#3Ko[$+Kj7xd%6w#?(G4|")).toBeTruthy();
        });
    });

    describe("Username:: Input#50", function() {
        it("+€'CV", function() {
            expect(checkUsername("+€'CV")).toBeTruthy();
        });
    });

    describe("Username:: Input#51", function() {
        it("7(R5%2<X(FJ0Ge&)Wb,mK$}/pcxCakKiSi9dEYWLMI7W&zM", function() {
            expect(checkUsername("7(R5%2<X(FJ0Ge&)Wb,mK$}/pcxCakKiSi9dEYWLMI7W&zM")).toBeTruthy();
        });
    });

    describe("Username:: Input#52", function() {
        it("=7x+;N|wIS&o{m^PrEf-,6", function() {
            expect(checkUsername("=7x+;N|wIS&o{m^PrEf-,6")).toBeTruthy();
        });
    });

    describe("Username:: Input#53", function() {
        it("]qt+0_Kq+,a(?~65?r$r;&v&iu(QUwB.h4", function() {
            expect(checkUsername("]qt+0_Kq+,a(?~65?r$r;&v&iu(QUwB.h4")).toBeTruthy();
        });
    });

    describe("Username:: Input#54", function() {
        it("i3Y:A`r:BKi9y'|72UyRa54Mt]^", function() {
            expect(checkUsername("i3Y:A`r:BKi9y'|72UyRa54Mt]^")).toBeTruthy();
        });
    });

    describe("Username:: Input#55", function() {
        it("[m},oxrEP>Yp€>ST+nvfX]@1fd", function() {
            expect(checkUsername("[m},oxrEP>Yp€>ST+nvfX]@1fd")).toBeTruthy();
        });
    });

    describe("Username:: Input#56", function() {
        it("-;rUv&VW|*v@aTi+|oxqh?Zr5Ek*NxXbm4zH'poHzwb", function() {
            expect(checkUsername("-;rUv&VW|*v@aTi+|oxqh?Zr5Ek*NxXbm4zH'poHzwb")).toBeTruthy();
        });
    });

    describe("Username:: Input#57", function() {
        it("6}`8'1)P+|_6D-Z`Lx'*j12$i+#8eU1gKqX*7EK}", function() {
            expect(checkUsername("6}`8'1)P+|_6D-Z`Lx'*j12$i+#8eU1gKqX*7EK}")).toBeTruthy();
        });
    });

    describe("Username:: Input#58", function() {
        it("uUj4)~5x-tEKkXX8$i+*€oD_m(;r7H]r", function() {
            expect(checkUsername("uUj4)~5x-tEKkXX8$i+*€oD_m(;r7H]r")).toBeTruthy();
        });
    });

    describe("Username:: Input#59", function() {
        it("UuXf:TK]Yrw9m(f]Jk:+2U$p$;[QtvjZL1xsln|W#>", function() {
            expect(checkUsername("UuXf:TK]Yrw9m(f]Jk:+2U$p$;[QtvjZL1xsln|W#>")).toBeTruthy();
        });
    });

    describe("Username:: Input#60", function() {
        it("PHl4-8~3AiNWiP}LI1]u[{H5>eFa7yUc?%KhsoA~eK2k}K7.", function() {
            expect(checkUsername("PHl4-8~3AiNWiP}LI1]u[{H5>eFa7yUc?%KhsoA~eK2k}K7.")).toBeTruthy();
        });
    });

    describe("Username:: Input#61", function() {
        it("sr]74%Z16Q%79`f,GZ-n9#zw]jHh3DqL", function() {
            expect(checkUsername("sr]74%Z16Q%79`f,GZ-n9#zw]jHh3DqL")).toBeTruthy();
        });
    });

    describe("Username:: Input#62", function() {
        it("xG|yg6ykQc,N%|OPqNg&*G[Y_>9NE=xZzWCc6Pj", function() {
            expect(checkUsername("xG|yg6ykQc,N%|OPqNg&*G[Y_>9NE=xZzWCc6Pj")).toBeTruthy();
        });
    });

    describe("Username:: Input#63", function() {
        it("WgZ9*A/w?u-Ezfehucqc0|>'Y;Zgo?uB1}}Qmcxb_{o", function() {
            expect(checkUsername("WgZ9*A/w?u-Ezfehucqc0|>'Y;Zgo?uB1}}Qmcxb_{o")).toBeTruthy();
        });
    });

    describe("Username:: Input#64", function() {
        it("rV|zSiwmx", function() {
            expect(checkUsername("rV|zSiwmx")).toBeTruthy();
        });
    });

    describe("Username:: Input#65", function() {
        it("*_HC%wxGBU}^SGAgI~e2xj", function() {
            expect(checkUsername("*_HC%wxGBU}^SGAgI~e2xj")).toBeTruthy();
        });
    });

    describe("Username:: Input#66", function() {
        it("pgKzr[`*M@|y't:zUn@(nuI0,Oxg=", function() {
            expect(checkUsername("pgKzr[`*M@|y't:zUn@(nuI0,Oxg=")).toBeTruthy();
        });
    });

    describe("Username:: Input#67", function() {
        it("[=aD^p{BXm.266{N^qU=7wq", function() {
            expect(checkUsername("[=aD^p{BXm.266{N^qU=7wq")).toBeTruthy();
        });
    });

    describe("Username:: Input#68", function() {
        it(",VDF^hH9w1,Ax0nKXa[Iq`€", function() {
            expect(checkUsername(",VDF^hH9w1,Ax0nKXa[Iq`€")).toBeTruthy();
        });
    });

    describe("Username:: Input#69", function() {
        it("&c9U'R;/0L))-R", function() {
            expect(checkUsername("&c9U'R;/0L))-R")).toBeTruthy();
        });
    });

    describe("Username:: Input#70", function() {
        it("k4H70`hg>YKpIgm0N{zknJF904xyx|hmxI}", function() {
            expect(checkUsername("k4H70`hg>YKpIgm0N{zknJF904xyx|hmxI}")).toBeTruthy();
        });
    });

    describe("Username:: Input#71", function() {
        it("=(ons)Yek-P=1@xY*U(EIZn", function() {
            expect(checkUsername("=(ons)Yek-P=1@xY*U(EIZn")).toBeTruthy();
        });
    });

    describe("Username:: Input#72", function() {
        it("gx}>`I44mr,XXoVM<^ds6Zh+UQT1Ed3OwnX}x@|1j^p", function() {
            expect(checkUsername("gx}>`I44mr,XXoVM<^ds6Zh+UQT1Ed3OwnX}x@|1j^p")).toBeTruthy();
        });
    });

    describe("Username:: Input#73", function() {
        it("]AL[0z", function() {
            expect(checkUsername("]AL[0z")).toBeTruthy();
        });
    });

    describe("Username:: Input#74", function() {
        it("K1i}ep<[.~6O:{Ww4`KL:{r", function() {
            expect(checkUsername("K1i}ep<[.~6O:{Ww4`KL:{r")).toBeTruthy();
        });
    });

    describe("Username:: Input#75", function() {
        it("*]gvNjSK/1O4DIIM,-`_|o`JprhPygx<b?Y|5sMC~?9", function() {
            expect(checkUsername("*]gvNjSK/1O4DIIM,-`_|o`JprhPygx<b?Y|5sMC~?9")).toBeTruthy();
        });
    });

    describe("Username:: Input#76", function() {
        it("65VpJ1J?w,U]NesEn-1v8wul,K", function() {
            expect(checkUsername("65VpJ1J?w,U]NesEn-1v8wul,K")).toBeTruthy();
        });
    });

    describe("Username:: Input#77", function() {
        it("=<€kIQf]v%T", function() {
            expect(checkUsername("=<€kIQf]v%T")).toBeTruthy();
        });
    });

    describe("Username:: Input#78", function() {
        it("nYYRCJLcjy;-m6P4+=y3rVQ*wLO0I/", function() {
            expect(checkUsername("nYYRCJLcjy;-m6P4+=y3rVQ*wLO0I/")).toBeTruthy();
        });
    });

    describe("Username:: Input#79", function() {
        it("_4tvPr:5:]H([z=NqQ]P+€I5`#Xf7Z_Q*0Gzx#[bx5-Z+|", function() {
            expect(checkUsername("_4tvPr:5:]H([z=NqQ]P+€I5`#Xf7Z_Q*0Gzx#[bx5-Z+|")).toBeTruthy();
        });
    });

    describe("Username:: Input#80", function() {
        it("w6x)Pe02:", function() {
            expect(checkUsername("w6x)Pe02:")).toBeTruthy();
        });
    });

    describe("Username:: Input#81", function() {
        it(";cufooSG[-0Em;(jZ|u#zk~yL", function() {
            expect(checkUsername(";cufooSG[-0Em;(jZ|u#zk~yL")).toBeTruthy();
        });
    });

    describe("Username:: Input#82", function() {
        it("vp,bjeFxZ7$xnE3NjOZy*=_9AscWU.UE-(2[(dfN>kz", function() {
            expect(checkUsername("vp,bjeFxZ7$xnE3NjOZy*=_9AscWU.UE-(2[(dfN>kz")).toBeTruthy();
        });
    });

    describe("Username:: Input#83", function() {
        it(">l$10Zj)", function() {
            expect(checkUsername(">l$10Zj)")).toBeTruthy();
        });
    });

    describe("Username:: Input#84", function() {
        it("52JDR€nA&IZrhDmL<~(Gwafg/ba,$ax+sbTC05.lps5v.{r7", function() {
            expect(checkUsername("52JDR€nA&IZrhDmL<~(Gwafg/ba,$ax+sbTC05.lps5v.{r7")).toBeTruthy();
        });
    });

    describe("Username:: Input#85", function() {
        it("F5jSBXl|A€mjwtYoa", function() {
            expect(checkUsername("F5jSBXl|A€mjwtYoa")).toBeTruthy();
        });
    });

    describe("Username:: Input#86", function() {
        it("G3Kp", function() {
            expect(checkUsername("G3Kp")).toBeTruthy();
        });
    });

    describe("Username:: Input#87", function() {
        it("", function() {
            expect(checkUsername("")).toBeTruthy();
        });
    });

    describe("Username:: Input#88", function() {
        it("M(=23s*ic|D?R<z3,", function() {
            expect(checkUsername("M(=23s*ic|D?R<z3,")).toBeTruthy();
        });
    });

    describe("Username:: Input#89", function() {
        it("€ALb_:l4Sy@OCFP`Hf$~fH#.:^7.8Ys6LUFT", function() {
            expect(checkUsername("€ALb_:l4Sy@OCFP`Hf$~fH#.:^7.8Ys6LUFT")).toBeTruthy();
        });
    });

    describe("Username:: Input#90", function() {
        it("iYI%7=c€O4n*ZJ$x-4h[.*{/#1yWYsbgmb@$x|C>{zvd%", function() {
            expect(checkUsername("iYI%7=c€O4n*ZJ$x-4h[.*{/#1yWYsbgmb@$x|C>{zvd%")).toBeTruthy();
        });
    });

    describe("Username:: Input#91", function() {
        it("M7IW6]y4x%-MS`I75€whO#q<ar", function() {
            expect(checkUsername("M7IW6]y4x%-MS`I75€whO#q<ar")).toBeTruthy();
        });
    });

    describe("Username:: Input#92", function() {
        it("", function() {
            expect(checkUsername("")).toBeTruthy();
        });
    });

    describe("Username:: Input#93", function() {
        it("_LvUw8'@:pXBZd<j%x_lm$=g=Wf'Y|<@dHS5o{ixDNs+7E-", function() {
            expect(checkUsername("_LvUw8'@:pXBZd<j%x_lm$=g=Wf'Y|<@dHS5o{ixDNs+7E-")).toBeTruthy();
        });
    });

    describe("Username:: Input#94", function() {
        it("{0e]s;yfK€=7z(TJ", function() {
            expect(checkUsername("{0e]s;yfK€=7z(TJ")).toBeTruthy();
        });
    });

    describe("Username:: Input#95", function() {
        it("o`Et+|K`@pR$v&:$a<<yGdlPhlT{pIY*>vIQd", function() {
            expect(checkUsername("o`Et+|K`@pR$v&:$a<<yGdlPhlT{pIY*>vIQd")).toBeTruthy();
        });
    });

    describe("Username:: Input#96", function() {
        it("y", function() {
            expect(checkUsername("y")).toBeTruthy();
        });
    });

    describe("Username:: Input#97", function() {
        it("aC=JV~UANfU", function() {
            expect(checkUsername("aC=JV~UANfU")).toBeTruthy();
        });
    });

    describe("Username:: Input#98", function() {
        it("`DSDy%'i8^D.=W11al~T}H&pFK'4LM`YX$uwr%'", function() {
            expect(checkUsername("`DSDy%'i8^D.=W11al~T}H&pFK'4LM`YX$uwr%'")).toBeTruthy();
        });
    });

    describe("Username:: Input#99", function() {
        it("IomgR@=Rjm@J$dQ8>>]9nm$e4T:XD.2;i", function() {
            expect(checkUsername("IomgR@=Rjm@J$dQ8>>]9nm$e4T:XD.2;i")).toBeTruthy();
        });
    });

    describe("Username:: Input#100", function() {
        it("Gs>Mxn=-vm/?4d)8#kI1BMkr{_ahnS5€<E5JbR€", function() {
            expect(checkUsername("Gs>Mxn=-vm/?4d)8#kI1BMkr{_ahnS5€<E5JbR€")).toBeTruthy();
        });
    });
});