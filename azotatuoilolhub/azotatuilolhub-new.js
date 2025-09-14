// Script to manage event listeners (azota.vn)
// Run in DevTools console
function xoaEV() {
const EVENT_TYPES = [
  'beforeunload', 'blur', 'click', 'DOMContentLoaded', 'hashchange',
  'keydown', 'load', 'locationchange', 'message', 'mousedown',
  'orientationchange', 'popstate', 'resize', 'scroll', 'touchstart',
  'visibilitychange', 'fullscreenchange', 'pagehide', 'pageshow',
  'contextmenu'
];

class EventCleaner {
  constructor(targets = [window, document]) {
    this.targets = Array.isArray(targets) ? targets : [targets];
    this.checkEnvironment();
  }

  checkEnvironment() {
    if (typeof getEventListeners !== 'function') {
      throw new Error('getEventListeners is not available. Run this script in DevTools console.');
    }
  }

  removeListeners(eventTypes = EVENT_TYPES) {
    try {
      this.targets.forEach(target => {
        const listenersMap = getEventListeners(target);
        eventTypes.forEach(type => {
          (listenersMap[type] || []).forEach(({ listener }) => {
            target.removeEventListener(type, listener);
          });
        });
      });
      console.log(
        '%cEvent listeners removed successfully',
        'background: #fff; color: #000; padding: 2px 4px; border-radius: 4px'
      );
    } catch (error) {
      console.error('Failed to remove event listeners:', error);
    }
  }

  addContextMenuBlocker() {
    this.targets.forEach(target => {
      target.addEventListener('contextmenu', event => {
        event.stopPropagation();
        event.stopImmediatePropagation();
      }, { capture: true });
    });
    console.log(
      '%cContext menu blocker added',
      'background: #fff; color: #2f80ed; padding: 2px 4px; border-radius: 4px'
    );
  }

  execute() {
    this.removeListeners();
    this.addContextMenuBlocker();
    console.log(
      '%cScript by Nguyen Huynh Dang Nhut & Tran Hoang Long',
      'background: #fff; color: #27ae60; padding: 2px 4px; border-radius: 4px'
    );
  }
}

// Usage
try {
  const cleaner = new EventCleaner([window, document]);
  cleaner.execute();
} catch (error) {
  console.error('Script initialization failed:', error);

}
}
