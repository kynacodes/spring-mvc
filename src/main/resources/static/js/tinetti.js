alert("Welcome to the Tinetti Balance & Gait Assessment form! \n \nThis form is required by Medicare to document progress in therapy with our geriatric clients. It is a form that takes input from radio buttons and calculates them into a total score. Thanks for looking!");

let fetchScore = function(radioButtonName) {
  let score;

  if(document.querySelector("input[name=\"" + radioButtonName + "\"]:checked")){
    score = Number((document.querySelector("input[name=\"" + radioButtonName + "\"]:checked").value));
  }

  if(score){
    return score;
  }

  return 0;
}

function total(){
    var balanceScore = ((fetchScore("sitting") + fetchScore("rising") + fetchScore("attempts") + fetchScore("support") + fetchScore("stance") + fetchScore("nudged") + fetchScore("eyesClosed") + fetchScore("turnSteps") + fetchScore("turnSteady") + fetchScore("sitDown")));
    var gaitScore = (fetchScore("gait") + fetchScore("stepLength") + fetchScore("footClearance") + fetchScore("symmetry") + fetchScore("continuity") + fetchScore("path") + fetchScore("trunk") + fetchScore("time"));
    var totalScore = balanceScore + gaitScore;
    alert("TOTALS: \n \nBalance Score: " + balanceScore + "\nGait Score: " + gaitScore + "\n Combined Score (Balance & Gait): " + totalScore);
}

//[].slice.call(document.querySelectorAll('input[type="radio"]:checked')).map(ze => Number(ze.value)).reduce((total, n) => total + n);

//document.querySelector('input[name="sitting"]:checked');
//document.querySelector('input[name="sitting"]:checked').value;
//    SHOULD RETURN VALUE OF CHECKED BOX