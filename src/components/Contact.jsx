import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useTranslation } from "react-i18next";

// ------ Utilidades de validación (ahora recibe 't' como parámetro)
const validateFields = (fields, t) => {
  const errors = {};
  
  if (!fields.nombre.trim()) errors.nombre = t("contact.name_required");
  else if (fields.nombre.length < 2) errors.nombre = t("contact.name_short");

  if (!fields.apellidos.trim()) errors.apellidos = t("contact.lastname_required");
  else if (fields.apellidos.length < 2) errors.apellidos = t("contact.lastname_short");

  if (!fields.email.trim()) errors.email = t("contact.email_required");
  else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(fields.email))
    errors.email = t("contact.email_invalid");

  return errors;
};

const initialState = { nombre: "", apellidos: "", email: "", mensaje: "" };

function Contact() {
  const { t } = useTranslation(); // Hook de traducción
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  // ---- HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleBlur = (e) => {
    // Pasa 't' a la función de validación
    const fieldErrors = validateFields({ ...fields, [e.target.name]: e.target.value }, t);
    setErrors((prev) => ({ ...prev, [e.target.name]: fieldErrors[e.target.name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pasa 't' a la función de validación
    const fieldErrors = validateFields(fields, t);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) return;

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_9za2tsb",
        "template_3xexr0c",
        {
          nombre: fields.nombre,
          apellidos: fields.apellidos,
          email: fields.email,
          mensaje: fields.mensaje,
        },
        "R4lUSwbxpNQn8ARbc"
      );
      setStatus("ok");
      setFields(initialState);
    } catch {
      setStatus("fail");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title" data-aos="fade-up">
      <h2 id="contact-title" className="contact__title">{t("contact.title")}</h2>
      <form className="contact__form" autoComplete="off" onSubmit={handleSubmit} noValidate>
        <div className="contact__row">
          <FormField
            label={t("contact.name")}
            name="nombre"
            value={fields.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.nombre}
            disabled={isSending}
            autoComplete="given-name"
          />
          <FormField
            label={t("contact.lastname")}
            name="apellidos"
            value={fields.apellidos}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.apellidos}
            disabled={isSending}
            autoComplete="family-name"
          />
        </div>
        <FormField
          label={t("contact.email")}
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          disabled={isSending}
          autoComplete="email"
        />
        <FormField
          label={t("contact.message")}
          type="textarea"
          name="mensaje"
          value={fields.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.mensaje}
          disabled={isSending}
        />
        {status === "ok" && <div className="contact__success">{t("contact.success")}</div>}
        {status === "fail" && (
          <div className="form-error contact__error__global">
            {t("contact.error")}
          </div>
        )}
        <button
          className="contact__btn"
          type="submit"
          disabled={isSending}
          aria-busy={isSending}
        >
          {isSending ? t("contact.sending") : t("contact.send")}
        </button>
      </form>
    </section>
  );
}

// --- COMPONENTE CONTROLADO DE INPUTS/AREAS
function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  disabled,
  autoComplete,
}) {
  return (
    <div className="contact__group">
      <label htmlFor={name} className="form-label">
        {label} <span aria-hidden="true" style={{color:'#ff4c8a'}}>*</span>
      </label>
      {type === "textarea" ? (
        <textarea
          className={`contact__input ${error ? "input-error" : ""}`}
          id={name}
          name={name}
          rows={5}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          autoComplete={autoComplete}
        />
      ) : (
        <input
          className={`contact__input ${error ? "contact__input__error" : ""}`}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          autoComplete={autoComplete}
        />
      )}
      {error && <span className="contact__error">{error}</span>}
    </div>
  );
}

export default Contact;