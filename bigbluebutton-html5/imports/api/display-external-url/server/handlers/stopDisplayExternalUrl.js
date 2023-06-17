import { check } from 'meteor/check';
import stopDisplayExternalUrl from '../modifiers/stopDisplayExternalUrl';

export default async function handleStopDisplayExternalUrl({ header }, meetingId) {
  check(header, Object);
  check(meetingId, String);

  const { userId } = header;

  await stopDisplayExternalUrl(userId, meetingId);
}
