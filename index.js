const roomService = require('_services/rooms.services')

// input
const arrivals = [1, 3, 5, 7, 9, 11, 13]
const departures = [2, 6, 10, 10, 11, 15]
const K = 1

// check avaliable
const result = roomService.checkRoomAvailable(arrivals, departures, K)

// show result
console.log(result)
