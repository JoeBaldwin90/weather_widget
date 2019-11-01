# Weather Widget
Weather widget created with React, hosted on [Heroku](https://weather-widget-jb.herokuapp.com/). I hope you enjoy it. :-)

## Setup
The usual:
- `git clone`
- `cd weather_widget`
- `yarn start`

## Technologies
- JavaScript
- React
- JSX
- [OpenWeather API](https://openweathermap.org/)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Sass](https://sass-lang.com/) + [Tachyons](https://tachyons.io/) (CSS)

## How to use the widget
There is only one real UI feature here. 

The widget initially loads weather data from a secret location (it's an easter egg if you want to find it). To find weather from your current location you can click the location/city name in the top left hand corner of the widget. This will fire a new API call to the OpenWeather API using your geolocation (lat/long). _Note: you can also use the ugly button tucked away in the bottom left of the screen if you're using a laptop_.

## App Features
- Auto geolocation
- Current temperature (C)
- Wind speed (m/s)
- Cloud coverage (%)
- Humidity (%)
- Weather icons from the [OpenWeather library](https://openweathermap.org/weather-conditions).  
- Weather description 
- Weather +6, 12, 24, 48, 72h from now. 

## Future Development
- Responsive styling (Tachons is a mobile-first css toolkit, so this will be quite easy)
- "Feels like" heat index [calculation](https://www.wpc.ncep.noaa.gov/html/heatindex_equation.shtml).
- Change background fade colour depending on time/weather type. 
- Use keyframes to infintely animate the icon in the center of the widget to create a floating effect. 
- Add a user-typed search form. Something to this effect: 

```
const SearchForm = props => (
  <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="Enter city..." />
      <input type="text" name="country" placeholder="Enter country..." />
      <button>Get Weather</button>
  </form>
)
```

## Process
I started by examining the OpenWeather [documentation](https://openweathermap.org/forecast5) and experimenting with different endpoints in [Postman](https://www.getpostman.com/). 

I created a list of features that I'd like to build into the widget and tried to keep the scope realistic. One UX feature and a good coverage of weather data (see "App Features" above). I then made notes of the dot notation pathways I'd need to access within the API response so I access them easier later. 

During the fetch call, I created a new object from the API data and passed it into my App's state. StackOverflow was really useful at this point because I needed to convert the unix timestamp that was sent from the API response into a [readable date](https://stackoverflow.com/questions/28150469/convert-unix-to-readable-date-in-javascript). 

I've used regular react state here because I certainly don't have the familiarity with Redux yet to whip it up in under a day. Plus, I think it's overkill for this widget. 

What I didn't expect to happen was that I'd have difficulty accessing the weather data object from my state. This project, and the numerous error messages it's shown me, have taught me that I can't pass objects as props. Lesson learned. Best to use an array or simplify my data more first. 

Once I bashed my way through the prop-passing roadblock, I whipped up a quick sketch of the design I wanted to build in my brain (yep!) and filled out the JSX markup needed to display my data. 

As above, the only real UI/UX features here are the clickable location and the sliding "later-data" (so named for my lexical amusement). 

## Stumbling points
- During the project setup I had some problems adding my dependencies for tachyons, so I just imported the whole `tachyons.css` file as a quick workaround. It's huge, so it's not how I'd usually do it but I wanted to get going with the meat of the application. 
- As mentioned above, I didn't realise I couldn't pass objects as props. 
- I had some problems setting up the Geolocation API. I still don't know what was causing it's temperamental nature, but I closed down my project, closed VSCode and restarted the whole thing. It fixed it. 
- Expanding on the point above. Sometimes my app was crashing but a VSCode restart usually fixed it. It was my first point of call when something that I know I've done successfully before didn't work. More often than not, it worked. ¯\_(ツ)_/¯
