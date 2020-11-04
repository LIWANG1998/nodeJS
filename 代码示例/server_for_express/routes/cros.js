
// 1. 获取router实例
const router = require("express").Router();
// 2. 处理路由
// => jsonp
router.get("/jsonp", (req, res) => {
    let fnName = req.query.nm;
    let data = {
        name: "liwang",
        address: "四川省成都市成华区",
        title: "李旺最帅~~~~"
    }
    console.log(req.query)
    if (!fnName) {
        res.send("参数不正确");
        return
    }
    res.send(`${fnName}(${JSON.stringify(data)})`);
});
// 3. 导出路由
module.exports = router;
