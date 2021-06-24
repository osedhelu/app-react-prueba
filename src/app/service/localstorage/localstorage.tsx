export const _Storage = {
  add: (key: string, data: any) => {
    const a: string = JSON.stringify(data)
    localStorage.setItem(key, a);
  },
  get: (key: string): any => {
    const a: any = localStorage.getItem(key);
    return JSON.parse(a);
  },
  remove: (key: string): any => {
    localStorage.removeItem(key);
  },
};
