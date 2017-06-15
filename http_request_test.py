import requests
import json

testMode = 3

if testMode == 1:
	url = 'https://us-central1-tidp-fusionnext.cloudfunctions.net/gps'
	data = {'latitude': 123, 'longitude': 444}
	headers = {'Content-type': 'application/json'}
	r = requests.post(url, data=json.dumps(data), headers=headers)
	print(r.text)

if testMode == 2:
	url = 'https://us-central1-tidp-fusionnext.cloudfunctions.net/queryTest'
	r = requests.get(url)
	print(r.text)

if testMode == 3:
	url = 'https://us-central1-tidp-fusionnext.cloudfunctions.net/msgTest'
	data = {'token': 'eqGrHu-rmFg:APA91bGKYzUNswpml7v6sLRSuc_ClprqPwcqTFyjKh4E-qa0eMgb_ZIaV7IlgV1c3E0PQVqo3RxlAYl9M8SrOy8zesp-opwnfdEsCmvQDXzjlePKXskA9yU57hxVvb1PBy558XiNt9iw'}
	headers = {'Content-type': 'application/json'}
	r = requests.post(url, data=json.dumps(data), headers=headers)
	print(r.text)
