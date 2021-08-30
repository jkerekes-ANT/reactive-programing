import { createObservable } from "../observable";

export const filter = (testMeBaby) => (observable) =>
  createObservable((observer) =>
    observable.subscribe({
      ...observer,
      onNext: (value) => testMeBaby(value) && observer.onNext(value)
    })
  );
