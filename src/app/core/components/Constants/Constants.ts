export default class Constant {
  public validationRegex = {
    email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
    whiteSpace: new RegExp(/^$|^\S+/),
  };

  registerForm = {
    name: {
      required: 'Full Name is required',
      pattern: 'Please provide valid name',
    },
    email: {
      required: 'Email is required',
      pattern: 'Please provide valid Email',
    },
    address: {
      required: 'Address is required',
      pattern: 'Please provide valid address',
    },
    password: {
      required: 'Password is required',
      pattern: 'Please provide valid password',
    },
    contact: {
      required: 'Phone no is required',
      pattern: 'Please provide valid phone no',
    },
  };
}
