import posts from '../data/tuits.json';

const tuits = (state = posts, action) => {
  switch (action.type) {
    case 'like-tuit':
      return posts.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes -= 1;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          } 
        }
        return tuit;
      });
    case 'delete-tuit': 
      return posts.filter(tuit => tuit._id !== action.tuit._id);
    case 'create-tuit':
      const tuit = {
        _id: (new Date()).getTime() + '',
        "topic": "Web Development",
        "userName": "ReactJS",
        "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        "tweet": action.tuit,
        "avatar-image": "/tuiter/images/nasa.png",
        "logoImage": "/tuiter/images/nasa.png",
        "stats": {
          "comments": 123,
          "retuits": 234,
          "likes": 345
        }
      };
      return ([
        tuit,
        ...posts,
      ]);

    default:
      return (state);
  }
};

export default tuits;