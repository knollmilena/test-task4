// npm run test:task5

type AnyObject = {};

function sorting(arr: string[]): string[] {
  const sortedArray: string[] = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });
  return sortedArray;
}

export function deepEqual(first: AnyObject, second: AnyObject): boolean {
  const firstCount = Object.keys(first).length;
  const secondCount = Object.keys(second).length;

  console.log(firstCount);
  console.log(secondCount);

  if (firstCount !== secondCount) return false;

  const firstValues: Array<string | AnyObject> = sorting(Object.values(first));
  const secondValues: Array<string | AnyObject> = sorting(
    Object.values(second)
  );

  for (let i = 0; i < secondValues.length && secondValues.length !== 0; i++) {
    if (
      typeof secondValues[i] === "object" &&
      typeof firstValues[i] === "object"
    ) {
      const secondItem = secondValues[i];
      const firstItem = firstValues[i];

      if (secondItem && firstItem) {
        const keyValSecond = Object.keys(secondItem);
        const keyValFirst = Object.keys(firstItem);
        if (
          sorting(keyValFirst).toString() === sorting(keyValSecond).toString()
        ) {
          const secondValItem = secondValues[i];
          const firstValItem = firstValues[i];

          if (
            typeof secondValItem === "object" &&
            typeof firstValItem === "object"
          ) {
            return deepEqual(secondValItem, firstValItem);
          }

          if (secondValItem && firstValItem) {
            const valFirst: string[] = Object.values(secondValItem);
            const valSecond: string[] = Object.values(firstValItem);
            if (
              sorting(valFirst).toString() === sorting(valSecond).toString()
            ) {
              return true;
            } else {
              false;
            }
          }
        }
      }
    } else {
      if (firstValues[i] === secondValues[i]) return true;
    }
    return false;
  }

  return true;
}
