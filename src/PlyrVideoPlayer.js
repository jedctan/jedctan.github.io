import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

const PlyrVideoPlayer = ({ videoId }) => {
  const plyrProps = {
    source: {
      type: 'video',
      sources: [
        {
          src: videoId,
          provider: 'youtube',
        },
      ],
    },
  };

  return <Plyr {...plyrProps} />;
};

export default PlyrVideoPlayer;
