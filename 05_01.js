const test1 = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

function advent(string) {
    //extract seeds as array of ints[]
    //for each seed eval soil then fert then water then lux then temp then hum then loc

    let testSeeds = [1, 10];
    let testMap = [0, 0, 10, 10, 10, 10];

    //for a given map, check if the seed is greater than or equal to the second index of the map, but less than or equal to the second index of the map plus 

    function evalMap(seeds, map) {
        seeds.map((seed, i, a) => {
            let output = seed;
            let mapIterator = 0;
            console.log([seed, map])
            while (mapIterator < map.length) {
                if (seed >= map[mapIterator + 1]
                    && seed <= map[mapIterator + 2]) {

                    output = map[mapIterator - 1]
                }
                mapIterator++;
            };
        })
    }

    evalMap(testSeeds, testMap)

    [rand,
    seeds,
    seedMap,
    soilMap,
    fertMap,
    waterMail,
    lightMap,
    tempMap,
        locMap
    ] = string.split(/\:/).map((substr) => substr.match(/\d+/g))
}

console.log(advent(test1));