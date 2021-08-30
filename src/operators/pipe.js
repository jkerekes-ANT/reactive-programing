export const pipe = (...args) => (observable) =>
  args.reduce((observable, operator) => operator(observable), observable);

/*

ob.map(x=>x+s).filter()

ob = 
filter(pred)(map(x=>x+s)(obs))


*/
