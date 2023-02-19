import React, { useState } from "react";
import styles from "./Labs.module.css";
import uploadIcon from "../../assets/upload.svg";
import { getGeneratedImageToImage } from "../../services/service";

const Labs = () => {
  const [prompt, setPrompt] = useState("");
  const [imageResults, setImageResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [image, setImage] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('image', image);
      console.log('prompt', prompt);
      
      const formData = new FormData();
      formData.append('image', image);
      formData.append('text', prompt);
      const result = await getGeneratedImageToImage(formData)
      console.log('result', result);


    } catch (error) {
      console.log('ERRRRORRR', error);
    }
  };

  return (
    <section className={`${styles.Labs} section`}>
      <h2 className="section__title">
        Transforma tus <i>dibujitos</i> a <i>✨obras de arte✨.</i>
      </h2>

      <form className={`${styles.Labs__input}`} onSubmit={handleSubmit}>
        <label htmlFor="input-prompt">
          Comienza con una descripción detallada:
        </label>
        <div className={styles.GroupInput}>
          <input
            id="input-prompt"
            type="text"
            value={prompt}
            placeholder="Escribe como quieres que sea la imagen generada"
            onChange={({ target }) => setPrompt(target.value)}
          />
          <label htmlFor="image-prompt" className={styles.IconUpload}>
            <img src={uploadIcon} alt="" />
          </label>
          <input 
            type="file" 
            name="image-prompt" 
            id="image-prompt"
            onChange={({target}) => setImage(target.files[0])} />
        </div>
        <button>Generar</button>
      </form>
    </section>
  );
};

export { Labs };
