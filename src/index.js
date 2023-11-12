// export function randomId() {
//   const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
//   return uint32.toString(16);
// }

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(window)
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory({});
    } else {
        root.returnExports = factory(window);
    }
}(typeof self !== 'undefined' ? self : this, function (wnd) {

    const CoCreateUUID = {
        attribute: 'uuid',

        init: function (container) {
            if (!wnd.document) return;

            const __container = container || wnd.document
            if (!__container.querySelectorAll) {
                return;
            }

            let elements = __container.querySelectorAll(`[${this.attribute}]`);
            const self = this;
            elements.forEach(el => {
                const len = parseInt(el.getAttribute(self.attribute)) || 36;
                const uuid = self.generate(len)
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.value = uuid;
                } else {
                    el.innerHTML = uuid;
                }
            })
        },

        generate: function (length = 36) {
            let pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
            if (length > 36) {
                length = 36; // If requested length is more than 36, set it to 36.
            }

            let uuid = pattern.replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0;
                var v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            }).substring(0, length); // Truncate to the requested length.

            console.log(uuid); // For testing, log the generated UUID to the console.
            return uuid;
        },
    }

    CoCreateUUID.init();

    return CoCreateUUID;

}));
