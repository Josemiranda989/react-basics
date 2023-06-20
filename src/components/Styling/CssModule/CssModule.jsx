import card from "./card.module.css"
export const CssModule = () => {
  return (
    <div className={card.cardM}>
      <div className={card.cardHeader}>
        <h1>CSS Module</h1>
      </div>
      <div className={card.cardBody}>
        <p>Agregamos estilos por clases archivo card.module.css</p>
      </div>
      <div className={card.cardFooter}>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}
