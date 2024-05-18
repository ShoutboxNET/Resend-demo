# Shoutbox.net and Resend Integration

Shoutbox.net is a Developer API designed to send transactional emails at scale. This guide will explain how you can seamlessly switch your email service from Resend to Shoutbox.net without changing a single line of code in your application.

## What is Shoutbox.net?

Shoutbox.net is a powerful API that enables developers to send transactional emails efficiently and at scale. It provides robust features, including support for attachments, custom headers, and more, ensuring reliable email delivery for your applications.

## What is Resend?

Resend is another email API service that allows developers to send emails programmatically. It provides a straightforward API for sending emails with basic features like subject, text, and recipient management.

## Seamless Switch from Resend to Shoutbox.net

If you are already using Resend in your application, you can switch to Shoutbox.net without changing any code. By setting the `RESEND_BASE_URL` environment variable to Shoutbox.net's API endpoint, your existing Resend code will run seamlessly on Shoutbox.net.

### Setting Up the Environment Variable

To switch from Resend to Shoutbox.net, export the `RESEND_BASE_URL` environment variable in your environment:

```bash
export RESEND_BASE_URL=https://api.shoutbox.net
```

## Installation

You need to install the `resend` package to use the Resend API. This package can be installed using npm, yarn, or pnpm.

### Using npm

```bash
npm install resend
```

### Using yarn

```bash
yarn add resend
```

### Using pnpm

```bash
pnpm add resend
```

## Example Code

Here is an example of how to send an email using Resend. This code will work with Shoutbox.net by setting the `RESEND_BASE_URL` environment variable as described above:

```javascript
import { Resend } from "resend";

const resend = new Resend("MY_API_KEY");

(async () => {
  console.log(
    await resend.emails.send({
      from: "no-reply@shoutbox.net",
      to: "frank@example.com",
      subject: "hello world",
      text: "it works!",
    })
  );
})();
```

### Running the Example

1. **Set Up the Environment Variable**

   Before running the example, set the `RESEND_BASE_URL` environment variable to point to Shoutbox.net:

   ```bash
   export RESEND_BASE_URL=https://api.shoutbox.net
   ```

2. **Run the Code**

   Execute the JavaScript file containing the example code:

   ```bash
   node example.js
   ```

   Replace `example.js` with the name of your JavaScript file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Summary

By using the `RESEND_BASE_URL` environment variable, you can easily switch your email service from Resend to Shoutbox.net without modifying your existing code. This allows you to leverage the robust features of Shoutbox.net for your email delivery needs. For more information on Shoutbox.net and its capabilities, refer to the official documentation.