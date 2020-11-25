// Complete the staircase function below.
function staircase(n) {
   
  

  for (var i=0 ; i < n; i++) {
    var stair= "";

    for (var j=1 ; j <= n; j++) {
      if (j >= n -i ) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }

}
