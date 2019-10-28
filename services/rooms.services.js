exports.checkRoomAvailable = (arrivalDate, departureDate, roomAvail) => {
  let result = true

  result = arrivalDate.map((prop, index) => {
    // remove first booking
    if (index > 0) {
      if (departureDate[index - 1] > prop) {
        return !!(roomAvail >= 2)
      }
    }
    return true
  })

  return result
}
