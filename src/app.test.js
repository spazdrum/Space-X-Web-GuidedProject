import React from 'react';
import {
    render,
    fireEvent,
    wait,
    queryAllByTestId,
    waitFor
} from '@testing-library/react';
import {
    fetchMissions as mockFetchMissions
} from './api/fetchMissions';
import {
    missionsFixture
} from './components/MissionList.test';
import App from './App';
import {
    act
} from 'react-dom/test-utils';

jest.mock("./api/fetchMissions");
console.log("js: App.test.js: mockFetchMissions", mockFetchMissions)

test("App fetches and renders missions data", async () => {
    // expect(false).toBe(false);
    mockFetchMissions.mockResolvedValueOnce(missionsFixture);

    const {
        getByText,
        queryAllByTestId
    } = render( < App / > );

    const button = getByText(/get data/i);

    await waitFor(() => {
        fireEvent.click(button);
    })

    getByText(/we are fetching data/i);

    await wait();

    const missionElems = await queryAllByTestId("mission");

    expect(missionElems).toHaveLength(2);

})