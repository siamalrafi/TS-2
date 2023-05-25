"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({ title: String });
schema.static("myStaticMethod", function myStaticMethod() {
    return 42;
});
const User = (0, mongoose_1.model)("User", schema);
// const answer: number = User.getDetails(); // 42
