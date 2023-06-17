import RedisPubSub from '/imports/startup/server/redis';
import handleStartDisplayExternalUrl from './handlers/startDisplayExternalUrl';
import handleStopDisplayExternalUrl from './handlers/stopDisplayExternalUrl';

RedisPubSub.on('StartDisplayExternalUrlEvtMsg', handleStartDisplayExternalUrl);
RedisPubSub.on('StopDisplayExternalUrlEvtMsg', handleStopDisplayExternalUrl);
