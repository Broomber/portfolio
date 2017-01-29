document.getElementById('date-dev').innerHTML = returnYear(2016,7,9);

function returnYear(year, month, day) {
  var siteBirthdayYear = (new Date(year, month, day)).getFullYear(),
      nowYear = (new Date).getFullYear();

  if (nowYear > siteBirthdayYear)
    return (siteBirthdayYear + " - " + nowYear);
  else
    return (siteBirthdayYear);
};

