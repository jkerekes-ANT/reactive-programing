import { pipe } from "./operators/pipe";

export const createObservable = (producer) => ({
  subscribe: (onNext, onError, onComplete) => {
    if (onNext && typeof onNext === "function") {
      return producer({
        onNext,
        onError,
        onComplete
      });
    } else {
      return producer(onNext);
    }
  },
  pipe2: () => console.log(this),
  pipe: function (...args) {
    return pipe(...args)(this);
  }
});

export const Timer = (n) =>
  createObservable(({ onNext, onError, onComplete }) => {
    let time = 0;

    const int = setInterval(() => {
      onNext(time);
      time++;
    }, n * 1000);
    return {
      unsubscribe: () => clearInterval(int)
    };
  });

const simple = (event, element) => {
  const eventHandler = () => console.log("clicked");
  element.addEventListener(event, eventHandler);
};

export const createObservableFromEvent = (event, element) =>
  createObservable(({ onNext, onError, onComplete }) => {
    const eventHandler = (event) => onNext(event);
    element.addEventListener(event, eventHandler);

    return {
      unsubscribe: () => element.removeEventListener(event, eventHandler)
    };
  });

// setTimeout(() => s.unsubscribe(), 10000);
/*
  let timerSub = Timer(5).subscirbe((val)=> console.log(val)

  let timerSub = Timer(5).pipe(map (n)=> `time${n}` ).subscirbe((val)=> console.log(val))

*/
