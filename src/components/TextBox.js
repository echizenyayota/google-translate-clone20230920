import SelectDropDown from "./SelectDropDown";

const TextBox = ({ selectedLanguage, style, setShowModal }) => {
  return (
    <div className={style}>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
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
