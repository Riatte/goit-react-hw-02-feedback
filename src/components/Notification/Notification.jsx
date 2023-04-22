import PropTypes from "prop-types";
import { NotificationStyled } from "./NotificationStyled";

export const Notification = ({ message }) => (
    <NotificationStyled>
        <p>{message}</p>
    </NotificationStyled>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};