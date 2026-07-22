import {Page, Locator, expect} from '@playwright/test';
export class DropdownPage {
    page: Page;
    dropdown: Locator;
    optionRed: Locator;
    optionGreen: Locator;
    optionBlue: Locator;
    selectedResult: Locator;
    constructor(page: Page) {
        this.page = page;
        this.dropdown = this.page.locator('//select[@name="standard-select"]');
        this.optionRed = this.page.locator('//option[@value="red"]');
        this.optionGreen = this.page.locator('//option[@value="green"]');
        this.optionBlue = this.page.locator('//option[@value="blue"]');
        this.selectedResult = this.page.locator("//p[@data-testid='standard-select-result']");
    }
    async selectRedOption() {
        await this.dropdown.selectOption('red');
        await this.selectedResult.waitFor({state: 'visible', timeout: 3000});
        await expect(this.selectedResult).toContainText('Selected: red');
    }
    async selectGreenOption() {
        await this.dropdown.selectOption('green');
        await this.selectedResult.waitFor({state: 'visible', timeout: 3000});
        await expect(this.selectedResult).toContainText('Selected: green');
    }
    async selectBlueOption() {
        await this.dropdown.selectOption('blue');
        await this.selectedResult.waitFor({state: 'visible', timeout: 3000});
        await expect(this.selectedResult).toContainText('Selected: blue');
    }
}