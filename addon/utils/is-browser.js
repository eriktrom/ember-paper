/*
Ye' old overkill isBrower function.

Use this within init() within components or
any other hooks called by fastboot where dom
elements(or methods/functions called contain
dom elements) exist.

TODO: for kicks, there is one more check we can add for process.something
but I don't recall off the top of my head. It's in the ember source code though
for the curious and ambitious.

NOTE: how all statements return true or false, especially the last. Truthy
and Falsy make debugging harder. Be explicit here.
*/

export default function isBrowser() {
  return typeof window   !== 'undefined' &&
         typeof document !== 'undefined' &&
         typeof process  === 'undefined' &&
         !!window.document               &&
         !!window.document.createElement;
}
