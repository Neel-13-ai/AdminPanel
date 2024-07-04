const { z } = require("zod");

const singupSchema = z.object({
  username: z
    .string({ required_error: "Name is required." })
    .trim()
    .min(3, { message: "Name at least of 3 chars." })
    .max(255, { message: "Name must not be more than 255 chars." }),
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({ message: "Invalid email Adress." })
    .min(3, { message: "Email at least of 3 chars." })
    .max(255, { message: "Email must not be more than 255 chars." }),
  phone: z
    .string({ required_error: "Phone number is required." })
    .trim()
    .min(10, { message: "Phone number must be at least of 10 chars." })
    .max(20, { message: "Phone number must not be more than 20 chars." }),
  password: z
    .string({ required_error: "Password is required." })
    .trim()
    .min(7, { message: "Password must be at least of 7 chars." })
    .max(1024, { message: "Password  must not be more than 20 chars." }),
});

module.exports = singupSchema;
