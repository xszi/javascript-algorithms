// 方法一：好理解
function findJudge(N, trust) {
	var trustObj = {};
	var beTrustObj = {};
	trust.forEach(item => {
		if(trustObj[item[0]]) {
			trustObj[item[0]] = trustObj[item[0]] + 1
		} else {
			trustObj[item[0]] = 1
		}
		if(beTrustObj[item[1]]) {
			beTrustObj[item[1]] += 1
		} else {
			beTrustObj[item[1]] = 1
		}
	})
	let has = -1
	for(let i = 1; i <= N; i++) {
		if(!trustObj[i] && beTrustObj[i] == N - 1) {
			has = i
		}
	}
	return has
}

// 方法二：简洁
let findJudge = function(N, trust) {
    //构造0-N个节点的图
    let graph = Array.from({length:N+1}, () => ({outDegree:0, inDegree:0}))
    trust.forEach(([a, b]) => {
        graph[a].outDegree++
        graph[b].inDegree++
    })
    return graph.findIndex(({outDegree, inDegree}, index) => {
        //剔除0
        return index != 0 && outDegree === 0 && inDegree === N-1 
    })
};

const N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]

console.log(findJudge(N, trust));