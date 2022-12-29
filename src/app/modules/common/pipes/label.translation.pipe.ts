import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translate' })
export class LabelTranslationPipe implements PipeTransform {
  labels = {
    'ms_project': 'MS Project',
    'email_address': 'Email Address',
    'forgot_password': 'Forgot Password',
    'send_password': 'Send Password',
    'back_to_login': 'Back to Login',
    'user_registration': 'User Registraton',
    'user_login': 'User Login',
    'field_with_starick_mandatory': 'Fields marked with * are required',
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'phone_no': 'Phone Number',
    'enter_password': 'Enter Password',
    'confirm_password': 'Confirm Password',
    'my_profile': 'My Profile',
    'email_invalid': 'Invalid email address.',
    'password_strength': 'Password must be of minimum 8 characters & should contain: At least 1 number,a special character,a upper and a lower case letter.',
    'invalid_login': 'Enter valid username or password.',
    'misMatchPassword': 'Mismatch',
    'father_name': 'Father Name',
    'cnic': 'CNIC',
    'register_success': 'Registered Successfully',
    'save_success': 'Saved Successfulfy!',
    'error_occur': 'An Error Occured!',
    'login_fail': 'Either username or password is incorrect',
    'delete_warning': 'Are you sure you want to delete?',
    'bad_request_error': '400: Bad Request',
    'page_not_found': '404: Page Not Found',
    'internal_server_error': '500: Internal Server Error',
    'forbidden_error': '403: Access Denied',
    'method_not_allowed': '405: Method Not Allowed',
    'bad_request_error_message': 'Server is unable to process the request sent by the client due to invalid syntax',
    'page_not_found_message': 'The page you are looking for was not found',
    'forbidden_error_message': 'You don\'t have permission to access this resource',
    'internal_server_error_message': 'An error occurred',
    'method_not_allowed_message': 'Server has rejected this method for the requested resource',
    'back_to_home': 'Back to Homepage',
    'sign_up': 'Register here',
    'user_type': 'User Type',
    'task_title': 'Task Title',
    'description': 'Description',
    'skill_level': 'Required Skill Level',
    'task_complexity_level': 'Task Complexity Level',
    'task_end_time': 'Expected Timeline',
    'task_amount': 'Task Amount',

  };

  transform(key: any, placeholder: string = null, value: any = null, defaultCase = null) {
    if (!(key instanceof String)) {
      key = "" + key;
    }
    let text: string = (this.labels[key]) ? this.labels[key] : key.charAt(0).toUpperCase() + key.slice(1);
    if (placeholder && value) {
      const regex = new RegExp(placeholder, 'gi');
      text = text.replace(regex, value);
    }
    if (defaultCase === 'U') {
      text = text.toUpperCase();
    }
    if (defaultCase === 'L') {
      text = text.toLowerCase();
    }
    if (defaultCase === 'UCF') {
      text = text.toLowerCase();
      text = text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
  }
}
