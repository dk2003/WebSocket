# http
* http是否可以实现这种聊天的效果
* http是基于请求————响应的基本模型
* 使用http，服务器是无法向浏览器发送消息的
* 使用传统的http非常麻烦

# websocket
* websocket是基于TCP的一种新的网络协议，它实现了浏览器和服务器之间的全双工通信(服务器和客户端可以在任何时刻给对方发送消息)
* websocket是一种**持久**协议，**有状态**协议，客户端与浏览器之间建立的连接是长连接。
* 早期没用websocket时，由于http请求服务器无法主动给浏览器发送数据，因此需要浏览器定时向服务器发送请求(比如1s一次)，服务器把最新的响应数据回复给浏览器，这种模式叫做**AJAX轮询**，轮询的缺点就是浪费性能和资源
* websocket常常用于一些聊天等实时通信的情况

# H5 websocket API
* WebSocket对象提供了用于创建和管理WebSocket连接，以及可以通过该连接发送和接收数据的API
* 用法
1. 创建websocket对象
> var socket = new WebSocket(url)
> var socket = new WebSocket(url,[protocol])
> 参数1，url：连接的websocket属性
> 参数2，protocol：可选的，指定连接的协议
2. 当websocket服务连接的时候就会触发open事件

# websocket事件
1. open
* 建立连接时触发
2. message
* 客户端接收服务端数据时触发
3. error
* 通信发生错误时触发
4. close
* 连接关闭时触发

# websocket方法
1. socket.send
* 使用连接发送数据
2. socket.close
* 关闭连接


### nodejs开发websocket服务器
1. cnpm i nodejs-websocket -s
