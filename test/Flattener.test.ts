import Flattener from '../src/Flattener';

const object: { [key: string]: any } = {
    number: 1,
    string: 'second',
    boolean: true,
    null: null,
    array: [1, 2, 3],
    arrayOfArrays: [[1, 2], [3, 4]],
    arrayOfObjects: [{first: '1', second: '2'}, {third: '3', forth: '4'}],
    arrayOfMixed: [{first: '1', second: '2'}, 1, [true, false], null, {key: [1, 2, 3]}],
};

const expectedWithDotsStyle: { [key: string]: any } = {
    number: 1,
    string: 'second',
    boolean: true,
    null: null,
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
};

const expectedWithArrayStyle: { [key: string]: any } = {
    number: 1,
    string: 'second',
    boolean: true,
    null: null,
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
};

describe.each([
    ['array style', expectedWithArrayStyle],
    ['dot style', expectedWithDotsStyle],
])('this can flatten an object:', (type, expected) => {
    test( `using ${type}`, () => {
        const result = type === 'array style'
            ? Flattener.flattenToArray(object)
            : Flattener.flattenWithDots(object);

        expect(Object.keys(result).length).toEqual(Object.keys(expected).length);

        Object.keys(expected).forEach((key: string) => {
            expect(Object.keys(result).includes(key)).toBeTruthy();
            expect(result[key]).toStrictEqual(expected[key]);
        });
    });
});
