{} // <- this is scope

// let a = 10;
// const b = 20;
// var c = 30;

if(true) {
    let a = 100;
    const b = 200;
    var c = 300;
}

//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const userName = "vishal patidar";

    function Two() {
        const teaIsAvailable = "yes";

        console.log(userName);
    }
    //console.log("Tea is available : ",teaIsAvailable);

    Two();
    console.log("Tea is available : ",teaIsAvailable);

}

one();