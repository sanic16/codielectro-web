import * as z from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email({
      message: "El email no es válido",
    }),
    accountType: z.enum(["personal", "business"]),
    companyName: z.string().optional(),
    numberOfStudents: z.coerce.number().optional(),
    password: z
      .string()
      .min(8, {
        message: "La contraseña debe tener al menos 8 caracteres",
      })
      .refine((password) => {
        // At least one uppercase letter and one special character
        return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
      }, "La contraseña debe tener al menos una letra mayúscula y un caracter especial"),
    passwordConfirm: z.string(),
    acceptTerms: z
      .boolean({
        message: "Debes aceptar los términos y condiciones",
      })
      .refine((checked) => checked, "Debes aceptar los términos y condiciones"),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === "business" && !data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "El nombre de la empresa es requerido",
      });
    }
    if (
      data.accountType === "business" &&
      (!data.numberOfStudents || data.numberOfStudents < 1)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfStudents"],
        message: "El número de estudiantes es requerido",
      });
    }
    // Check if passwords match
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Las contraseñas no coinciden",
      });
    }
  });

// import * as z from "zod";

// const accountTypeSchema = z
//   .object({
//     accountType: z.enum(["personal", "business"]),
//     companyName: z.string().optional(),
//     numberOfStudents: z.coerce.number().optional(),
//   })
//   .superRefine((data, ctx) => {
//     if (data.accountType === "business" && !data.companyName) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["companyName"],
//         message: "El nombre de la empresa es requerido",
//       });
//     }
//     if (
//       data.accountType === "business" &&
//       (!data.numberOfStudents || data.numberOfStudents < 1)
//     ) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["numberOfStudents"],
//         message: "El número de estudiantes es requerido",
//       });
//     }
//   });

// const passwordSchema = z
//   .object({
//     password: z
//       .string()
//       .min(8, {
//         message: "La contraseña debe tener al menos 8 caracteres",
//       })
//       .refine((password) => {
//         // At least one uppercase letter and one special character
//         return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
//       }, "La contraseña debe tener al menos una letra mayúscula y un caracter especial"),
//     passwordConfirm: z.string(),
//   })
//   .superRefine((data, ctx) => {
//     // Check if passwords match
//     if (data.password !== data.passwordConfirm) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["passwordConfirm"],
//         message: "Las contraseñas no coinciden",
//       });
//     }
//   });

// const baseSchema = z.object({
//   email: z.string().email({
//     message: "El email no es válido",
//   }),
// });

// export const signUpSchema = baseSchema
//   .and(passwordSchema)
//   .and(accountTypeSchema);
