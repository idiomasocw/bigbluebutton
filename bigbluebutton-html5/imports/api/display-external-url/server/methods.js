import { Meteor } from 'meteor/meteor';
import startDisplayExternalUrl from './methods/startDisplayExternalUrl';
import stopDisplayExternalUrl from './methods/stopDisplayExternalUrl';

Meteor.methods({
  startDisplayExternalUrl,
  stopDisplayExternalUrl
});
