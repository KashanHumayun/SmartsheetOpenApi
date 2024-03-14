module.exports = async function (ctx) {

    const randomValue = "webhookname" + Math.floor(Math.random() * 1000);
    const array = ["*.*"]
    body=ctx.body
    return {
        "body":body,
        "webhookname": randomValue,
        "events": array
    }
};
