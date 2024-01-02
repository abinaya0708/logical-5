//Remove a enter element from an array

let a=[1,5,3,10,8];
let enter=10;
let emp=[];

for(let i=0;i<a.length;i++){
    if(a[i]!=enter){
        emp.push(a[i])
    }
}
document.write(emp)