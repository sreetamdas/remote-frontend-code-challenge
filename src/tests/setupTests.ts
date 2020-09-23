import nodeCrypto from "crypto";

// @ts-expect-error
window.crypto = {
	getRandomValues: function (buffer: any) {
		return nodeCrypto.randomFillSync(buffer);
	},
};
