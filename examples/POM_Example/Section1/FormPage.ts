import {expect, Locator, Page} from '@playwright/test';

export class FormPage {
    page: Page;
    username: Locator;
    password: Locator;
    email: Locator;
    phone: Locator;
    tellUsAboutYourself: Locator;
    submitButton: Locator;
    resetButton: Locator;
    constructor(page:Page) {
        this.page= page;
        this.username = this.page.locator('//input[@name="username"]');
        this.password = this.page.locator('//input[@name="password"]');
        this.email = this.page.locator('//input[@name="email"]');
        this.phone = this.page.locator('//input[@name="phone"]');
        this.tellUsAboutYourself = this.page.locator('//textarea[@placeholder="Tell us about yourself"]');
        this.submitButton = this.page.locator('//button[@type="submit"]');
        this.resetButton = this.page.locator('//button[@type="reset"]');
    }

    async fillForm(username: string, password: string, email: string, phone: string, tellUsAboutYourself: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.tellUsAboutYourself.fill(tellUsAboutYourself);
    }
}