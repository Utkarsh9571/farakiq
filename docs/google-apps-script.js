/**
 * FARAKIQ — Lead Intake & Notification Google Apps Script (Code.gs)
 *
 * ============================================================================
 * CRITICAL DEPLOYMENT SETTINGS TO AVOID "YOU NEED ACCESS" ERROR:
 * ============================================================================
 * 1. Open your Google Sheet.
 * 2. Go to Extensions -> Apps Script.
 * 3. Paste this entire code into `Code.gs`.
 * 4. Change `ADMIN_EMAIL` below to your own email address where you want to receive leads.
 * 5. Click the floppy disk Save icon.
 * 6. Click "Deploy" (blue button at top right) -> "Manage deployments".
 *    - Click the pencil (Edit) icon next to the active deployment.
 *    - Under "Version", select: "New version".
 *    - Under "Execute as", select: "Me (your-email@gmail.com)".
 *    - Under "Who has access", select: "Anyone" (NOT "Only myself", NOT "Anyone with Google account").
 *      * NOTE for Google Workspace users: If you only see your domain, click "Anyone" outside your org.
 *    - Click "Deploy".
 *    - If prompted with "Authorization Required":
 *      Click "Review Permissions" -> Choose your Google Account -> Click "Advanced" -> Click "Go to FARAKIQ (unsafe)" -> Click "Allow".
 * 7. Copy the "Web app URL" (ends with /exec).
 * 8. Verify the URL is in your `.env.local`:
 *    NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 * ============================================================================
 */

// 1. CHANGE THIS TO YOUR ACTUAL EMAIL ADDRESS WHERE YOU WANT TO RECEIVE NOTIFICATIONS
const ADMIN_EMAIL = "sales@farakiq.com";
const BRAND_NAME = "FARAKIQ";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: "No post data received" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const data = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = new Date();

    // Map fields supporting both naming conventions
    const name = data.name || data.fullName || "N/A";
    const email = data.email || "N/A";
    const company = data.company || data.organization || "N/A";
    const budget = data.budget || data.budgetRange || "N/A";
    const service = data.service || data.projectType || "N/A";
    const message = data.message || data.details || "N/A";

    // 1. Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Company",
        "Budget Range",
        "Service Interest",
        "Message / Project Details",
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#14171A").setFontColor("#EDEAE0");
    }

    // 2. Append lead row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      company,
      budget,
      service,
      message,
    ]);

    // 3. Send Notification Email to Admin
    const adminSubject = `🚨 New Project Lead: ${name} (${company})`;
    const adminBody = `
      <div style="font-family: Arial, sans-serif; background: #0d0f12; color: #edeae0; padding: 24px; border-radius: 8px;">
        <h2 style="color: #ff4a34; margin-top: 0;">New Lead Submitted on FARAKIQ</h2>
        <table style="width: 100%; border-collapse: collapse; color: #edeae0;">
          <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}" style="color: #ff4a34;">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Budget Range:</td><td style="padding: 8px;">${budget}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Service Interest:</td><td style="padding: 8px;">${service}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 8px; white-space: pre-wrap;">${message}</td></tr>
        </table>
        <p style="font-size: 12px; color: #a6a9a0; margin-top: 20px;">Received on ${timestamp.toLocaleString()}</p>
      </div>
    `;

    try {
      MailApp.sendEmail({
        to: ADMIN_EMAIL,
        subject: adminSubject,
        htmlBody: adminBody,
      });
    } catch (mailErr) {
      Logger.log("Admin email error: " + mailErr.toString());
    }

    // 4. Send Confirmation Auto-responder Email to Client
    if (email && email.indexOf("@") !== -1 && email !== "N/A") {
      const clientSubject = `We received your project enquiry — ${BRAND_NAME}`;
      const clientBody = `
        <div style="font-family: Arial, sans-serif; background: #0d0f12; color: #edeae0; padding: 28px; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #ffffff; margin-top: 0;">Hi ${name},</h2>
          <p style="color: #a6a9a0; line-height: 1.6;">Thank you for reaching out to <strong>${BRAND_NAME}</strong>. We received your project enquiry regarding <strong>${service}</strong>.</p>
          <p style="color: #a6a9a0; line-height: 1.6;">Our engineering and growth team is reviewing your requirements. We will be in touch within 24 hours to schedule a discovery call or discuss the next steps.</p>
          <div style="border-top: 1px solid #232830; margin-top: 24px; padding-top: 16px; font-size: 13px; color: #a6a9a0;">
            <strong>FARAKIQ Engineering &amp; Growth Partnership</strong><br>
            Email: <a href="mailto:${ADMIN_EMAIL}" style="color: #ff4a34; text-decoration: none;">${ADMIN_EMAIL}</a><br>
            Website: <a href="https://www.farakiq.com" style="color: #ff4a34; text-decoration: none;">https://www.farakiq.com</a>
          </div>
        </div>
      `;

      try {
        MailApp.sendEmail({
          to: email,
          subject: clientSubject,
          htmlBody: clientBody,
        });
      } catch (clientMailErr) {
        Logger.log("Client email error: " + clientMailErr.toString());
      }
    }

    // 5. Return JSON Success Response for CORS
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Lead captured successfully" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("FARAKIQ Apps Script Lead Endpoint Active.");
}
