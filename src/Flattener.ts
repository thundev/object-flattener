class Flattener {
    private static style: string;

    public static flattenToArray(object: { [key: string]: any }) {
        Flattener.style = 'array';
        return Flattener.flatten(object);
    }

    public static flattenWithDots(object: { [key: string]: any }) {
        Flattener.style = 'dots';
        return Flattener.flatten(object);
    }

    private static flatten(
        object: { [key: string]: any },
        key: string | null = null,
        result: { [key: string]: any } = {},
    ): { [key: string]: any } {
        Object.keys(object).forEach((objectKey: string) => {
            const target = object[objectKey];

            const newKey = Flattener.getNewKey(key, objectKey);

            if (typeof target === 'object' && target !== null) {
                this.flatten(target, newKey, result);
                return;
            }

            // eslint-disable-next-line no-param-reassign
            result[newKey] = target;
        });

        return result;
    }

    private static getNewKey(previousKey: string | null, currentKey: string | number): string {
        if (typeof currentKey === 'number') {
            // eslint-disable-next-line no-param-reassign
            currentKey = currentKey.toString();
        }

        if (previousKey === null) {
            return currentKey;
        }

        return Flattener.style === 'array'
            ? `${previousKey}[${currentKey}]`
            : `${previousKey}.${currentKey}`;
    }
}

export default Flattener;
