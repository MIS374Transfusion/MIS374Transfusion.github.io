function rbccalculate()
{
  var weight = sessionStorage.getItem("rbcWeight");
  //var weight = 10;
  var minRec = 0;
  var maxRec = 0;
  var minRange = 10;
  var maxRange = 15;
  var recommendation = "he";

  if (weight <20) {
  	minRec = weight * minRange;
  	maxRec = weight * maxRange;
  	recommendation = minRec + "ml - " + maxRec +"ml";
	}

  if (weight >= 20){
  	recommendation = "1 unit";
  }

  alert(weight);

}


rbccalculate();