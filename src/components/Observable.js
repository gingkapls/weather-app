const Observable = (initialValue = null) => {
  let value = initialValue;
  let subscribers = [];

  const unsubscribe = (subscriber) => {
    subscribers = subscribers.filter((fn) => fn !== subscriber);
    return subscribers.length;
  };

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => unsubscribe(subscriber);
  };

  const update = async (updater) => {
    const oldValue = value;
    value =
      typeof updater === 'function' ? await updater(value) : await updater;

    subscribers.forEach(async (subscriber) => {
      await subscriber(value, oldValue);
    });
  };

  return {
    get value() {
      return value;
    },
    subscribe,
    unsubscribe,
    update,
  };
};

export default Observable;
