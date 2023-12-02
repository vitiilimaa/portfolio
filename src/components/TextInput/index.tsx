import React from "react";

interface TextInputProps {
  id: string;
  title: string;
  type?: string;
  value: string;
  onChangeValue: (newValue: string) => void;
  isValidate?: boolean | null;
  errorMessage?: string;
  addClassToContainer?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  title,
  type,
  value,
  onChangeValue,
  isValidate,
  errorMessage,
  addClassToContainer = "",
}) => {
  return (
    <div className={`form-floating ${addClassToContainer}`}>
      {type?.toUpperCase() === "MEMO" ? (
        <>
          <textarea
            className={`form-control ${
              isValidate === false ? "is-invalid" : ""
            }`}
            placeholder={title}
            name={id}
            id={id}
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            cols={30}
            rows={10}
            style={{ height: 200, resize: "none" }}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errorMessage}</div>
        </>
      ) : (
        <>
          <input
            className={`form-control ${
              isValidate === false ? "is-invalid" : ""
            }`}
            placeholder={title}
            name={id}
            id={id}
            type={type ? type : "text"}
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errorMessage}</div>
        </>
      )}
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default TextInput;
