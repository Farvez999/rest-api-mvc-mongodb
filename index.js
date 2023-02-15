const app = require("./app");
const config = require("./config/config");

const port = config.app.port || 5000;


app.listen(port, () => {
    console.log(`Rest Api in MVC With Mongodb running on Server ${port}`);
})