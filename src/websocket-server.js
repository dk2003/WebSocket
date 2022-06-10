// 导入nodejs-websocket
const ws = require('nodejs-websocket');
const PORT = 3000;

// 创建一个server
// 每次只要有用户连接，就会给当前连接的用户创建一个connect对象，传递进入的函数就会被执行，
const server = ws.createServer(connect => {
    console.log('有用户连接上来了');
    // 每当接收到用户传递过来的数据，这个text事件就会被触发
    connect.on('text', data => {
        console.log('接收到了用户的数据' + data);
        const response = 'responseTolowercase:' + data.toLowerCase() + '!!!!';
        connect.sendText(response);
        console.log('回复给了用户数据' + response);
    })
})

server.listen(PORT, () => {
    console.log('websocket服务启动成功了，监听端口为' + PORT);
})