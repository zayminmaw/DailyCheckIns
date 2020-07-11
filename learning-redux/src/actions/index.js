export const increment = (nr) => {
  return {
    type: "Increment",
    payload: nr,
  };
};
export const decrement = () => {
  return {
    type: "Decrement",
  };
};
