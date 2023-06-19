import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .details {
    --border-color: var(--sl-panel-border-color);
    --border-radius: var(--sl-panel-border-radius);
    --border-width: var(--sl-panel-border-width);
    --background: var(--sl-panel-background-color);
    --header-background: transparent;
    --header-padding: var(--sl-spacing-medium);
    --content-background: transparent;
    --content-padding: var(--sl-spacing-medium);
    --open-icon-rotation: 90deg;
    --rtl-open-icon-rotation: -90deg;

    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
    background: var(--background);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    background: var(--header-background);
    padding: var(--header-padding);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: var(--open-icon-rotation);
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: var(--rtl-open-icon-rotation);
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    background: var(--content-background);
    padding: var(--content-padding);
  }
`;
