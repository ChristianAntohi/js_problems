const mergeSameKeysOfObjects = (obj1, obj2) => {
    let keysOfObj1 = Object.keys(obj1)
    let keysOfObj2 = Object.keys(obj2)
    for (let i = 0; i < keysOfObj1.length; i++) {
        let key1 = keysOfObj1[i]
        for (let j = 0; j < keysOfObj2.length; j++) {
            let key2 = keysOfObj2[j]
            if (key1 === key2) {
                obj1[key1] = obj2[key2]
            }
        }
    }
    console.log(obj1)
}

const mergeSameKeysOfObjects_v2 = (obj1, obj2) =>{
    for (const key in obj1)
        if(obj2.hasOwnProperty(key)) {
            obj1[key] = obj2[key]
        }
        console.log(obj1)
}

mergeSameKeysOfObjects(
    {foo: 'foo', bar: 'bar'},
    {bar: undefined, some: 'some'}
)
mergeSameKeysOfObjects_v2(
    {foo: 'foo', bar: 'bar'},
    {bar: undefined, some: 'some'}
)