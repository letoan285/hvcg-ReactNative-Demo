export default class Utilities {
  static delay = (duration = 1000): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  };

  static getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  static getRandomInt = (min: number, max: number): number => {
    const minVar = Math.ceil(min);
    const maxVar = Math.floor(max);
    return Math.floor(Math.random() * (maxVar - minVar + 1)) + minVar;
  };
}
export const toUpperCase = (x: string): string => {
  return x.toUpperCase();
};

export const convertToIdTitle = (oldArr: any) => {
  if (!oldArr) {
    return [];
  }
  const newArr = oldArr.map((val: any) => {
    return {
      ...val,
      id: val.name,
      title: val.displayName,
    };
  });
  return newArr;
};

export const deepCopy = (target: any) => {
  return JSON.parse(JSON.stringify(target));
};
