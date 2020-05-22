export const cleanObject = obj => {
  const newObj = Object.entries(obj).reduce(
    (a, [k, v]) => (v == null ? a : { ...a, [k]: v }),
    {}
  );
  return newObj;
};
