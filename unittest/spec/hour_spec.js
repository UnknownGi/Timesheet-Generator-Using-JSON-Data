describe("Checking Validity", function() {
    describe("Hours:: Input#1", function() {
        it("Day1:: 6/1/1877 21/12/1950", function() {
            expect(getHrs("6/1/1877 21/12/1950")).toEqual(648288);
        });
    });

    describe("Hours:: Input#2", function() {
        it("Day2:: 28/13/2444 34/5/1600", function() {
            expect(getHrs("28/13/2444 34/5/1600")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#3", function() {
        it("Day3:: 13/10/2014 13/10/2017", function() {
            expect(getHrs("13/10/2014 13/10/2017")).toEqual(26304);
        });
    });

    describe("Hours:: Input#4", function() {
        it("Day4:: 36/0/1674 25/0/1788", function() {
            expect(getHrs("36/0/1674 25/0/1788")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#5", function() {
        it("Day5:: 26/8/1934 38/12/1511", function() {
            expect(getHrs("26/8/1934 38/12/1511")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#6", function() {
        it("Day6:: 14/10/1773 28/5/2321", function() {
            expect(getHrs("14/10/1773 28/5/2321")).toEqual(4800432);
        });
    });

    describe("Hours:: Input#7", function() {
        it("Day7:: 32/8/2027 36/11/1885", function() {
            expect(getHrs("32/8/2027 36/11/1885")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#8", function() {
        it("Day8:: 3/4/1761 2/7/2033", function() {
            expect(getHrs("3/4/1761 2/7/2033")).toEqual(2386512);
        });
    });

    describe("Hours:: Input#9", function() {
        it("Day9:: 21/8/2068 18/7/1506", function() {
            expect(getHrs("21/8/2068 18/7/1506")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#10", function() {
        it("Day10:: 2/3/2099 28/11/2290", function() {
            expect(getHrs("2/3/2099 28/11/2290")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#11", function() {
        it("Day11:: 5/6/2123 5/14/2130", function() {
            expect(getHrs("5/6/2123 5/14/2130")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#12", function() {
        it("Day12:: 23/8/2197 37/12/2337", function() {
            expect(getHrs("23/8/2197 37/12/2337")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#13", function() {
        it("Day13:: 21/1/2453 38/9/1584", function() {
            expect(getHrs("21/1/2453 38/9/1584")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#14", function() {
        it("Day14:: 29/7/1611 27/13/1628", function() {
            expect(getHrs("29/7/1611 27/13/1628")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#15", function() {
        it("Day15:: 23/0/1896 22/3/2431", function() {
            expect(getHrs("23/0/1896 22/3/2431")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#16", function() {
        it("Day16:: 24/8/2037 24/3/2319", function() {
            expect(getHrs("24/8/2037 24/3/2319")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#17", function() {
        it("Day17:: 2/9/1977 17/7/1520", function() {
            expect(getHrs("2/9/1977 17/7/1520")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#18", function() {
        it("Day18:: 36/13/1840 15/8/2461", function() {
            expect(getHrs("36/13/1840 15/8/2461")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#19", function() {
        it("Day19:: 39/4/1986 4/14/1660", function() {
            expect(getHrs("39/4/1986 4/14/1660")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#20", function() {
        it("Day20:: 4/3/2320 24/6/1612", function() {
            expect(getHrs("4/3/2320 24/6/1612")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#21", function() {
        it("Day21:: 30/4/2000 13/5/1531", function() {
            expect(getHrs("30/4/2000 13/5/1531")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#22", function() {
        it("Day22:: 18/7/1778 9/5/2223", function() {
            expect(getHrs("18/7/1778 9/5/2223")).toEqual(3899184);
        });
    });

    describe("Hours:: Input#23", function() {
        it("Day23:: 6/5/1777 32/3/2457", function() {
            expect(getHrs("6/5/1777 32/3/2457")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#24", function() {
        it("Day24:: 12/4/1812 23/10/1906", function() {
            expect(getHrs("12/4/1812 23/10/1906")).toEqual(828648);
        });
    });

    describe("Hours:: Input#25", function() {
        it("Day25:: 31/5/2338 32/14/1854", function() {
            expect(getHrs("31/5/2338 32/14/1854")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#26", function() {
        it("Day26:: 10/6/1623 14/4/2086", function() {
            expect(getHrs("10/6/1623 14/4/2086")).toEqual(4057296);
        });
    });

    describe("Hours:: Input#27", function() {
        it("Day27:: 5/4/2426 18/11/1717", function() {
            expect(getHrs("5/4/2426 18/11/1717")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#28", function() {
        it("Day28:: 33/10/2184 15/4/2085", function() {
            expect(getHrs("33/10/2184 15/4/2085")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#29", function() {
        it("Day29:: 11/11/1791 12/13/1954", function() {
            expect(getHrs("11/11/1791 12/13/1954")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#30", function() {
        it("Day30:: 29/11/2154 9/10/1792", function() {
            expect(getHrs("29/11/2154 9/10/1792")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#31", function() {
        it("Day31:: 39/4/1915 13/6/2358", function() {
            expect(getHrs("39/4/1915 13/6/2358")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#32", function() {
        it("Day32:: 24/7/2304 6/0/2166", function() {
            expect(getHrs("24/7/2304 6/0/2166")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#33", function() {
        it("Day33:: 26/13/2497 29/11/2103", function() {
            expect(getHrs("26/13/2497 29/11/2103")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#34", function() {
        it("Day34:: 28/12/1675 30/10/1764", function() {
            expect(getHrs("28/12/1675 30/10/1764")).toEqual(778776);
        });
    });

    describe("Hours:: Input#35", function() {
        it("Day35:: 36/2/1851 3/13/2418", function() {
            expect(getHrs("36/2/1851 3/13/2418")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#36", function() {
        it("Day36:: 2/1/2079 20/2/1570", function() {
            expect(getHrs("2/1/2079 20/2/1570")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#37", function() {
        it("Day37:: 18/8/2438 34/8/2305", function() {
            expect(getHrs("18/8/2438 34/8/2305")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#38", function() {
        it("Day38:: 24/12/2462 1/13/1785", function() {
            expect(getHrs("24/12/2462 1/13/1785")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#39", function() {
        it("Day39:: 23/7/2213 35/13/1611", function() {
            expect(getHrs("23/7/2213 35/13/1611")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#40", function() {
        it("Day40:: 31/1/1978 3/1/1699", function() {
            expect(getHrs("31/1/1978 3/1/1699")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#41", function() {
        it("Day41:: 39/1/2081 14/4/1714", function() {
            expect(getHrs("39/1/2081 14/4/1714")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#42", function() {
        it("Day42:: 25/4/2367 0/12/1758", function() {
            expect(getHrs("25/4/2367 0/12/1758")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#43", function() {
        it("Day43:: 26/1/2126 10/2/1569", function() {
            expect(getHrs("26/1/2126 10/2/1569")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#44", function() {
        it("Day44:: 13/0/2275 7/14/2085", function() {
            expect(getHrs("13/0/2275 7/14/2085")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#45", function() {
        it("Day45:: 34/4/1603 39/6/1633", function() {
            expect(getHrs("34/4/1603 39/6/1633")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#46", function() {
        it("Day46:: 37/3/2308 30/4/1511", function() {
            expect(getHrs("37/3/2308 30/4/1511")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#47", function() {
        it("Day47:: 7/6/2204 15/11/2083", function() {
            expect(getHrs("7/6/2204 15/11/2083")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#48", function() {
        it("Day48:: 4/8/2164 38/14/2147", function() {
            expect(getHrs("4/8/2164 38/14/2147")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#49", function() {
        it("Day49:: 20/2/2253 31/13/1746", function() {
            expect(getHrs("20/2/2253 31/13/1746")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#50", function() {
        it("Day50:: 35/7/2044 1/1/2363", function() {
            expect(getHrs("35/7/2044 1/1/2363")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#51", function() {
        it("Day51:: 2/11/1825 18/0/1535", function() {
            expect(getHrs("2/11/1825 18/0/1535")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#52", function() {
        it("Day52:: 5/7/1710 17/8/2258", function() {
            expect(getHrs("5/7/1710 17/8/2258")).toEqual(4804800);
        });
    });

    describe("Hours:: Input#53", function() {
        it("Day53:: 18/13/1522 19/9/1575", function() {
            expect(getHrs("18/13/1522 19/9/1575")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#54", function() {
        it("Day54:: 7/9/1632 14/8/2247", function() {
            expect(getHrs("7/9/1632 14/8/2247")).toEqual(5390496 );
        });
    });

    describe("Hours:: Input#55", function() {
        it("Day55:: 6/3/1577 38/1/2435", function() {
            expect(getHrs("6/3/1577 38/1/2435")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#56", function() {
        it("Day56:: 4/2/1602 35/9/1893", function() {
            expect(getHrs("4/2/1602 35/9/1893")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#57", function() {
        it("Day57:: 18/4/2195 9/10/2182", function() {
            expect(getHrs("18/4/2195 9/10/2182")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#58", function() {
        it("Day58:: 15/11/2024 19/9/1991", function() {
            expect(getHrs("15/11/2024 19/9/1991")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#59", function() {
        it("Day59:: 21/8/2488 21/9/2027", function() {
            expect(getHrs("21/8/2488 21/9/2027")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#60", function() {
        it("Day60:: 17/5/2478 24/9/1763", function() {
            expect(getHrs("17/5/2478 24/9/1763")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#61", function() {
        it("Day61:: 31/13/1994 14/12/1916", function() {
            expect(getHrs("31/13/1994 14/12/1916")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#62", function() {
        it("Day62:: 30/14/2328 37/0/1517", function() {
            expect(getHrs("30/14/2328 37/0/1517")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#63", function() {
        it("Day63:: 36/11/1712 3/13/2245", function() {
            expect(getHrs("36/11/1712 3/13/2245")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#64", function() {
        it("Day64:: 38/14/1778 34/1/1854", function() {
            expect(getHrs("38/14/1778 34/1/1854")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#65", function() {
        it("Day65:: 17/0/1691 23/9/2417", function() {
            expect(getHrs("17/0/1691 23/9/2417")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#66", function() {
        it("Day66:: 15/7/2452 27/12/2346", function() {
            expect(getHrs("15/7/2452 27/12/2346")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#67", function() {
        it("Day67:: 29/9/2217 23/5/2394", function() {
            expect(getHrs("29/9/2217 23/5/2394")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#68", function() {
        it("Day68:: 28/12/2100 8/4/2310", function() {
            expect(getHrs("28/12/2100 8/4/2310")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#69", function() {
        it("Day69:: 32/6/1951 31/13/2164", function() {
            expect(getHrs("32/6/1951 31/13/2164")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#70", function() {
        it("Day70:: 30/14/1584 19/3/1861", function() {
            expect(getHrs("30/14/1584 19/3/1861")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#71", function() {
        it("Day71:: 14/10/2169 22/0/2216", function() {
            expect(getHrs("14/10/2169 22/0/2216")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#72", function() {
        it("Day72:: 32/10/2442 24/6/2045", function() {
            expect(getHrs("32/10/2442 24/6/2045")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#73", function() {
        it("Day73:: 18/12/2275 18/7/1689", function() {
            expect(getHrs("18/12/2275 18/7/1689")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#74", function() {
        it("Day74:: 10/11/2187 19/12/2162", function() {
            expect(getHrs("10/11/2187 19/12/2162")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#75", function() {
        it("Day75:: 26/4/1821 25/1/1532", function() {
            expect(getHrs("26/4/1821 25/1/1532")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#76", function() {
        it("Day76:: 6/5/2119 15/14/2035", function() {
            expect(getHrs("6/5/2119 15/14/2035")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#77", function() {
        it("Day77:: 3/3/1640 24/8/1521", function() {
            expect(getHrs("3/3/1640 24/8/1521")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#78", function() {
        it("Day78:: 6/9/1533 2/14/1613", function() {
            expect(getHrs("6/9/1533 2/14/1613")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#79", function() {
        it("Day79:: 7/12/1576 1/12/2484", function() {
            expect(getHrs("7/12/1576 1/12/2484")).toEqual(7959384);
        });
    });

    describe("Hours:: Input#80", function() {
        it("Day80:: 11/3/2056 37/13/2261", function() {
            expect(getHrs("11/3/2056 37/13/2261")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#81", function() {
        it("Day81:: 29/10/1932 4/9/2138", function() {
            expect(getHrs("29/10/1932 4/9/2138")).toEqual(1804464);
        });
    });

    describe("Hours:: Input#82", function() {
        it("Day82:: 33/11/2319 24/11/2030", function() {
            expect(getHrs("33/11/2319 24/11/2030")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#83", function() {
        it("Day83:: 16/2/1756 8/12/1972", function() {
            expect(getHrs("16/2/1756 8/12/1972")).toEqual( 1900536 );
        });
    });

    describe("Hours:: Input#84", function() {
        it("Day84:: 39/14/2024 14/1/2457", function() {
            expect(getHrs("39/14/2024 14/1/2457")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#85", function() {
        it("Day85:: 7/14/1761 38/10/1967", function() {
            expect(getHrs("7/14/1761 38/10/1967")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#86", function() {
        it("Day86:: 35/5/2324 34/5/2479", function() {
            expect(getHrs("35/5/2324 34/5/2479")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#87", function() {
        it("Day87:: 3/13/2078 11/7/1879", function() {
            expect(getHrs("3/13/2078 11/7/1879")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#88", function() {
        it("Day88:: 11/14/1578 14/14/2069", function() {
            expect(getHrs("11/14/1578 14/14/2069")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#89", function() {
        it("Day89:: 19/9/1740 22/7/1514", function() {
            expect(getHrs("19/9/1740 22/7/1514")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#90", function() {
        it("Day90:: 2/0/1550 19/13/2403", function() {
            expect(getHrs("2/0/1550 19/13/2403")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#91", function() {
        it("Day91:: 29/3/2383 38/5/1914", function() {
            expect(getHrs("29/-3/2383 38/5/1914")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#92", function() {
        it("Day92:: 1/10/1661 36/2/2288", function() {
            expect(getHrs("1/10/1661 36/2/2288")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#93", function() {
        it("Day93:: 2/3/2233 19/8/2264", function() {
            expect(getHrs("2/3/2233 19/8/2264")).toEqual(275832);
        });
    });

    describe("Hours:: Input#94", function() {
        it("Day94:: 28/2/2282 7/0/1657", function() {
            expect(getHrs("28/2/2282 7/0/1657")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#95", function() {
        it("Day95:: 20/14/1648 7/0/2109", function() {
            expect(getHrs("20/14/1648 7/0/2109")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#96", function() {
        it("Day96:: 2/3/1798 35/14/1680", function() {
            expect(getHrs("2/3/1798 35/14/1680")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#97", function() {
        it("Day97:: 18/5/1764 20/9/1732", function() {
            expect(getHrs("18/5/1764 20/9/1732")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#98", function() {
        it("Day98:: 6/6/1823 9/4/1545", function() {
            expect(getHrs("6/6/1823 9/4/1545")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#99", function() {
        it("Day99:: 13/13/2261 22/7/2042", function() {
            expect(getHrs("13/13/2261 22/7/2042")).toEqual('Invalid Date');
        });
    });

    describe("Hours:: Input#100", function() {
        it("Day100:: 12/7/2016 13/7/2016", function() {
            expect(getHrs("12/7/2016 13/7/2016")).toEqual(24);
        });
    });
});