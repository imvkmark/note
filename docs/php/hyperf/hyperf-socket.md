# Socket 链接部分的问题
## 1. Hyperf\HttpMessage\Exception\NotFoundHttpException
```json
Hyperf\HttpMessage\Exception\NotFoundHttpException: Not Found(0) 
in /webdata/www/dev_game/vendor/hyperf/http-server/src/CoreMiddleware.php:173
...
```
这个地方我是使用的是 nginx 转发, 这个地方使用 socket 进行转发的时候
## 2. WebSocket hande shake failed, because the class does not exists
鉴权失败, 抛出的错误, 直接考虑鉴权
具体详细在错误中抛出


