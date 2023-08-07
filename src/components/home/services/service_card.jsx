import ReactDOM from "react-dom";
function ServiceCard(props) {
  return (
    <div class="news-card">
      <a href="#" class="news-card__card-link"></a>
      <img src={props.URL} alt="" class="news-card__image" />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{props.servicename}</h2>
        <div class="news-card__post-date">STL</div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">{props.servicedescription}&hellip;</p>
          <a href="#" class="news-card__read-more">
            Read more <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
