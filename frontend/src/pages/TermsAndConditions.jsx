
export default function TermsAndConditions() {
  {
    return (
      <div className="container terms-conditions-container">
        <div className="h1-title terms-conditions-title">
          <h1>General Terms and Conditions</h1>
        </div>
        <div className="conditions-paragraph">
          <div className="attention-condition">
            <p>
              By using this chat application, you agree to the following terms
              and conditions. <br />
              Please read them carefully. <br />
              If you do not agree to everything, you may not use the app.
            </p>
          </div>
          <div className="conditions-sections">
            <p>
              <span className="section">
                1. Eligibility This app is only available to individuals aged 18
                years or older. <br />
                By signing up, you confirm that you are at least 18 years old
                and take full responsibility for your use of the app.
              </span>
              <br />
              <br />
              <span className="section">
                2. Data and Message Handling Message Deletion: <br />
                Messages and data files sent within the app will be
                automatically deleted 48 hours after they are sent. <br />
                Room Deletion: Rooms without activity for 72 consecutive hours
                will be automatically deleted. <br />
                Message Export: Users can download their messages as PDF or TXT
                files before they are deleted.
              </span>
              <br />
              <br />
              <span className="section">
                3. File Sharing Files can be shared within the app, but they
                must not exceed 4MB in size. <br />
                The app reserves the right to reject or block files that do not
                meet these requirements or appear suspicious.
              </span>
              <br />
              <br />
              <span className="section">
                4. User Blocking and Deleting Blocking Users: Users can block
                other users. <br />
                Conversations with blocked users will remain accessible but will
                not continue unless the block is lifted. <br />
                Deleting Users: When a user deletes another, the chat history
                will be deleted only for the user who initiated the deletion.{" "}
                <br />
                The other user will still retain access to the conversation
                history.
                <br />
                Deleting or blocking users does not affect room membership.
              </span>
              <br />
              <br />
              <span className="section">
                5. Privacy and Responsibility User Responsibility: <br />
                You are solely responsible for your interactions and the content
                you share within the app. <br />
                Data Privacy: While we strive to protect your data, messages and
                files shared within the app are visible to participants of a
                conversation until deletion occurs. <br />
                Inappropriate Content: Sharing offensive, illegal, or harmful
                content is strictly prohibited and may result in account
                suspension or termination. You are solely responsible for your
                interactions and the content you share within the app. <br />
                Data Privacy: While we strive to protect your data, messages and
                files shared within the app are visible to participants of a
                conversation until deletion occurs. <br />
                Inappropriate Content: Sharing offensive, illegal, or harmful
                content is strictly prohibited and may result in account
                suspension or termination.
              </span>
              <br />
              <br />
              <span className="section">
                6. Activity Monitoring and Moderation The app employs automated
                systems to enforce these terms and may flag content or behavior
                violating these rules. <br />
                Repeat violations or severe infractions may lead to the
                suspension or permanent removal of accounts.
              </span>
              <br />
              <br />
              <span className="section">
                7. Limitations of Liability [App Name] is provided on an "as-is"
                basis. <br />
                The app team does not guarantee uninterrupted service or the
                preservation of data beyond the specified retention periods.
                <br />
                Users acknowledge that they use the app at their own risk.
              </span>
              <br />
              <br />
              <span className="section">
                8. Updates to Terms The app reserves the right to update these
                Terms and Conditions at any time. <br />
                Users will be notified of changes, and continued use of the app
                constitutes acceptance of the updated terms.
              </span>
              <br />
              <br />
              <span className="section">
                9. Suggestions and Feedback By providing feedback, suggestions,
                or ideas for improving the app, you grant us permission to use
                them without restrictions or compensation.
              </span>
            </p>
          </div>
          <div className="confirmation-buttons">
            {/* connect links to their path*/}
            <button>I Agree</button>
            <button>I Decline</button>
          </div>
        </div>
      </div>
    );
  }
}
