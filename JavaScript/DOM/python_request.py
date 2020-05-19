import requests

# Blocking(함수가 끝날 때까지/응답이 도착할 때까지 기다림)
# Non-blocking인 js와 비교하기 (DOM/jsXHR.html)
res = requests.get('https://koreanjson.com/posts/1')

data = res.json()
post_content = data[0].get('content')
print(post_content)
