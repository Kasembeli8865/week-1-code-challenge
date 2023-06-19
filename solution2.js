//solution 2
let speed= prompt("Enter your speed");
const speedLimit=70;
const maxPoints=12;
let demeritPoints=Math.round((speed - speedLimit)/5);

if(speed <= speedLimit){
    console.log("Ok.");
} else if(speed > speedLimit){
    if(demeritPoints>maxPoints){
        console.log("License suspended");
    }else {
        console.log("Points:", demeritPoints)
    }
}

