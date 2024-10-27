// src/components/organisms/MenuDetailsForm.js
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";

const MenuDetailsForm = () => (
  <div>
    <InputField label="Menu ID" value="56320ee9-6af6-11ed-87ae-f220af5e5a49" disabled />
    <InputField label="Depth" value="3" disabled />
    <InputField label="Parent Data" value="Systems" disabled />
    <InputField label="Name" value="System Code" />
    <Button variant="primary" onClick={() => { console.log('click') }}>Save</Button>
  </div>
);

export default MenuDetailsForm;
