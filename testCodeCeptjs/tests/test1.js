Feature('Auth and Date Checker');

Scenario('✅ Kiểm tra ngày hợp lệ (29/02/2024 - năm nhuận)', async ({ I }) => {
    I.amOnPage('file://' + process.cwd() + '/index.html');
    I.fillField('#day', '29');
    I.fillField('#month', '2');
    I.fillField('#year', '2024');
    I.click('Check Date');
    I.see('✅ Valid Date');
    I.wait(2);
});

Scenario(
    '✅ Kiểm tra ngày hợp lệ (31/12/2023 - ngày cuối năm)',
    async ({ I }) => {
        I.amOnPage('file://' + process.cwd() + '/index.html');
        I.fillField('#day', '31');
        I.fillField('#month', '12');
        I.fillField('#year', '2023');
        I.click('Check Date');
        I.see('✅ Valid Date');
        I.wait(2);
    }
);

Scenario(
    '✅ Kiểm tra ngày hợp lệ (30/06/2022 - tháng có 30 ngày)',
    async ({ I }) => {
        I.amOnPage('file://' + process.cwd() + '/index.html');
        I.fillField('#day', '30');
        I.fillField('#month', '6');
        I.fillField('#year', '2022');
        I.click('Check Date');
        I.see('✅ Valid Date');
        I.wait(2);
    }
);

Scenario(
    '✅ Kiểm tra ngày hợp lệ (01/01/2025 - ngày đầu năm)',
    async ({ I }) => {
        I.amOnPage('file://' + process.cwd() + '/index.html');
        I.fillField('#day', '1');
        I.fillField('#month', '1');
        I.fillField('#year', '2025');
        I.click('Check Date');
        I.see('✅ Valid Date');
        I.wait(2);
    }
);

Scenario(
    '✅ Kiểm tra ngày hợp lệ (15/08/2024 - ngày bình thường)',
    async ({ I }) => {
        I.amOnPage('file://' + process.cwd() + '/index.html');
        I.fillField('#day', '15');
        I.fillField('#month', '8');
        I.fillField('#year', '2024');
        I.click('Check Date');
        I.see('✅ Valid Date');
        I.wait(2);
    }
);

Scenario(
    '❌ Nhập ngày không hợp lệ (32/01/2024 - quá số ngày tháng 1)',
    async ({ I }) => {
        I.amOnPage('file://' + process.cwd() + '/index.html');
        I.fillField('#day', '32');
        I.fillField('#month', '1');
        I.fillField('#year', '2024');
        I.click('Check Date');
        I.see('❌ Invalid Date');
        I.wait(2);
    }
);

Scenario(
    '❌ Nhập tháng không hợp lệ (12/13/2023 - tháng vượt quá 12)',
    async ({ I }) => {
        I.amOnPage('file://' + process.cwd() + '/index.html');
        I.fillField('#day', '12');
        I.fillField('#month', '13');
        I.fillField('#year', '2023');
        I.click('Check Date');
        I.see('❌ Invalid Date');
        I.wait(2);
    }
);

Scenario('❌ Nhập năm âm (-2023 - năm không hợp lệ)', async ({ I }) => {
    I.amOnPage('file://' + process.cwd() + '/index.html');
    I.fillField('#day', '10');
    I.fillField('#month', '5');
    I.fillField('#year', '-2023');
    I.click('Check Date');
    I.see('❌ Invalid Date');
    I.wait(2);
});

Scenario(
    '❌ Kiểm tra ngày 29/02 vào năm không nhuận (29/02/2023 - lỗi)',
    async ({ I }) => {
        I.amOnPage('file://' + process.cwd() + '/index.html');
        I.fillField('#day', '29');
        I.fillField('#month', '2');
        I.fillField('#year', '2023');
        I.click('Check Date');
        I.see('❌ Invalid Date');
        I.wait(2);
    }
);

Scenario('❌ Không nhập dữ liệu và kiểm tra thông báo lỗi', async ({ I }) => {
    I.amOnPage('file://' + process.cwd() + '/index.html');
    I.click('Check Date');
    I.see('❌ Please enter a valid date');
    I.wait(2);
});
