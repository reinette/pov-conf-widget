import React from 'react';
import logo from '../assets/logo.png';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

function Widget({ element }) {
  return (
    <div className="Widget pov-conf-widget">
      <h1 className="is-size-4 pb-2">
        <FormattedMessage id="widget.welcome-msg" defaultMessage="Hiya!" />
      </h1>
      <p className="is-size-6 pb-2">
        <FormattedMessage
          id="widget.welcome-paragraph"
          defaultMessage="This is a template for creating widgets."
        />
      </p>
      <p className="is-size-7 pb-4">
        <FormattedMessage
          id="widget.details-paragraph"
          defaultMessage="This widget has a button with configurable text. This text can be passed from Drupal into the widget. It also comes with some CSS, JS, and media."
        />
      </p>
      <p className="is-size-6 pb-4">
        <button className="button is-primary">{element.getAttribute('data-button-text')}</button>
      </p>
      <p>
        <img src={logo} alt="Logo" width="48" height="*" />
      </p>
    </div>
  );
}

Widget.propTypes = {
  element: PropTypes.instanceOf(Element),
};

export default Widget;
