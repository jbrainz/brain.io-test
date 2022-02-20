import { body } from "express-validator";

import commonError from "../../constants/errors/common";

const validate = [
    body("email")
        .escape()
        .trim()
        .isLength({
            min: 5
        })
    .isEmail()
        .withMessage(
            commonError.REQUIRED.replace("{fieldname}", "Email/Username")
        ),
    body("password")
        .escape()
        .trim()
        .isLength({
            min: 6
        })
        .withMessage(commonError.REQUIRED.replace("{fieldname}", "Password"))
];

export default validate;
