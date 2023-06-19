import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-popover-arrow-size);
    --arrow-color: var(--sl-popover-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-popover-border-radius);
    background-color: var(--sl-popover-background-color);
    font-family: var(--sl-popover-font-family);
    font-size: var(--sl-popover-font-size);
    font-weight: var(--sl-popover-font-weight);
    line-height: var(--sl-popover-line-height);
    color: var(--sl-popover-color);
    padding: var(--sl-popover-padding);
    pointer-events: none;
  }
`;
