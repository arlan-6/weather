from sqlite3 import Time
import eel
from pyowm import OWM
from pyowm.utils import config
from pyowm.utils import timestamps
from pyowm.utils.config import get_default_config
from pyowm.owm import OWM
import datetime


eel.init("web")

config_dict = get_default_config()  
config_dict['language'] = 'kz'


owm = OWM('520e131b0f6aea18b3c0c5fba72bcee6')  
mgr = owm.weather_manager() 

today = datetime.date.today()
if today.month in (2, 3, 4):
    thisMonth = 'spring'
elif today.month in (5, 6, 7):
    thisMonth   = 'summer'
elif today.month in (8, 9, 10):
    thisMonth   = 'fall'
else:
    thisMonth = 'winter'


@eel.expose
def recv_data(location):
    country_and_place = location
    city, _ = location.split(',')
    observation = mgr.weather_at_place(country_and_place)
    #weather now-------------------------------------------------------------------------------------------------------------------------
    w = observation.weather
    status = w.detailed_status
    w.wind()
    humidity = w.humidity
    temp = w.temperature('celsius')['temp']
    msgtemp = 'In ' + city.capitalize() + ' now ' + str(temp) + '°C' 
    alll = [msgtemp, str(status).capitalize(), str(humidity) + "%", str(w.wind()['speed']) ]
    print( str(status) )  
    print( str(round(temp)) )     
    print( str(humidity) + "%"  )  
    print( str(w.wind()['speed']) )
    print(alll)

    #weather tomorrow-------------------------------------------------------------------------------------------------------------------
    daily_forecaster = mgr.forecast_at_place(country_and_place, 'daily')
    tomorrow = timestamps.tomorrow()                                   
    weather = daily_forecaster.get_weather_at(tomorrow)  
    tempTomorrow = weather.temperature('celsius')['day']
    statusTomorrow = weather.detailed_status
    humidityTomorrow = weather.humidity
    windSpeedTomorrow = weather.wind()['speed']
    print(weather.temperature('celsius')['day'])
    print(weather.detailed_status)
    msgTempTomorrow = 'In ' + city.capitalize() + ' tomorrow ' + str(round(tempTomorrow)) +'°C'


    

    alll.append(msgTempTomorrow)
    alll.append(statusTomorrow.capitalize())
    alll.append(str(humidityTomorrow) + "%" )
    alll.append(str(windSpeedTomorrow))
    #time------------------------------------------------------------------------------------------------
    
    sunrset_date = w.sunset_time(timeformat='iso')
    sunrise_date = weather.sunrise_time(timeformat='iso')
    _, tiime = sunrset_date.split(' ')
    _, tiiime = sunrise_date.split(' ')
    sunsetTime = (int(tiime.split(':')[0])+6)*60 + int(tiime.split(':')[1])
    sunriseTime = (int(tiiime.split(':')[0])+6)*60 + int(tiiime.split(':')[1])
    print(sunsetTime)
    print(sunriseTime)
    now = datetime.datetime.now()
    print(now.time())
    nowtime = str(now.time()).split(':')
    clock, _ = str(now.time()).split('.')
    nowMin = (int(nowtime[0]))*60 + int(nowtime[1])


    alll.append(sunriseTime)
    alll.append(sunsetTime)
    alll.append(int(nowMin))
    alll.append(clock)
    alll.append(w.status)
    print(w.status)
    print('-----------------------------------------------------------------------------------------')
    print('-----------------------------------------------------------------------------------------')
    return alll

@eel.expose
def rec_data(location, y, z):
    three_h_forecaster = mgr.forecast_at_place(location, '3h')
    tomorrow_at_five = timestamps.tomorrow(y, z)                      # datetime object for tomorrow at 5 PM
    weather = three_h_forecaster.get_weather_at(tomorrow_at_five)
    print(weather.temperature('celsius')['temp'])
    time_forecast = []
    time_forecast.append(weather.temperature('celsius')['temp'])
    time_forecast.append( weather.detailed_status.capitalize())
    time_forecast.append(weather.humidity)
    return time_forecast
eel.start("index.html", size=(500, 650), position=('right','top'))