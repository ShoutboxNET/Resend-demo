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