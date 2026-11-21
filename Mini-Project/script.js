var result = document.getElementById("result");
var error = document.getElementById("error");

function set(id, text) {
  document.getElementById(id).textContent = text;
}

function showError(msg) {
  result.style.display = "none";
  set("error", msg);
  error.style.display = "block";
}

document.getElementById("searchForm").onsubmit = async function (e) {
  e.preventDefault();
  var city = document.getElementById("city").value.trim();

  error.style.display = "none";

  try {
    var geo = await (await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(city) + "&count=1")).json();
    if (!geo.results) return showError("City not found");
    var p = geo.results[0];

    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + p.latitude + "&longitude=" + p.longitude +
      "&current=temperature_2m,relative_humidity_2m,wind_speed_10m" +
      "&daily=temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=auto";
    var data = await (await fetch(url)).json();

    set("cityName", p.name + ", " + p.country);
    set("temp", Math.round(data.current.temperature_2m) + "°C");
    set("humidity", data.current.relative_humidity_2m);
    set("wind", data.current.wind_speed_10m);
    document.getElementById("bar").style.width = data.current.relative_humidity_2m + "%";

    var cards = "";
    for (var i = 0; i < 5; i++) {
      var day = new Date(data.daily.time[i]).toLocaleDateString("en", { weekday: "short", timeZone: "UTC" });
      var max = Math.round(data.daily.temperature_2m_max[i]);
      var min = Math.round(data.daily.temperature_2m_min[i]);
      cards += '<div class="col-4 col-sm mb-2"><div class="card card-body text-center"><b>' + day + '</b>' + max + '° / ' + min + '°</div></div>';
    }
    document.getElementById("forecast").innerHTML = cards;
    result.style.display = "block";
  } catch (err) {
    showError("ERROR");
  }
};