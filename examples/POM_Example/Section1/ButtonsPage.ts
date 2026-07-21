import {Page, Locator} from '@playwright/test';
export class ButtonsPage {
    page:Page;
    singleClickButton: Locator;
    doubleClickButton: Locator;
    rightClickButton: Locator;
    NoClickYetText: Locator;
    SingleClickedText: Locator;
    DoubleClickedText: Locator;
    RightClickCapturedText: Locator;
    start3sTimerButton: Locator;
    enablesIn3sButton: Locator;
    originalLabelButton: Locator;
    clickedLabelButton: Locator;
    constructor(page:Page) {
        this.page= page;
        this.singleClickButton = this.page.locator('//button[text()="Single Click"]');
        this.doubleClickButton = this.page.locator('//button[text()="Double Click"]');
        this.rightClickButton = this.page.locator('//button[text()="Right Click Me"]');
        this.NoClickYetText = this.page.locator('//p[text()="No click yet"]');
        this.SingleClickedText = this.page.locator('//p[text()="Single clicked!"]');
        this.DoubleClickedText = this.page.locator('//p[text()="Double clicked!"]');
        this.RightClickCapturedText = this.page.locator('//p[text()="Right click captured (context menu blocked)"]');
        this.start3sTimerButton = this.page.locator('//button[text()="Start 3s Timer"]');
        this.enablesIn3sButton = this.page.locator('//button[text()="Enables in 3s"]');
        this.originalLabelButton = this.page.locator('//button[text()="Original Label"]');
        this.clickedLabelButton = this.page.locator('//button[text()="Clicked Label"]');
    }

    async clickSingleClickButton() {
        await this.singleClickButton.click();
        await this.SingleClickedText.isVisible();
    }

    async clickDoubleClickButton() {
        await this.doubleClickButton.dblclick();
        await this.DoubleClickedText.isVisible();
    }

    async clickRightClickButton() {
        await this.rightClickButton.click({button: 'right'});
        await this.RightClickCapturedText.isVisible();
    }

    async clickStart3sTimerButton() {
        await this.start3sTimerButton.click();
        await this.enablesIn3sButton.waitFor({state: 'visible', timeout: 3000});
        await this.enablesIn3sButton.isEnabled();
    }

    async clickEnablesIn3sButton() {
        await this.enablesIn3sButton.click();
    }

    async clickOriginalLabelButton() {
        await this.originalLabelButton.click();
        await this.clickedLabelButton.waitFor({state: 'visible', timeout: 3000});
    }

    async clickClickedLabelButton() {
        await this.clickedLabelButton.click();
        await this.originalLabelButton.waitFor({state: 'visible', timeout: 3000});
    }
}
