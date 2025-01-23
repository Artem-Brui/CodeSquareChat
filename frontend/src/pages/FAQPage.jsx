import { useState } from "react";


const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is this application about?",
        answer:
          "This application is designed to facilitate communication and collaboration between users."
      },

      {
        question: "Is the application free to use?",
        answer:
          "Yes, the basic features are free. However, premium features may require a subscription."
      }
    ]
  },
  {
    category: "Account & Registration",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "Click on the 'Sign Up' button on the homepage and fill in your details."
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Click on 'Forgot Password' on the login page and follow the instructions to reset your password."
      }
    ]
  },
  {
    category: "Messaging & Chats",
    questions: [
      {
        question: "How do I send a message?",
        answer:
          "Open a chat room, type your message in the input field, and press Enter."
      },
      {
        question: "Can I delete a message?",
        answer:
          "Yes, click on the message and select 'Delete' from the options."
      },
      {
        question: "How do I create a new room?",
        answer: "Click on the 'Create Room' button and follow the instructions."
      },
      {
        question: "Can I invite users to a room?",
        answer:
          "Yes, use the 'Invite' option in the room settings to send invitations."
      }
    ]
  },
  {
    category: "Rooms",
    questions: [
      {
        question: "Can I create multiple rooms?",
        answer:
          "Yes, you can create as many rooms as you want. Each room can have a unique name and purpose to suit your needs."
      },
      {
        question: "How do I manage my rooms?",
        answer:
          "You can manage your rooms by accessing the 'My Rooms' section in the app. There, you can edit room names, descriptions, and privacy settings."
      },
      {
        question: "Can I make a room private?",
        answer:
          "Yes, you can set a room to private in the settings. Private rooms require an invitation or approval for others to join."
      },
      {
        question: "Is there a limit to the number of users in a room?",
        answer:
          "No, there is no fixed limit on the number of users in a room. However, we recommend keeping the number manageable for better interactions."
      }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "Is my data secure?",
        answer:
          "Yes, we use end-to-end encryption to ensure your data is protected."
      },
      {
        question: "Can I control who sees my profile?",
        answer:
          "Yes, you can adjust your privacy settings in the account settings section."
      }
    ]
  },
  {
    category: "Technical Issues",
    questions: [
      {
        question: "Can I use the app on multiple devices?",
        answer:
          "Yes, our app is compatible with mobile phones and tablets, and we are actively working on a desktop version to enhance your experience across all devices."
      }
    ]
  },
  {
    category: "Data Protection",
    questions: [
      {
        question: "Is my data secure?",
        answer:
          "Yes, we use end-to-end encryption to ensure your data is protected. Additionally, our app complies with the latest data protection regulations to keep your personal information safe."
      },
      {
        question: "Can I control who sees my profile?",
        answer:
          "Yes, you can adjust your privacy settings in the account settings section. You can decide who can view your profile, send you friend requests, and join your chat rooms."
      }
    ]
  },
  {
    category: "Feedback and Support",
    questions: [
      {
        question: "How can I provide feedback about the app?",
        answer:
          "You can use the 'Feedback' section in the app settings to share your thoughts or suggestions. Your input helps us improve the app."
      },
      {
        question: "How can I contact support?",
        answer:
          "You can reach our support team via the 'Support' section in the app or by emailing us at support@ourapp.com."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="h1-faq">Frequently Asked Questions</h1>
      {faqData.map((section, index) => (
        <div
          key={index}
          className={`faq-section ${activeIndex === index ? "active" : ""}`}
        >
          <button className="faq-button" onClick={() => toggleFAQ(index)}>
            {section.category}
          </button>
          <div
            className="faq-content"
            style={{ maxHeight: activeIndex === index ? "1000px" : "0" }}
          >
            {section.questions.map((q, idx) => (
              <div key={idx} className="faq-item">
                <p>
                  <strong>Q: {q.question}</strong>
                </p>
                <p>A: {q.answer}</p>
                <p>
                  <br />
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
