

interface IInputProps{
  placeholder: string;
  type: string;
  label: string;
}

function Input({ placeholder, type, label }: IInputProps) {
    return (
      <div>
        <label htmlFor="">{label}: </label>
        <input type={type} placeholder={placeholder} />
      </div>
    );
  }
  
  export default Input;