import service from "uu/service.js"
export let getlink = (url) => {
    return new Promise((resolve, reject) => {
        service.request({
            url,
            method: "get"
        }).then((ok) => {
            resolve(ok);
        }).catch((err) => {
            reject(err);
        })
    })
}