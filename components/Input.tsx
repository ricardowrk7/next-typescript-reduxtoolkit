import { TextField } from "@mui/material";
type Props = {
  formik: any;
  label: string;
  name: string;
};
const Input = ({ formik, label, name }: Props) => {
  return (
    <div>
      <TextField
        id="link"
        name={name}
        label={label}
        {...formik.getFieldProps({ name })}
        variant="outlined"
        size="small"
        fullWidth
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-400 text-sm mt-1">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
