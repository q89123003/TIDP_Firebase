import requests
import json

url = 'https://us-central1-tidp-fusionnext.cloudfunctions.net/gps'
data = {'latitude': 123, 'longitude': 444}
headers = {'Content-type': 'application/json'}
r = requests.post(url, data=json.dumps(data), headers=headers)

print(r.text)

url = 'https://us-central1-tidp-fusionnext.cloudfunctions.net/queryTest'
r = requests.get(url)
print(r.text)