import React from "react";
import { User, Phone, Trash2 } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles.contactInfo}>
        <span className={styles.name}>
          <User className={styles.icon} size={18} />
          {contact.name}
        </span>
        <span className={styles.phone}>
          <Phone className={styles.icon} size={18} />
          {contact.number}
        </span>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
