import { createObservable } from "../observable";

export const map = (transform) => (observable) =>
  createObservable((observer) =>
    observable.subscribe({
      ...observer,
      onNext: (value) => observer.onNext(transform(value))
    })
  );

/*

export const map = (transform) => (observable) =>
  createObservable((observer) => {
    const sub = observable.subscribe({
      ...observer,
      onNext: (value) => transform(value)
    })

    return  {
      unsubscribe: () => observable.unsubscribe()
    }
  }
 );


map(trasform)(Timer(1))

*/
