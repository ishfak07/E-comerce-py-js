# 📧 Formspree Integration Setup

This project is configured to send Contact form submissions to Formspree so they arrive in your Gmail inbox.

## 1) Create a Form in Formspree
- Go to https://formspree.io/
- Sign in with your email (use your Gmail address where you want to receive messages)
- Create a new form, then copy its Form ID (looks like `abcdxyzp`)

## 2) Add the Form ID to your front-end env
Create `frontend/.env.local` and set:

```
VITE_FORMSPREE_FORM_ID=YOUR_FORM_ID_HERE
```

Restart the Vite dev server after adding the env file.

## 3) Where it’s used
- File: `frontend/src/pages/Contact.tsx`
- Config helper: `frontend/src/lib/config.ts`

The submit handler posts JSON to:
```
https://formspree.io/f/${VITE_FORMSPREE_FORM_ID}
```

## 4) Fields sent
The following fields are sent to Formspree:
- `name`
- `email`
- `_replyto` (same as email to set Reply-To)
- `subject`
- `_subject` (prefixed subject for easier filtering)
- `message`
- `order_id`
- `preferred_channel`

Formspree will forward submissions to the email address associated with your Formspree account (your Gmail).

## 5) Test it
- Start the app
- Go to `/contact`
- Fill the form and click “Send message”
- You should see a success alert; check your Gmail inbox

If you see “Contact form is not configured”: make sure you set `VITE_FORMSPREE_FORM_ID` and restarted the dev server.

## 6) Optional: Spam protection & Customizations
- In Formspree dashboard you can enable reCAPTCHA and spam filtering
- You can set custom email subject templates
- You can add webhooks or integrations (Slack, Zapier, etc.)

---

Troubleshooting:
- 400 with JSON errors: ensure your form is active and the Form ID is correct
- No email: verify in Formspree that your email is confirmed and the form is set to forward to Gmail
