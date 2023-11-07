import './style.css'

const ItemDetail = ({ ItemSelected }) => {
  return (
    <div>
      <h6 className="card-title">{ItemSelected?.title}</h6>
      <img src={ItemSelected?.image} alt={ItemSelected?.title} width={70} />
      <div className="card-description">
<p>{ItemSelected?.description}</p>
      </div>

      <p>${ItemSelected?.price}</p>
    </div>
  );
};

export default ItemDetail;
