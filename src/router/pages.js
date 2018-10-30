export const login = r => require.ensure([], () => r(require('../pages/login')), 'login');
export const index = r => require.ensure([], () => r(require('../pages/index')), 'index');
export const message = r => require.ensure([], () => r(require('../pages/message')), 'message');
export const friend = r => require.ensure([], () => r(require('../pages/friend')), 'friend');
export const audioCall = r => require.ensure([], () => r(require('../pages/audioCall')), 'audioCall');
export const conference = r => require.ensure([], () => r(require('../pages/conference')), 'conference');
export const shareScreen = r => require.ensure([], () => r(require('../pages/shareScreen')), 'shareScreen');
export const whiteboard = r => require.ensure([], () => r(require('../pages/whiteboard')), 'whiteboard');

