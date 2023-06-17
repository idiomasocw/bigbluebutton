import { check } from 'meteor/check';
import Logger from '/imports/startup/server/logger';
import { DisplayExternalUrlMeetings } from '/imports/api/meetings';

export default async function stopDisplayExternalUrl(userId, meetingId) {
  try {
    check(meetingId, String);
    check(userId, String);

    const selector = { meetingId };
    const modifier = { $set: { externalUrl: null } };

    Logger.info(`Display external URL stop was initiated by:[${userId}] for meeting ${meetingId}`);
    await DisplayExternalUrlMeetings.updateAsync(selector, modifier);
  } catch (err) {
    Logger.error(`Error on setting display external URL stop in Meetings collection: ${err}`);
  }
}
