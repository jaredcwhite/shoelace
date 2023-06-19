import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-border);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    --label-color: var(--sl-color-neutral-text);
    --label-font-size: var(--sl-font-size-medium);
    --label-font-weight: var(--sl-font-weight-normal);
    --expand-button-color: var(--sl-color-neutral-base-faded);
    --expand-button-font-size: var(--sl-font-size-medium);
    --expand-button-width: var(--expand-button-font-size);
    --expand-button-height: var(--expand-button-font-size);
    --border-inline-start: solid 3px transparent;
    --border-inline-start-color-active: var(--sl-color-primary-base);
    --background-color-active: var(--sl-color-neutral-background);
    --open-icon-rotation: 90deg;
    --rtl-open-icon-rotation: -90deg;

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;
