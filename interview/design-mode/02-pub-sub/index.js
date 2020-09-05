// const list = [];

// function listen(fn) {
//     list.push(fn);
// }

// function trigger(data) {
//     list.forEach(item => item(data));
// }

// listen(
//     function() {console.log('this is listen1')}
// )

// listen(
//     function() {console.log('this is listen2')}
// )

// trigger()

const map = {}

function listen(key, fn) {
    if(!map[key]) {
        map[key] = []
    }
    map[key].push(fn)
}

function trigger(key, data) {
    map[key].forEach(item => item(data));
}

function remove(key, fn) {
    var result = []
    for (var i = 0; i < map[key].length; i++) {
        var currentFn = map[key][i]
        if (fn !== currentFn) {
            result.push(currentFn)
        }
    }
    map[key] = result
}

function event1Cb() {console.log('this is listen1')}

listen(
    'event1',
    function() {console.log('this is listen1')}
)

listen(
    'event1',
    event1Cb
)

listen(
    'event2',
    function() {console.log('this is listen2')}
)

trigger('event1')
trigger('event2')

remove('event1', event1Cb)
trigger('event1')
trigger('event2')