/* References
 * Document.readyState: https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
 * Document:DOMContentLoaded event: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
 * Window:load event: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 * Date().GetTime(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
 * Me: https://www.linkedin.com/in/umutdr
 */

const fileInitedTime = GetCurrentTime();

function LogDocReadyState(execTime, type = '') {
  console.log({
    'document.readyState': document.readyState,
    'init-to-execute-time': execTime - fileInitedTime + 'ms',
    type,
  });
}

// Waits untill all assets (css, images, etc. ) and the DOM is fully loaded
// runs when the document.readyState is equal to 'complete'
window.addEventListener('load', () => {
  LogDocReadyState(GetCurrentTime(), 'window.addEventListener to load');
});

// Waits untill only the DOM is fully loaded, not for any assets
// runs when the document.readyState is equal to 'interactive'
document.addEventListener('DOMContentLoaded', () => {
  LogDocReadyState(
    GetCurrentTime(),
    'document.addEventListener to DOMContentLoaded'
  );
});

// loggin every ready-state-change event
// Its same with `document.addEventListener('readystatechange', () => {});`
document.onreadystatechange = () => {
  switch (document.readyState) {
    case 'loading': {
      // Nothing will be log'd to the console, because this file is not loaded yet
      LogDocReadyState(GetCurrentTime(), 'onreadystatechange');
      break;
    }
    case 'interactive': {
      // In this state DOM is fully loaded and can be manupulated
      LogDocReadyState(GetCurrentTime(), 'onreadystatechange');
      break;
    }
    case 'complete': {
      // In this state the DOM and all the assets (css, images, etc.) are fully loaded
      LogDocReadyState(GetCurrentTime(), 'onreadystatechange');
      break;
    }
  }
};

// Returns the number of milliseconds in UTC since the Unix Epoch
function GetCurrentTime() {
  return new Date().getTime();
}
