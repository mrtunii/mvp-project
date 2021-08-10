"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const UserModel = new mongoose_1.Schema({
    name: {
        type: String
    },
    hobbies: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Hobby'
        }
    ]
}, {
    timestamps: true
});
const User = mongoose_1.default.model("User", UserModel);
exports.default = User;
//# sourceMappingURL=user.model.js.map