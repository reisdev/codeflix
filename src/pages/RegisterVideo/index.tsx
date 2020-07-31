import React, { useState, useCallback } from "react";
import PageWrapper from "../../components/PageWrapper";

import Form from "../../components/Form";
import Field from "../../components/Form/Field";
import Select from "../../components/Form/Select";
import data from "../../static/data.json";
import { Button } from "./style";

const options = data.categories.map((category) => ({
  label: category.name,
  value: category.name,
}));

const RegisterVideo: React.FC = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(options[0].value.toLowerCase());
  
  const addVideo = useCallback(
    (e) => {
      e.preventDefault();
      const payload = {
        title,
        link,
        description,
        category: category.toLowerCase(),
      };
      console.log(payload);
    },
    [title, link, description, category]
  );

  return (
    <PageWrapper>
      <Form onSubmit={addVideo}>
        <Field
          name="title"
          type="text"
          label="Título do Vídeo"
          value={title}
          onChange={setTitle}
        />
        <Field
          name="link"
          type="url"
          value={link}
          label="Link do Vídeo"
          onChange={setLink}
        />
        <Select
          name="category"
          options={options}
          label={"Categoria"}
          value={category}
          onSelect={setCategory}
        />
        <Field
          name="description"
          type="textarea"
          value={description}
          label="Descrição"
          onChange={setDescription}
        />
        <Button>Salvar</Button>
      </Form>
    </PageWrapper>
  );
};

export default RegisterVideo;
