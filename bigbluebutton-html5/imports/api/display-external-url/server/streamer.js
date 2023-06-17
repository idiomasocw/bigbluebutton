import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import RedisPubSub from '/imports/startup/server/redis';

const ExternalUrlStreamer = new Meteor.Streamer('display-external-url', { retransmit: false });

RedisPubSub.on('DisplayExternalUrlEvtMsg', function (payload) {
  check(payload, Object);

  const meetingId = payload.meetingId;
  check(meetingId, String);

  ExternalUrlStreamer.emit(meetingId, payload);
});

export default ExternalUrlStreamer;
