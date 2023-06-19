import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --border-width: var(--sl-input-border-width);
    --border-radius-small: var(--sl-input-border-radius-small);
    --padding-small: var(--sl-spacing-x-small);
    --font-size-small: var(--sl-button-font-size-small);
    --border-radius-medium: var(--sl-input-border-radius-medium);
    --padding-medium: var(--sl-spacing-small);
    --font-size-medium: var(--sl-button-font-size-medium);
    --padding-large: var(--sl-spacing-medium);
    --font-size-large: var(--sl-button-font-size-large);
    --border-radius-large: var(--sl-input-border-radius-large);

    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid var(--border-width);
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-background);
    border-color: var(--sl-color-primary-border);
    color: var(--sl-color-primary-text);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-base);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--border-radius-small);
    padding: 0 var(--padding-small);
  }

  .tag--medium {
    font-size: var(--font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--border-radius-medium);
    padding: 0 var(--padding-medium);
  }

  .tag--large {
    font-size: var(--font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--border-radius-large);
    padding: 0 var(--padding-large);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;
