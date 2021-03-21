const debounce = (callback, time = 300) => {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback.bind(null, ...args), time);
  };
};
