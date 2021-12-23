import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

const NewItemForm = ({ setDrinks, drinks }) => {
  const h = useHistory();
  const [formData, setFormData] = useState({
    select: "",
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
      id: formData.name.toLowerCase().split(" ").join("-"),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    h.push(`/${formData.select}s`);
  };

  const addItem = (formData) => {
    formData.select === "snack"
      ? SnackOrBoozeApi.newSnack(formData)
      : SnackOrBoozeApi.newDrink(formData);
    setDrinks([...drinks, formData]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1> Add a new Item to the Menu!</h1>
      <FormGroup>
        <Input
          type='select'
          name='select'
          id='itemSelect'
          value={formData.select}
          onChange={handleChange}>
          <option>Select type</option>
          <option>drink</option>
          <option>snack</option>
        </Input>
        <Label for='name'></Label>
        <Input
          type='text'
          name='name'
          id='name'
          onChange={handleChange}
          value={formData.name}
          placeholder='Name'
        />
        <Label for='description'></Label>
        <Input
          type='text'
          name='description'
          id='itemDesc'
          onChange={handleChange}
          value={formData.description}
          placeholder='Description'
        />
        <Label for='recipe'></Label>
        <Input
          type='text'
          name='recipe'
          id='itemRecipe'
          onChange={handleChange}
          value={formData.recipe}
          placeholder='Recipe'
        />
        <Label for='serve'></Label>
        <Input
          type='text'
          name='serve'
          id='itemServe'
          onChange={handleChange}
          value={formData.serve}
          placeholder='Serve'
        />
      </FormGroup>
      <Button>Add Item</Button>
    </Form>
  );
};

export default NewItemForm;
