export const getPage = (str) => {
    const data = str.match(/=(.*)$/)
    return data[1]
};

export const getNumber = (str, exp='people') =>{
    const regEsp = new RegExp(`${exp}\/(.*)\/$`)
    const data = str.match(regEsp)
    return data[1]
}

export const transformDataToStore = data => {
    const next = data.next === null ? null : getPage(data.next);
    const previous = data.previous === null ? null : getPage(data.previous);
    const results = data.results.map(planet => ({
        name: planet.name,
        climate: planet.climate,
        population: planet.population,
        id: getNumber(planet.url, 'planets')})
    )

    return {count: data.count, next, previous, results}
}
