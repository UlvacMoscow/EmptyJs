myName = "global";

function test() {
    alert(myName);  //undefined
    var myName = "local";
    alert(myName);   //local
}

test();

myName2 = "global";

function test2()  {
    var myName2; // <=> var myName2 = undefined;
    alert(myName2);  //undefined
    var myName2 = "local";
    alert(myName2); // local
}
