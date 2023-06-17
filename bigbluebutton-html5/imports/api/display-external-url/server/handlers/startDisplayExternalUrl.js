import { check } from 'meteor/check';
import startDisplayExternalUrl from '../modifiers/startDisplayExternalUrl';

export default async function handleStartDisplayExternalUrl({ header, body }, meetingId) {
  check(header, Object);
  check(body, Object);
  check(meetingId, String);

  const { userId } = header;
  const { externalUrl } = body;

  await startDisplayExternalUrl(meetingId, userId, externalUrl);
}
