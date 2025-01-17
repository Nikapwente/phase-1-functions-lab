// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location > 42) {
        return (location - 42)
        } else {
            return (42 - location)
        }   
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}     

function distanceTravelledInFeet(start,end) {
    if (start > end) {
        return (start - end) * 264
        } else {
            return (end - start) * 264
        }   
}

function calculatesFarePrice(start,end) {
    let distance = distanceTravelledInFeet(start,end)
    if (distance < 400) {
        return 0
    } else if (distance < 2001) {
        return (distance-400) * 2 / 100
    } else if (distance < 2501) {
        return 25 
    } else {return "cannot travel that far"}
}