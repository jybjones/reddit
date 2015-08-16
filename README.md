#reddit

Learning MongoDB using Reddit Notes:::::
1. You can get a JSON string from reddit using: https://www.reddit.com/r/technology.json
2. Finding specific things in a title in a Reddit post from the MONGOShell, and projecting out the ID Field so that we JUST GET THE titles back -->
      db.reddit.find({'title': { '$regex': 'NSA'}}, {'title': 1, '_id': 0});
3. Dot notation --> basically means descend into nested document:
      var query = {'media.oembed.type' : video};
