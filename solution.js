/*
remove disconnected islands from the map

    1, 0, 1, 0,         [Rmv], 0, 1, 0,
    0, 1, 1, 0, ---->       0, 1, 1, 0,
    1, 0, 1, 0,         [Rmv], 0, 1, 0,
    0, 0, 0, 1              0, 0, 0, [Rmv]
*/

const islandMap = [
    1, 0, 1, 0,
    0, 1, 1, 0,
    1, 0, 1, 0,
    0, 0, 0, 1
]

function removeDisconnectedIsland(map) {
    map.forEach((island, index) => {
        if (island === 1 &&
            (map[index + 1] ||
            map[index + -1] ||
            map[index+4] ||
            map[index-4])
        ) {
            console.log("This island has connection. Index:", index)
        } else {
            map[index] = 0
        }
    })
    return map
}

// driver code
console.log(removeDisconnectedIsland(islandMap))
