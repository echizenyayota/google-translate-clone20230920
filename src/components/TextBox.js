import SelectDropDown from "./SelectDropDown";

const TextBox = ({ selectedLanguage, style }) => {
  return (
    <div className={style}>
      <SelectDropDown 
        selectedLanguage={selectedLanguage}
      />
      <textarea 
        placeholder={style === "input" ? "Enter text" : "Translation" }
        disabled={style === "output"}
      />
    </div>
  )
}

export default TextBox
