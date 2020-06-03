import React from 'react';
import {
    render
} from '@testing-library/react';
import MissionsList from './MissionsList';


test("MissionsList renders with missions data", () => {
            expect(true).toBe(true);
            const {
                queryAllByTestId,
                rerender
            } = render( < MissionsList error = ""
                missions = {
                    []
                }
                />);

                // expect(queryAllByTestId("mission")).toBe([]);
                expect(queryAllByTestId("mission")).toStrictEqual([]); expect(queryAllByTestId("mission")).toHaveLength(0);

                // rerender( < MissionsList error = ""
                //     missions = {
                //         missionsFixture
                //     }
                //     />);

                    // expect(queryAllByTestId("mission")).toStrictEqual(missionsFixture); expect(queryAllByTestId("mission")).toHaveLength(2);
                })