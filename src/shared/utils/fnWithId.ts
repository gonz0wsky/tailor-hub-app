export const fnWithId =
  <T>(fn: (id: T) => any, id: T) =>
  () =>
    fn(id);
