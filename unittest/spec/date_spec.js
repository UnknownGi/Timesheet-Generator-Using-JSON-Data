describe("Checking Validity", function() {
    describe("Date:: Input#1", function() {
        it("Day1:: 16/2/2429", function() {
            expect(checkDate("16/2/2429")).toBeTruthy();
        });
    });

    describe("Date:: Input#2", function() {
        it("Day2:: 26/3/1677", function() {
            expect(checkDate("26/3/1677")).toBeTruthy();
        });
    });

    describe("Date:: Input#3", function() {
        it("Day3:: 16/9/1643", function() {
            expect(checkDate("16/9/1643")).toBeTruthy();
        });
    });

    describe("Date:: Input#4", function() {
        it("Day4:: 35/14/1926", function() {
            expect(checkDate("35/14/1926")).toBeFalsy();
        });
    });

    describe("Date:: Input#5", function() {
        it("Day5:: 31/11/1736", function() {
            expect(checkDate("31/11/1736")).toBeFalsy();
        });
    });

    describe("Date:: Input#6", function() {
        it("Day6:: 11/7/2161", function() {
            expect(checkDate("11/7/2161")).toBeTruthy();
        });
    });

    describe("Date:: Input#7", function() {
        it("Day7:: 4/6/2294", function() {
            expect(checkDate("4/6/2294")).toBeTruthy();
        });
    });

    describe("Date:: Input#8", function() {
        it("Day8:: 39/6/1992", function() {
            expect(checkDate("39/6/1992")).toBeFalsy();
        });
    });

    describe("Date:: Input#9", function() {
        it("Day9:: 28/11/2491", function() {
            expect(checkDate("28/11/2491")).toBeFalsy();
        });
    });

    describe("Date:: Input#10", function() {
        it("Day10:: 3/0/1994", function() {
            expect(checkDate("3/0/1994")).toBeFalsy();
        });
    });

    describe("Date:: Input#11", function() {
        it("Day11:: 20/3/2160", function() {
            expect(checkDate("20/3/2160")).toBeTruthy();
        });
    });

    describe("Date:: Input#12", function() {
        it("Day12:: 26/6/2355", function() {
            expect(checkDate("26/6/2355")).toBeTruthy();
        });
    });

    describe("Date:: Input#13", function() {
        it("Day13:: 2/0/2116", function() {
            expect(checkDate("2/0/2116")).toBeFalsy();
        });
    });

    describe("Date:: Input#14", function() {
        it("Day14:: 20/12/2450", function() {
            expect(checkDate("20/12/2450")).toBeTruthy();
        });
    });

    describe("Date:: Input#15", function() {
        it("Day15:: 10/9/2250", function() {
            expect(checkDate("10/9/2250")).toBeTruthy();
        });
    });

    describe("Date:: Input#16", function() {
        it("Day16:: 17/0/1510", function() {
            expect(checkDate("17/0/1510")).toBeFalsy();
        });
    });

    describe("Date:: Input#17", function() {
        it("Day17:: 32/7/2362", function() {
            expect(checkDate("32/7/2362")).toBeFalsy();
        });
    });

    describe("Date:: Input#18", function() {
        it("Day18:: 11/1/2126", function() {
            expect(checkDate("11/1/2126")).toBeTruthy();
        });
    });

    describe("Date:: Input#19", function() {
        it("Day19:: 36/10/2163", function() {
            expect(checkDate("36/10/2163")).toBeFalsy();
        });
    });

    describe("Date:: Input#20", function() {
        it("Day20:: 8/3/1572", function() {
            expect(checkDate("8/3/1572")).toBeTruthy();
        });
    });

    describe("Date:: Input#21", function() {
        it("Day21:: 29/12/1839", function() {
            expect(checkDate("29/12/1839")).toBeTruthy();
        });
    });

    describe("Date:: Input#22", function() {
        it("Day22:: 5/6/1892", function() {
            expect(checkDate("5/6/1892")).toBeTruthy();
        });
    });

    describe("Date:: Input#23", function() {
        it("Day23:: 39/5/2427", function() {
            expect(checkDate("39/5/2427")).toBeFalsy();
        });
    });

    describe("Date:: Input#24", function() {
        it("Day24:: 32/12/2070", function() {
            expect(checkDate("32/12/2070")).toBeFalsy();
        });
    });

    describe("Date:: Input#25", function() {
        it("Day25:: 7/0/2203", function() {
            expect(checkDate("7/0/2203")).toBeFalsy();
        });
    });

    describe("Date:: Input#26", function() {
        it("Day26:: 14/2/2495", function() {
            expect(checkDate("14/2/2495")).toBeTruthy();
        });
    });

    describe("Date:: Input#27", function() {
        it("Day27:: 4/4/2471", function() {
            expect(checkDate("4/4/2471")).toBeTruthy();
        });
    });

    describe("Date:: Input#28", function() {
        it("Day28:: 18/7/1551", function() {
            expect(checkDate("18/7/1551")).toBeTruthy();
        });
    });

    describe("Date:: Input#29", function() {
        it("Day29:: 29/13/2378", function() {
            expect(checkDate("29/13/2378")).toBeFalsy();
        });
    });

    describe("Date:: Input#30", function() {
        it("Day30:: 10/5/1538", function() {
            expect(checkDate("10/5/1538")).toBeTruthy();
        });
    });

    describe("Date:: Input#31", function() {
        it("Day31:: 3/4/1668", function() {
            expect(checkDate("3/4/1668")).toBeTruthy();
        });
    });

    describe("Date:: Input#32", function() {
        it("Day32:: 36/9/1561", function() {
            expect(checkDate("36/9/1561")).toBeFalsy();
        });
    });

    describe("Date:: Input#33", function() {
        it("Day33:: 19/3/1959", function() {
            expect(checkDate("19/3/1959")).toBeTruthy();
        });
    });

    describe("Date:: Input#34", function() {
        it("Day34:: 8/6/1916", function() {
            expect(checkDate("8/6/1916")).toBeTruthy();
        });
    });

    describe("Date:: Input#35", function() {
        it("Day35:: 15/10/1854", function() {
            expect(checkDate("15/10/1854")).toBeTruthy();
        });
    });

    describe("Date:: Input#36", function() {
        it("Day36:: 12/2/2310", function() {
            expect(checkDate("12/2/2310")).toBeTruthy();
        });
    });

    describe("Date:: Input#37", function() {
        it("Day37:: 13/1/1946", function() {
            expect(checkDate("13/1/1946")).toBeTruthy();
        });
    });

    describe("Date:: Input#38", function() {
        it("Day38:: 11/1/1515", function() {
            expect(checkDate("11/1/1515")).toBeTruthy();
        });
    });

    describe("Date:: Input#39", function() {
        it("Day39:: 17/11/1738", function() {
            expect(checkDate("17/11/1738")).toBeTruthy();
        });
    });

    describe("Date:: Input#40", function() {
        it("Day40:: 27/4/2050", function() {
            expect(checkDate("27/4/2050")).toBeTruthy();
        });
    });

    describe("Date:: Input#41", function() {
        it("Day41:: 39/0/2271", function() {
            expect(checkDate("39/0/2271")).toBeFalsy();
        });
    });

    describe("Date:: Input#42", function() {
        it("Day42:: 3/8/1765", function() {
            expect(checkDate("3/8/1765")).toBeTruthy();
        });
    });

    describe("Date:: Input#43", function() {
        it("Day43:: 25/2/1786", function() {
            expect(checkDate("25/2/1786")).toBeTruthy();
        });
    });

    describe("Date:: Input#44", function() {
        it("Day44:: 20/12/2168", function() {
            expect(checkDate("20/12/2168")).toBeTruthy();
        });
    });

    describe("Date:: Input#45", function() {
        it("Day45:: 3/6/1641", function() {
            expect(checkDate("3/6/1641")).toBeTruthy();
        });
    });

    describe("Date:: Input#46", function() {
        it("Day46:: 28/4/2027", function() {
            expect(checkDate("28/4/2027")).toBeTruthy();
        });
    });

    describe("Date:: Input#47", function() {
        it("Day47:: 10/1/1609", function() {
            expect(checkDate("10/1/1609")).toBeTruthy();
        });
    });

    describe("Date:: Input#48", function() {
        it("Day48:: 22/2/1858", function() {
            expect(checkDate("22/2/1858")).toBeTruthy();
        });
    });

    describe("Date:: Input#49", function() {
        it("Day49:: 19/13/2014", function() {
            expect(checkDate("19/13/2014")).toBeFalsy();
        });
    });

    describe("Date:: Input#50", function() {
        it("Day50:: 21/0/1791", function() {
            expect(checkDate("21/0/1791")).toBeFalsy();
        });
    });

    describe("Date:: Input#51", function() {
        it("Day51:: 4/12/1807", function() {
            expect(checkDate("4/12/1807")).toBeTruthy();
        });
    });

    describe("Date:: Input#52", function() {
        it("Day52:: 6/9/2093", function() {
            expect(checkDate("6/9/2093")).toBeTruthy();
        });
    });

    describe("Date:: Input#53", function() {
        it("Day53:: 25/4/2460", function() {
            expect(checkDate("25/4/2460")).toBeTruthy();
        });
    });

    describe("Date:: Input#54", function() {
        it("Day54:: 4/4/2199", function() {
            expect(checkDate("4/4/2199")).toBeTruthy();
        });
    });

    describe("Date:: Input#55", function() {
        it("Day55:: 39/9/1694", function() {
            expect(checkDate("39/9/1694")).toBeFalsy();
        });
    });

    describe("Date:: Input#56", function() {
        it("Day56:: 0/11/2188", function() {
            expect(checkDate("0/11/2188")).toBeFalsy();
        });
    });

    describe("Date:: Input#57", function() {
        it("Day57:: 13/14/1556", function() {
            expect(checkDate("13/14/1556")).toBeFalsy();
        });
    });

    describe("Date:: Input#58", function() {
        it("Day58:: 0/5/2250", function() {
            expect(checkDate("0/5/2250")).toBeFalsy();
        });
    });

    describe("Date:: Input#59", function() {
        it("Day59:: 30/3/2389", function() {
            expect(checkDate("30/3/2389")).toBeTruthy();
        });
    });

    describe("Date:: Input#60", function() {
        it("Day60:: 16/2/1620", function() {
            expect(checkDate("16/2/1620")).toBeTruthy();
        });
    });

    describe("Date:: Input#61", function() {
        it("Day61:: 7/0/2100", function() {
            expect(checkDate("7/0/2100")).toBeFalsy();
        });
    });

    describe("Date:: Input#62", function() {
        it("Day62:: 8/4/1740", function() {
            expect(checkDate("8/4/1740")).toBeTruthy();
        });
    });

    describe("Date:: Input#63", function() {
        it("Day63:: 1/4/1556", function() {
            expect(checkDate("1/4/1556")).toBeTruthy();
        });
    });

    describe("Date:: Input#64", function() {
        it("Day64:: 28/7/2088", function() {
            expect(checkDate("28/7/2088")).toBeFalsy();
        });
    });

    describe("Date:: Input#65", function() {
        it("Day65:: 28/6/2027", function() {
            expect(checkDate("28/6/2027")).toBeTruthy();
        });
    });

    describe("Date:: Input#66", function() {
        it("Day66:: 19/9/1837", function() {
            expect(checkDate("19/9/1837")).toBeTruthy();
        });
    });

    describe("Date:: Input#67", function() {
        it("Day67:: 7/6/2265", function() {
            expect(checkDate("7/6/2265")).toBeTruthy();
        });
    });

    describe("Date:: Input#68", function() {
        it("Day68:: 13/11/2390", function() {
            expect(checkDate("13/11/2390")).toBeTruthy();
        });
    });

    describe("Date:: Input#69", function() {
        it("Day69:: 13/3/2400", function() {
            expect(checkDate("13/3/2400")).toBeTruthy();
        });
    });

    describe("Date:: Input#70", function() {
        it("Day70:: 23/13/1975", function() {
            expect(checkDate("23/13/1975")).toBeFalsy();
        });
    });

    describe("Date:: Input#71", function() {
        it("Day71:: 27/6/2410", function() {
            expect(checkDate("27/6/2410")).toBeTruthy();
        });
    });

    describe("Date:: Input#72", function() {
        it("Day72:: 6/9/1578", function() {
            expect(checkDate("6/9/1578")).toBeTruthy();
        });
    });

    describe("Date:: Input#73", function() {
        it("Day73:: 13/6/1843", function() {
            expect(checkDate("13/6/1843")).toBeTruthy();
        });
    });

    describe("Date:: Input#74", function() {
        it("Day74:: 14/12/1543", function() {
            expect(checkDate("14/12/1543")).toBeTruthy();
        });
    });

    describe("Date:: Input#75", function() {
        it("Day75:: 22/7/1555", function() {
            expect(checkDate("22/7/1555")).toBeTruthy();
        });
    });

    describe("Date:: Input#76", function() {
        it("Day76:: 35/7/1794", function() {
            expect(checkDate("35/7/1794")).toBeFalsy();
        });
    });

    describe("Date:: Input#77", function() {
        it("Day77:: 19/10/1559", function() {
            expect(checkDate("19/10/1559")).toBeTruthy();
        });
    });

    describe("Date:: Input#78", function() {
        it("Day78:: 38/11/2467", function() {
            expect(checkDate("38/11/2467")).toBeFalsy();
        });
    });

    describe("Date:: Input#79", function() {
        it("Day79:: 37/0/2481", function() {
            expect(checkDate("37/0/2481")).toBeFalsy();
        });
    });

    describe("Date:: Input#80", function() {
        it("Day80:: 30/0/2498", function() {
            expect(checkDate("30/0/2498")).toBeFalsy();
        });
    });

    describe("Date:: Input#81", function() {
        it("Day81:: 33/10/1791", function() {
            expect(checkDate("33/10/1791")).toBeFalsy();
        });
    });

    describe("Date:: Input#82", function() {
        it("Day82:: 0/7/2318", function() {
            expect(checkDate("0/7/2318")).toBeFalsy();
        });
    });

    describe("Date:: Input#83", function() {
        it("Day83:: 2/10/1911", function() {
            expect(checkDate("2/10/1911")).toBeTruthy();
        });
    });

    describe("Date:: Input#84", function() {
        it("Day84:: 7/7/1633", function() {
            expect(checkDate("7/7/1633")).toBeTruthy();
        });
    });

    describe("Date:: Input#85", function() {
        it("Day85:: 11/5/2312", function() {
            expect(checkDate("11/5/2312")).toBeTruthy();
        });
    });

    describe("Date:: Input#86", function() {
        it("Day86:: 20/7/1944", function() {
            expect(checkDate("20/7/1944")).toBeTruthy();
        });
    });

    describe("Date:: Input#87", function() {
        it("Day87:: 16/3/2473", function() {
            expect(checkDate("16/3/2473")).toBeTruthy();
        });
    });

    describe("Date:: Input#88", function() {
        it("Day88:: 27/7/1828", function() {
            expect(checkDate("27/7/1828")).toBeTruthy();
        });
    });

    describe("Date:: Input#89", function() {
        it("Day89:: 27/12/2279", function() {
            expect(checkDate("27/12/2279")).toBeFalsy();
        });
    });

    describe("Date:: Input#90", function() {
        it("Day90:: 19/2/2282", function() {
            expect(checkDate("19/2/2282")).toBeTruthy();
        });
    });

    describe("Date:: Input#91", function() {
        it("Day91:: 11/9/1678", function() {
            expect(checkDate("11/9/1678")).toBeTruthy();
        });
    });

    describe("Date:: Input#92", function() {
        it("Day92:: 22/1/2490", function() {
            expect(checkDate("22/1/2490")).toBeTruthy();
        });
    });

    describe("Date:: Input#93", function() {
        it("Day93:: 27/12/2109", function() {
            expect(checkDate("27/12/2109")).toBeFalsy();
        });
    });

    describe("Date:: Input#94", function() {
        it("Day94:: 37/3/2409", function() {
            expect(checkDate("37/3/2409")).toBeFalsy();
        });
    });

    describe("Date:: Input#95", function() {
        it("Day95:: 7/8/1506", function() {
            expect(checkDate("7/8/1506")).toBeTruthy();
        });
    });

    describe("Date:: Input#96", function() {
        it("Day96:: 4/8/2496", function() {
            expect(checkDate("4/8/2496")).toBeTruthy();
        });
    });

    describe("Date:: Input#97", function() {
        it("Day97:: 4/11/2383", function() {
            expect(checkDate("4/11/2383")).toBeTruthy();
        });
    });

    describe("Date:: Input#98", function() {
        it("Day98:: 20/0/2112", function() {
            expect(checkDate("20/0/2112")).toBeFalsy();
        });
    });

    describe("Date:: Input#99", function() {
        it("Day99:: 33/5/2156", function() {
            expect(checkDate("33/5/2156")).toBeFalsy();
        });
    });

    describe("Date:: Input#100", function() {
        it("Day100:: 4/2/1582", function() {
            expect(checkDate("4/2/1582")).toBeTruthy();
        });
    });
});