import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ------ Utilidades de validación
const validateFields = (fields) => {
  const errors = {};
  if (!fields.nombre.trim()) errors.nombre = "El nombre es obligatorio";
  else if (fields.nombre.length < 2) errors.nombre = "Nombre muy corto";

  if (!fields.apellidos.trim()) errors.apellidos = "Los apellidos son obligatorios";
  else if (fields.apellidos.length < 2) errors.apellidos = "Apellidos muy cortos";

  if (!fields.email.trim()) errors.email = "El correo es obligatorio";
  else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(fields.email))
    errors.email = "Correo inválido";



  return errors;
};

const initialState = { nombre: "", apellidos: "", email: "", mensaje: "" };

function Contact() {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // null | "ok" | "fail"

  // ---- HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleBlur = (e) => {
    const fieldErrors = validateFields({ ...fields, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: fieldErrors[e.target.name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = validateFields(fields);
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
    <section id="contact" className="contact" aria-labelledby="contact-title"  data-aos="fade-up">
      <h2 id="contact-title" className="contact__title">Contáctame</h2>
      <form className="contact__form" autoComplete="off" onSubmit={handleSubmit} noValidate>
        <div className="contact__row">
          <FormField
            label="Nombre"
            name="nombre"
            value={fields.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.nombre}
            disabled={isSending}
            autoComplete="given-name"
          />
          <FormField
            label="Apellidos"
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
          label="Correo electrónico"
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
          label="Mensaje"
          type="textarea"
          name="mensaje"
          value={fields.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.mensaje}
          disabled={isSending}
        />
        {status === "ok" && <div className="contact__success">¡Mensaje enviado correctamente!</div>}
        {status === "fail" && (
          <div className="form-error contact__error__global">
            Hubo un error enviando tu mensaje. Intenta más tarde.
          </div>
        )}
        <button
          className="contact__btn"
          type="submit"
          disabled={isSending}
          aria-busy={isSending}
        >
          {isSending ? "Enviando..." : "Enviar"}
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