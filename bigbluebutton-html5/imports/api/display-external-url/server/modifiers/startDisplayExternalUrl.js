import { check } from 'meteor/check';
import Logger from '/imports/startup/server/logger';
import { DisplayExternalUrlMeetings } from '/imports/api/meetings';

export default async function startDisplayExternalUrl(meetingId, userId, externalUrl) {
  try {
    check(meetingId, String);
    check(userId, String);
    check(externalUrl, String);

    const selector = { meetingId };
    const modifier = { $set: { externalUrl } };

    Logger.info(`User id=${userId} displaying an external URL: ${externalUrl} for meeting ${meetingId}`);
    await DisplayExternalUrlMeetings.updateAsync(selector, modifier);
  } catch (err) {
    Logger.error(`Error on setting display external URL start in Meetings collection: ${err}`);
  }
}
