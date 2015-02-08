'use strict';

describe('Seeing yourself on the webcam', function() {
  browser.get('index.html');

  it('uses the video tag', function() {
    var video = $('video.webcam-live');
    expect(video).toBeDefined();
  });
});


