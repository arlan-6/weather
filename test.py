
import datetime
now = datetime.datetime.now()
nowtime = str(now.time()).split(':')
clock, _ = str(now.time()).split('.')
nowMin = (int(nowtime[0]))*60 + int(nowtime[1])
print(nowMin)