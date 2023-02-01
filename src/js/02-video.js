import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector('iframe');
const player = new Player(videoEl);
const time = 'videoplayer-current-time';

player.on(
    'timeupdate',
    throttle(event => {
      localStorage.setItem(time, event.seconds);
    }, 1000)
);

player.setCurrentTime(localStorage.getItem(time));
