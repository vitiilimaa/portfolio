import React from "react";

interface TextInputProps {
  id: string;
  title: string;
  type?: string;
  value: string;
  containerStyle?: string;
  onChangeValue: (newValue: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  title,
  type,
  value,
  containerStyle,
  onChangeValue,
}) => {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newValue = e.target.value;
    onChangeValue(newValue);
  }

  return (
    <div className={`${containerStyle} form-floating`}>
      {type?.toUpperCase() === "MEMO" ? (
        <textarea
          className="form-control"
          placeholder={title}
          name={id}
          id={id}
          value={value}
          onChange={(e) => handleChange(e)}
          cols={30}
          rows={10}
          style={{ height: 200, resize: "none" }}
          autoComplete="off"
        />
      ) : (
        <input
          className="form-control"
          placeholder={title}
          name={id}
          id={id}
          type={type ? type : "text"}
          value={value}
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      )}
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default TextInput;
