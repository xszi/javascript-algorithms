function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    // 加顶点
    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    // 加边
    this.addEdge = function(v, w) {
        addList.get(v).push(w);
        addList.get(W).push(v);
    }

    this.toString = function() {
        var s = '';
        for (var i = 0; i <vertices.length; i++) {
            s += vertices[i] + ' -> '
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n'
        }
    }
    return s;
}