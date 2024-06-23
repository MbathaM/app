import { z } from "zod";

// Define the form schema using Zod
export const FormSchema = z.object({
    firstName: z.string().trim().min(1, {
        message: 'First name is required',
    }),
    lastName: z.string().trim().min(1, {
        message: 'Last name is required',
    }),
    website: z.string().url({
        message: 'Invalid website format',
    }),
    email: z.string().email({
        message: 'Invalid email format',
    }),
    password: z.string()
        .min(8, {
            message: 'Password must be at least 8 characters long',
        })
        .regex(/(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z\d\s:])/, {
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        }),

    username: z.string()
        .min(3, {
            message: 'Username must be at least 3 characters long',
        })
        .max(20, {
            message: 'Username must be no more than 20 characters long',
        })
        .regex(/^[a-zA-Z0-9_]+$/, {
            message: 'Username can only contain letters, numbers, and underscores',
        }),
    age: z.number()
        .int({
            message: 'Age must be an integer',
        })
        .min(18, {
            message: 'You must be at least 18 years old',
        })
        .max(100, {
            message: 'Age must be no more than 100',
        }),
    phone: z.string()
        .regex(/^\+?[1-9]\d{1,14}$/, {
            message: 'Phone number must be a valid E.164 format',
        }),
    termsOfService: z.boolean().refine(val => val === true, {
        message: 'You must accept the terms of service',
    }),
    subject: z.string()
        .min(3, { message: 'Subject must be at least 3 characters long' })
        .max(100, { message: 'Subject can not exceed 100 characters long' }),

    message: z.string()
        .min(10, { message: 'Message must be at least 10 characters long' })
        .max(500, { message: 'Message can not exceed 500 characters long' })
    
})

// Define the User schema
export const UserSchema = z.object({
  id: z.string(),                // id must be a string
  email: z.string().email(),     // email must be a string and a valid email format
  firstName: z.string(),         // firstName must be a string
  isVerified: z.boolean(),       // isVerified must be a boolean
  lastName: z.string(),          // lastName must be a string
  role: z.enum(['admin', 'user']) // role must be either 'admin' or 'user'
});

// Define an array of Users schema
export const UsersArraySchema = z.array(UserSchema);

// Infer the User type from the UserSchema
export type User = z.infer<typeof UserSchema>;
