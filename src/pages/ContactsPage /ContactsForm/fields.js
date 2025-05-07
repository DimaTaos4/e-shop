export const fields = {
    email: {
      name: "email",
      type: "text",
      placeholder: "Ваш email",
      rules: {
        required: "Email required",
        pattern: {
          message: "Email must contain @",
          value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        },
      },
    },
    name: {

      name: "username",
      type: "text",
      placeholder: "Ваше имя",
      rules: {
        required: "Password required",
      },
    },
    message: {
      name: "message",
      type: "text",
      placeholder: "Введите сообщение",
      rules: {
        required: "Message required",
      },
    },
  };
  
//   export const defaultValues = {
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };