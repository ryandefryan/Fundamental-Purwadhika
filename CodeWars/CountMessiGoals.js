function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

    var totalGoals = 0
    totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals

    return totalGoals
  }

  console.log(goals(0, 0, 0))
  console.log(goals(3, 6, 9))