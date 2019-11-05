var searchYouTube = (options, callback = ()=>{}) => {
  const ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

  $.ajax({
    url: ENDPOINT,
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
