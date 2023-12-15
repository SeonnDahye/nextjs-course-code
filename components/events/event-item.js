import Button from "../ui/button";
import S from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={S.item}>
      <img src={"/" + image} alt={title}></img>
      <div className={S.content}>
        <div className={S.summary}>
          <h2>{title}</h2>
          <div className={S.date}>
            <DateIcon></DateIcon>
            <time>{humanReadableDate}</time>
          </div>
          <div className={S.address}>
            <AddressIcon></AddressIcon>
            <address>Address</address>{" "}
          </div>
        </div>
        <div className={S.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={S.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
