/** 指定した秒数待つ */
export const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

/** 任意のプロパティを除いたオブジェクトの作成 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
};

/** 最初の文字を大文字にする */
export const capitalize = (str: string) => {
  if (typeof str !== 'string' || !str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/** ランダムに一つ取得 */
export const random = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/** 正式なNumberかチェック */
export const isNumeric = (value: any): boolean => {
  return /^\d+(?:\.\d+)?$/.test(value);
};
