import { test, expect } from '@playwright/test';
import {FormPage} from './FormPage.ts'

test('fill form', async({page})=>{
    const formPage = new FormPage(page);
    await page.goto('https://www.sreenidhirajakrishnan.com/practice?utm_source=sp_auto_dm&fbclid=PAVERFWATJ5BRwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpxDAZxYinOc_z655FL1M74JjmR1pREnmUS3O8MNtkj1psC4_7Ra4cO0d-XR2_aem_b72Xxnfse_gWZrm8r4AKVA');
    await formPage.fillForm('sreeni','1234','sreeni@example.com','1234567890','I am a software engineer.');
});