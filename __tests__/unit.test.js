// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('510      -510-510-766-9055 is phone number', () => {
    expect(functions.isPhoneNumber('810      -640-290-306-5855')).toBe(true);
});

test('640-306-5855 is phone number', () => {
    expect(functions.isPhoneNumber('640-306-5855')).toBe(true);
});

test('640-306-585 is not phone number', () => {
    expect(functions.isPhoneNumber('640-306-585')).toBe(false);
});

test('532.640.5342 not phone number', () => {
    expect(functions.isPhoneNumber('532.640.5342')).toBe(false);
});

test('tei2053jokw@gmail.com is email', () => {
    expect(functions.isEmail('tei2053jokw@gmail.com')).toBe(true);
});

test('tei2053jokw@geeemailllll.co is email', () => {
    expect(functions.isEmail('tei2053jokw@geeemailllll.co')).toBe(true);
});

test('tei.2053jokw@geeemailllll.com is not email', () => {
    expect(functions.isEmail('tei.2053jokw@geeemailllll.com')).toBe(false);
});

test('tei.2053jokw@geeemailllll.comm is not email', () => {
    expect(functions.isEmail('tei.2053jokw@geeemailllll.commm')).toBe(false);
});

test('cse110rocks is strong password', () => {
    expect(functions.isStrongPassword('cse110rocks')).toBe(true);
});

test('cSeRoCkScSe_110 is strong password', () => {
    expect(functions.isStrongPassword('cSeRoCkScSe_110')).toBe(true);
});

test('c is not strong password', () => {
    expect(functions.isStrongPassword('c')).toBe(false);
});

test('c\s\e\r\o\c\k\s is not strong password', () => {
    expect(functions.isStrongPassword('c\s\e\r\o\c\k\s')).toBe(false);
});


test('10/10/2001 is date', () => {
    expect(functions.isDate('10/10/2001')).toBe(true);
});

test('1/01/2001 is date', () => {
    expect(functions.isDate('1/01/2001')).toBe(true);
});

test('101/02/2003 is not date', () => {
    expect(functions.isDate('101/02/2003')).toBe(false);
});

test('11/02/20032 is not date', () => {
    expect(functions.isDate('11/02/20032')).toBe(false);
});

test('#AfF093 is hex color', () => {
    expect(functions.isHexColor('#AfF093')).toBe(true);
});

test('#afbbb4 is hex color', () => {
    expect(functions.isHexColor('#afbbb4')).toBe(true);
});

test('#11111 is not hex color', () => {
    expect(functions.isHexColor('#11111')).toBe(false);
});

test('#a_b10S is not hex color', () => {
    expect(functions.isHexColor('#a_b10S')).toBe(false);
});
