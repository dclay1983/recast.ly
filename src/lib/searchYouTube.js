var searchYouTube = (options, callback = ()=>{}) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      maxResults: options.max,
      videoEmbeddable: true,
      q: options.query,
      part: 'snippet',
      type: 'video',
    },
    success: (data)=> {
      callback(data.items);
    },
    error: function(error) {
      console.error('Youtube: Failed to find a video', error);
    }
  });
};

export default searchYouTube;
