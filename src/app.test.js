import React from 'react';
import { render } from '@testing-library/react';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';

jest.mock("./api/fetchMissions");
console.log("js: App.test.js: mockFetchMissions", mockFetchMissions)

test("App fetches and renders missions data", () => {
    // expect(false).toBe(false);
})