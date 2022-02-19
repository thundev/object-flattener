# Object Flattener

### Installation
```sh
npm i object-flattener
```

### Usage

The `Flattener` object provides 2 static methods `flattenToArray()` and `flattenWithDots()`. As the names imply, these methods return a flattened object with different style of keys.

```javascript
const myObject = {
    number: 1,
    string: 'second',
    boolean: true,
    'null': null,
    array: [1, 2, 3],
    arrayOfArrays: [[1, 2], [3, 4]],
    arrayOfObjects: [{first: '1', second: '2'}, {third: '3', forth: '4'}],
    arrayOfMixed: [{first: '1', second: '2'}, 1, [true, false], null, {key: [1, 2, 3]}],
};

const result1 = Flattener.flattenToArray()
const result2 = Flattener.flattenWithDots()
```

#### flattenToArray() style keys
```javascript
{
    number: 1,
    string: 'second',
    boolean: true,
    'null': null,
    'array[0]': 1,
    'array[1]': 2,
    'array[2]': 3,
    'arrayOfArrays[0][0]': 1,
    'arrayOfArrays[0][1]': 2,
    'arrayOfArrays[1][0]': 3,
    'arrayOfArrays[1][1]': 4,
    'arrayOfObjects[0][first]': '1',
    'arrayOfObjects[0][second]': '2',
    'arrayOfObjects[1][third]': '3',
    'arrayOfObjects[1][forth]': '4',
    'arrayOfMixed[0][first]': '1',
    'arrayOfMixed[0][second]': '2',
    'arrayOfMixed[1]': 1,
    'arrayOfMixed[2][0]': true,
    'arrayOfMixed[2][1]': false,
    'arrayOfMixed[3]': null,
    'arrayOfMixed[4][key][0]': 1,
    'arrayOfMixed[4][key][1]': 2,
    'arrayOfMixed[4][key][2]': 3,
}
```
#### flattenWithDots() style keys
```javascript
{
    number: 1,
    string: 'second',
    boolean: true,
    'null': null,
    'array.0': 1,
    'array.1': 2,
    'array.2': 3,
    'arrayOfArrays.0.0': 1,
    'arrayOfArrays.0.1': 2,
    'arrayOfArrays.1.0': 3,
    'arrayOfArrays.1.1': 4,
    'arrayOfObjects.0.first': '1',
    'arrayOfObjects.0.second': '2',
    'arrayOfObjects.1.third': '3',
    'arrayOfObjects.1.forth': '4',
    'arrayOfMixed.0.first': '1',
    'arrayOfMixed.0.second': '2',
    'arrayOfMixed.1': 1,
    'arrayOfMixed.2.0': true,
    'arrayOfMixed.2.1': false,
    'arrayOfMixed.3': null,
    'arrayOfMixed.4.key.0': 1,
    'arrayOfMixed.4.key.1': 2,
    'arrayOfMixed.4.key.2': 3
}
```
