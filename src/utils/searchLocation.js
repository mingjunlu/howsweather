let timeoutId

const searchLocation = (keyword, locations) => {
    return (!keyword || !locations)
        ? []
        : new Promise((resolve, reject) => {
            // 回傳相符的結果
            const returnResults = () => {
                resolve(locations
                    .filter(loc => loc.name.includes(keyword))
                    .sort((a, b) => {
                        // 完全符合的最優先顯示
                        if (a === keyword) return -1
                        if (b === keyword) return 1
        
                        const arr = [a, b]
                        const scores = [0, 0]
                        arr.forEach((obj, idx) => {
                            // 第一個符合的字愈前面的優先顯示
                            scores[idx] += obj.name.indexOf(keyword[0]) * 100
                            // 字數少的優先顯示
                            scores[idx] += obj.name.length * 10
                            // 鄉鎮區比縣市優先顯示
                            scores[idx] -= obj.address ? obj.address.length : 0
                        })
        
                        // 分數低的排前面
                        return scores[0] - scores[1]
                    })
                )
            }
            // 模擬呼叫 API 的等待時間
            if (timeoutId) { clearTimeout(timeoutId) }  // 防止 function 重複觸發
            const randomDelay = Math.floor(Math.random() * (11 - 6) + 6) * 100  // 600–1000 ms
            timeoutId = setTimeout(returnResults, randomDelay)
        })
}

export default searchLocation
