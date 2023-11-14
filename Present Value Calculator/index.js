function presentvalue(fv,interest,years){
   const presentvalue= fv/Math.pow((1+interest),years);
   return presentvalue;
}
const fv=1000;
const interest=0.05;
const years=5;
const result = presentvalue(fv,interest,years);
console.log (result);