for(let i = 2; i <=20 ; i++){

  let count = 0;

  for (let j=2; j<=i; j++) {
        if (i%j) {continue;}
        count += 1;
    }

  if (count == 1) alert(i);

}