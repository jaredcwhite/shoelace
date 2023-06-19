import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --font-size: var(--sl-font-size-small);
    --icon-size: var(--sl-font-size-large);
    --color: var(--sl-color-neutral-text);
    --background: var(--sl-panel-background-color);
    --border-color: var(--sl-panel-border-color);
    --border-radius: var(--sl-panel-border-radius);
    --border-width: var(--sl-panel-border-width);
    --thick-border-multiplier: 3;
    --padding: var(--sl-panel-spacing);

    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--background);
    border: solid var(--border-width) var(--border-color);
    border-top-width: calc(var(--border-width) * var(--thick-border-multiplier));
    border-radius: var(--border-radius);
    font-family: var(--sl-font-sans);
    font-size: var(--font-size);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--color);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--icon-size);
    padding-inline-start: var(--padding);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-base);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--padding);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: calc(var(--padding) * 0.8);
  }
`;
