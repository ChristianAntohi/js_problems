const groupBy = (arr, callbackFunction) => {
    const result = {}
    arr.forEach(item => {
        let resultAfterCallback = callbackFunction(item)
        result[resultAfterCallback]
        ? result[resultAfterCallback].push(item)
        : result[resultAfterCallback] = [item]
    })
    console.log(result)
}

groupBy([6.1, 4.2, 6.3], Math.ceil)