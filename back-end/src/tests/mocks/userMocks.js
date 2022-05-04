const accurateLoginRequest = {
    email: "fulana@deliveryapp.com",
    password: "fulana@123",
}

const loginResponseMock = {
  name: "Fulana Pereira",
  email: "fulana@deliveryapp.com",
  role: "seller",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZnVsYW5hQGRlbGl2ZXJ5YXBwLmNvbSJ9LCJpYXQiOjE2NTE2ODYwNDcsImV4cCI6MTY1MTc3MjQ0N30.00NcleVJ1XdXrcpuefQ-xNQxO3Fs6K3tW03mSB1LkqQ"
}

module.exports = {
  accurateLoginRequest,
  loginResponseMock
}