let atual = [-23.573037, -46.650190]
let other = [-20.4344759, -54.6261565]
function calc(lat1, lon1, lat2, lon2) {
    let R = 6371
    let dLat = (lat2 - lat1) * (Math.PI / 180)
    let dLon = (lon2 - lon1) * (Math.PI / 180)

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c

    return d
}

function getGeo() {
    console.log('A distancia entre os prontos é de: ' + calc(other[0], other[1], atual[0], atual[1]))
}