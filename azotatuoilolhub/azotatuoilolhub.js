// type web: azota.vn/*
// Run this script in console in dev tools
function removeAllEventListeners(target, eventTypes) {
    try {
        eventTypes.forEach(eventType => {
            const listeners = getEventListeners(target)[eventType];
            if (listeners) {
                listeners.forEach(listener => {
                    target.removeEventListener(eventType, listener.listener);
                });
            }
        });
        console.log("%cSuccess", 'background-color: white; color:black')
        console.log("%cRemoved all - Done by NGUYEN HUYNH DANG NHUT", 'color: blue; background-color: white; border-radius: 8px; padding: 5px;');
        console.log("%cRemade by Tran Hoang Long", 'color: green; background-color: white; border-radius: 8px; padding: 5px;');
    } catch (error) {
        console.error("An error occurred: Could not remove event listeners. Error details:", error);
    }
}

const eventTypes = [
    'beforeunload', 'blur', 'click', 'DOMContentLoaded', 'hashchange',
    'keydown', 'load', 'locationchange', 'message', 'mousedown',
    'orientationchange', 'popstate', 'resize', 'scroll', 'touchstart',
    'visibilitychange', 'fullscreenchange', 'pagehide', 'pageshow'
];

// Remove event listeners from window and document
removeAllEventListeners(window, eventTypes);
removeAllEventListeners(document, eventTypes);

document.addEventListener('contextmenu', function(event) {
    event.stopPropagation(); // Ngăn sự kiện bị chặn bởi các listeners khác.
    event.stopImmediatePropagation(); // Ngăn listeners ở mức ưu tiên cao hơn.
}, true);

// Tùy chọn: Xóa các listeners hiện có trên sự kiện 'contextmenu'
try {
    const eventTypes = ['contextmenu'];
    eventTypes.forEach(eventType => {
        const listeners = getEventListeners(document)[eventType];
        if (listeners) {
            listeners.forEach(listener => {
                document.removeEventListener(eventType, listener.listener);
            });
        }
    });
} catch (error) {
    console.warn("Có lỗi xảy ra hoặc getEventListeners không khả dụng:", error);
}
