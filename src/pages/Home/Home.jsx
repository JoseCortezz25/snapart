import React, { useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { getGeneratedImage } from "../../services/service";
import styles from "./Home.module.css";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError({ status: false, message: "" });
      if (!(prompt.split(" ").length >= 1)) {
        return setError({
          status: true,
          message: "Debes ingresar una petición mayor a 10 palabras.",
        });
      }

      setLoading(true);
      const result = await getGeneratedImage(prompt);
      setLoading(false);
      setImages(result.data.image);
    } catch (error) {
      setError({
        status: true,
        message:
          "Ha ocurrido un error. Revisa que tu petición no incumpla las normas.",
      });
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.Home} section`}>
      <form className={`${styles.Home__input}`} onSubmit={handleSubmit}>
        <label htmlFor="input-prompt">
          Comienza con una descripción detallada:
        </label>
        <input
          id="input-prompt"
          type="text"
          value={prompt}
          onChange={({ target }) => setPrompt(target.value)}
        />
        <button>Generar</button>
      </form>

      {error.status && (
        <div className={`${styles.Error}`}>
          <p>{error.message}</p>
        </div>
      )}

      <div className={styles.Home__results}>
        {!loading ? (
          <div className={styles.Image__result}>
            {!!(images.length > 0) && (
              <img
                src={images}
                alt="Imagen generada por inteligencia artificial"
              />
            )}
          </div>
        ) : (
          <div className={styles.Home__loader}>
            <Loader />
            <p>Generando imagen...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export { Home };
