////____exacmple using a Grades Database__________//////
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    var grades = db.collection('grades');

    var cursor = grades.find({}); ///gives ALL the docs in the collection!!!!
    cursor.skip(1);
    cursor.limit(4);
    cursor.sort('grade', 1);
    //cursor.sort([['grade', 1], ['student', -1]]);

    //var options = { 'skip' : 1,
    //                'limit' : 4,
    //                'sort' : [['grade', 1], ['student', -1]] };
    //var cursor = grades.find({}, {}, options);

    cursor.each(function(err, doc) {
        if(err) throw err;
        if(doc == null) {
            return db.close();
        }
        console.dir(doc);
    });
});

/////______INITIAL REDDIT___________//////
// var MongoClient = require('mongodb').MongoClient
//   , request = require('request');

// MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
//     if(err) throw err;

//     request('http://www.reddit.com/r/technology/.json', function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             var obj = JSON.parse(body);

//             var stories = obj.data.children.map(function (story) { return story.data; });
//             //data.children is where the list of stories is found in the json obj//

//             db.collection('reddit').insert(stories, function (err, data) {
//                     if(err) throw err;

//                     console.dir(data);

//                     db.close();
//             });
//         }
//     });
// });
