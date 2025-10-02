// for loop = repeat some code a LIMITED amount of times

for (let i = 1; i<=20; i++){
    if (i==13){
        break;  // el chi sharunakum run anel henc breakin e hasnum
    }
    else{
        console.log(i)
    }
}


// continue
for (let i = 1; i<=20; i+=2){
    if (i==11){
        continue;   // uxaki bac a toxnum et mi iteracian u ancnum a myusin
    }
    else{
        console.log(i)
    }
}