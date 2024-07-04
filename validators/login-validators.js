const {z}  = require('zod')

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({ message: "Invalid email Adress." })
    .min(3, { message: "Email at least of 3 chars." })
    .max(255, { message: "Email must not be more than 255 chars." }),
    password: z
    .string({ required_error: "Password is required." })
    .trim()
    .min(7, { message: "Password must be at least of 7 chars." })
    .max(1024, { message: "Password  must not be more than 20 chars." }),
});

module.exports = loginSchema;