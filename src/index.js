import "./styles.css";
import { Timer, createObservableFromEvent } from "./observable";
import { map, pipe, filter } from "./operators";

// const s = Timer(2).subscirbe();

// let timerSub = Timer(5).pipe(map((n)=> `time${n}` ).subscirbe((val)=> console.log(val));

document.getElementById("app").innerHTML = `
<h1>Hello Reactive Programing!</h1>
<div>
  hELLO jOCO, merge?
  gy: da
  <button id="btn">BOOM</button>
</div>
`;

// const sub = map((x) => x + 10)(Timer(1)).subscribe((v) => console.log(v));

// const sub = pipe(
//   map((x) => x + 10),
//   map((x) => x * 2)
// )(Timer(1)).subscribe((v) => console.log(v));

const sub = Timer(1)
  .pipe(
    map((x) => x + 10),
    map((x) => x * 2),
    filter((x) => x % 2 === 0)
  )
  .subscribe((v) => console.log(v));

setTimeout(() => sub.unsubscribe(), 10000);

// const btn = document.getElementById("btn");
// const clickObs = createObservableFromEvent("click", btn).pipe(
//   map((event) => event.target)
// );

// const sub2 = pipe(map(a => a+10))(clickObs)
// setTimeout(() => clickObs.unsubscribe(), 10000);

/*

const mergeMap = (trans) => (ob)=>pipe(map(t), )
Timer(1)
  .take(2)
  .pipe( mergeMap(x => Timer(1) )
  .pipe( map(x => Timer(1), mergeAll() )
  .


*/
