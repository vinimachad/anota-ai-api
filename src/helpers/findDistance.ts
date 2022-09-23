let atual = [-23.573037, -46.650190]
let other = [-20.4344759, -54.6261565]

type GeoValue = {
    currentGeo: { lat: number, long: number }
    restaurantGeo: { lat: number, long: number }
}

export default function calc(value: GeoValue) {
    let R = 6371
    let dLat = (value.restaurantGeo.lat - value.currentGeo.lat) * (Math.PI / 180)
    let dLon = (value.restaurantGeo.long - value.currentGeo.long) * (Math.PI / 180)

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(value.currentGeo.lat * (Math.PI / 180)) * Math.cos(value.restaurantGeo.lat * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c

    return d
}