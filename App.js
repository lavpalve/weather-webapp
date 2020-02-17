import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var today = new Date();
  const weekDay =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','sunday','monday'];
  //console.log(today.getDay());
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let dateDay = weekDay[today.getDay()];
  let key = "6b5e15f997d95a7f6409a72e13a04a7b";
  let cityName = "Nashik";
  var temp = 0;
  let tempStatus = "";
  let humidity = "";
  let windSpeed = "";
  let sunriseSec = "";
  let sunsetSec = "";
  let sunriseDate = "";
  let sunsetDate = "";
  let sunriseTime = "";
  let sunsetTime = "";


  function searchCity(){
    cityName = document.querySelector("#cityNM").value;
      console.log(cityName);

      var link = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&apikey="+key;
      var request = new XMLHttpRequest();
      request.open('GET',link,true);
      request.onload = function(){
      var obj = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
      temp = obj.main.temp;
      tempStatus = obj.weather[0].main;
      humidity = obj.main.humidity;
      windSpeed = obj.wind.speed;
      sunriseSec = obj.sys.sunrise;
      sunriseDate = new Date(sunriseSec * 1000);
      sunriseTime = sunriseDate.toLocaleTimeString();
      sunsetSec = obj.sys.sunset;
      sunsetDate = new Date(sunsetSec * 1000);
      sunsetTime = sunsetDate.toLocaleTimeString();
      console.log(temp);
      console.log(tempStatus);
      console.log(humidity);
      console.log(windSpeed);
      console.log(sunriseTime);
      console.log(sunsetTime);
      document.getElementById("temp").innerHTML = temp;
      document.querySelector("#statusName").textContent = tempStatus;
      document.querySelector("#humidity").textContent = humidity;
      document.querySelector("#speed").textContent = windSpeed;
      document.querySelector("#sunrise").textContent = sunriseTime;
      document.querySelector("#sunset").textContent = sunsetTime;
	  document.querySelector("#statusName").style.color = "black";
      if(tempStatus == "Smoke"){
        document.getElementById("statusImg").src = "https://images.freecreatives.com/wp-content/uploads/2017/01/Smoke-Cloud-Vector.jpg";
      }else if(tempStatus == "Clouds"){
		 document.getElementById("statusImg").src = "https://data.whicdn.com/images/220295924/original.gif";
		 document.querySelector("#statusName").style.color = "white";
	  }else if(tempStatus == "Rain"){
		  document.getElementById("statusImg").src = "https://www.pngfind.com/pngs/m/11-116873_rain-vector-graphics-hd-png-download.png";
	  }else if(tempStatus == "Clear"){
		  document.getElementById("statusImg").src = "data:image/jpeg;base64,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";
	  }

      }
      else{
        console.log("The city doesn't exist! Kindly check");
      }
    }
    request.send();
    }

  return (
    <div>
	<div className="container-fluid" >
    <div className="row justify-content-center">
    <div className="col-md-6" style={{border:"1px solid black" , backgroundImage:"linear-gradient(red, yellow, blue)" , height:"800px"}}>
      <div className="container-fluid" >
        <div className="row justify-content-center">
          <div className="col-md-12 upper">
            <span className="date">{date}</span><br />
            <span className="dateDay">{dateDay}</span>
            <div className="row justify-content-center">
              <div className="col-md-4 temp"><span id="temp"> 00</span><span className="unit">°C</span></div>
              <div className="col-md-4 tempStatus">
                <span id="statusName">Clear</span>
                <span><img className="image" id="statusImg" src="data:image/jpeg;base64,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" /></span>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="ddMenu">
                {/*<select id="selCity" onChange={selectCity()}>
                  <option value="nashik">Nashik</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="ahmednagar">Ahmednagar</option>
                </select>*/}
               <form>
                 <div className="row">
                   <div className="col-9"  style={{margin:"0" , padding:"0"}} >
                    <input type="text" placeholder="CityName" id="cityNM" name="name" />
                   </div>
                   <div className="col-3 btn" style={{margin:"0" , padding:"0"}} >
                   <button type="button" onClick={searchCity}>Search</button>
                   </div>
                 </div>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 bottom">
            <div className="tempList">
              <div className="row">
                <div className="col-md-6">
                  <div className="listItem"><span className="listItemDay">Humidity</span><span className="floatValue" style={{float:"right" , display:"inline-block"}}><span id="humidity">00</span><span className="unit2"> %</span></span></div>
                  <div className="listItem"><span className="listItemDay">Wind Speed</span><span className="floatValue"><span id="speed">00</span><span className="unit2"> km/hr</span></span></div>
                  {/*<div className="listItem"><span className="listItemDay">{weekDay[today.getDay()+2]}</span><span id="dtday">31<span className="unit2">°C</span></span></div>*/}
                </div>
                <div className="col-md-6">
                {/*<div className="listItem"><span className="listItemDay">Today</span><span id="tday">29<span className="unit2">°C</span></span></div>*/}
                  <div className="listItem"><span className="listItemDay">Sunrise Time</span><span className="floatValue"><span id="sunrise">00:00:00 AM</span><span className="unit2"></span></span></div>
                  <div className="listItem"><span className="listItemDay">Sunset Time</span><span className="floatValue"><span id="sunset">00:00:00 PM</span><span className="unit2"></span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </div>
	  </div>
	  </div>
    </div>

  );
}

export default App;
