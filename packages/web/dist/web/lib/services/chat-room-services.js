"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomService = void 0;
var chat_room_service_1 = require("../../../base/lib/services/chat-room-service");
var ChatRoomService = /** @class */ (function (_super) {
    __extends(ChatRoomService, _super);
    function ChatRoomService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatRoomService.prototype.printResult = function () {
        console.log("This is web");
    };
    return ChatRoomService;
}(chat_room_service_1.BaseChatRoomService));
exports.ChatRoomService = ChatRoomService;
