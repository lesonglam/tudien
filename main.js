function findTheWord() {
  alert("xin chao chu em 44");

  var txt = document.querySelector("#input-txt").value;

  const Http = new XMLHttpRequest();
  // const url='https://www.oxfordlearnersdictionaries.com/definition/english/' + txt;
  const url =
    "https://www.oxfordlearnersdictionaries.com/definition/english/" +
    txt +
    "_1?q=" +
    txt;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector(".content").innerHTML = Http.responseText;
      //  console.log(  Http.responseText) ;

      audio = document
        .querySelector(".phons_br .audio_play_button")
        .getAttribute("data-src-mp3");
      document.querySelector(".uk_pr").setAttribute("src", audio);

      audio = document
        .querySelector(".phons_n_am .audio_play_button")
        .getAttribute("data-src-mp3");

      document.querySelector(".us_pr").setAttribute("src", audio);

      document.querySelector(".content2").innerHTML =
        document.querySelector(".senses_multiple").innerHTML;
    }
  };
}

var audio;
