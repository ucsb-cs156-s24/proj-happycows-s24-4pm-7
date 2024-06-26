import { render, screen } from "@testing-library/react";
import CommonsList from "main/components/Commons/CommonsList"; 
import commonsFixtures from "fixtures/commonsFixtures"; 

describe("CommonsList tests", () => {
    test("renders without crashing when button text is set", () => {
        render(
            <CommonsList commonList = {commonsFixtures.threeCommons} buttonText = {"Join"} title="Join A New Commons"/>
        );

        const title = screen.getByTestId("commonsList-title");
        expect(title).toBeInTheDocument();
        expect(typeof(title.textContent)).toBe('string');
        expect(title.textContent).toEqual('Join A New Commons');

        const subtitle_name = screen.getByTestId("commonsList-subtitle-name");
        expect(subtitle_name).toBeInTheDocument();
        expect(typeof(subtitle_name.textContent)).toBe('string');
        expect(subtitle_name.textContent).toEqual("Common's Name");

        const buttons = screen.getAllByTestId(/commonsCard-button/);
        buttons.forEach((b) => {
            expect(b).toBeInTheDocument();
            expect(typeof(b.textContent)).toBe('string');
            expect(b.textContent).toEqual('Join');
        });

        let i = 0;
        const names = screen.getAllByTestId(/commonsCard-name/);
        names.forEach((n) => {
            expect(n).toBeInTheDocument();
            expect(typeof(n.textContent)).toBe('string');
            expect(n.textContent).toEqual(commonsFixtures.threeCommons[i].name);
            i++;
        })
    });

    test("renders no button when button text is null", () => {
        render(
            <CommonsList commonList = {commonsFixtures.threeCommons} buttonText = {null} />
        );

        const title = screen.getByTestId("commonsList-title");
        expect(title).toBeInTheDocument();
        expect(typeof(title.textContent)).toBe('string');
        expect(title.textContent).toEqual('');

        const subtitle_name = screen.getByTestId("commonsList-subtitle-name");
        expect(subtitle_name).toBeInTheDocument();
        expect(typeof(subtitle_name.textContent)).toBe('string');
        expect(subtitle_name.textContent).toEqual("Common's Name");

        expect(() => screen.getAllByTestId(/commonsCard-button/)).toThrow('Unable to find an element');

        let i = 0;
        const names = screen.getAllByTestId(/commonsCard-name/);
        names.forEach((n) => {
            expect(n).toBeInTheDocument();
            expect(typeof(n.textContent)).toBe('string');
            expect(n.textContent).toEqual(commonsFixtures.threeCommons[i].name);
            i++;
        })
    });

    test("renders default join UI when there are no commons", () => {
        render(
            <CommonsList commonList={[]} buttonText = {"Join"} title="Join A New Commons"/>
        );

        const title = screen.getByTestId("commonsList-title");
        expect(title).toBeInTheDocument();
        expect(typeof(title.textContent)).toBe('string');
        expect(title.textContent).toEqual('Join A New Commons');

        const subtitle_name = screen.getByTestId("commonsList-default-message");
        expect(subtitle_name).toBeInTheDocument();
        expect(typeof(subtitle_name.textContent)).toBe('string');
        expect(subtitle_name.textContent).toEqual("There are currently no commons to join");
        expect(subtitle_name).toHaveStyle("justify-content: center;");

        expect(() => screen.getByTestId("commonsList-subtitle-name")).toThrow('Unable to find an element');
    });

    test("renders default visit UI when there are no commons", () => {
        render(
            <CommonsList commonList={[]} buttonText = {"Visit"} title="Visit A Commons"/>
        );

        const background = screen.getByTestId("commonsList-background");
        expect(background).toBeInTheDocument();

        const title = screen.getByTestId("commonsList-title");
        expect(title).toBeInTheDocument();
        expect(typeof(title.textContent)).toBe('string');
        expect(title.textContent).toEqual('Visit A Commons');

        const subtitle_name = screen.getByTestId("commonsList-default-message");
        expect(subtitle_name).toBeInTheDocument();
        expect(typeof(subtitle_name.textContent)).toBe('string');
        expect(subtitle_name.textContent).toEqual("There are currently no commons to visit");
        expect(subtitle_name).toHaveStyle("justify-content: center;")

        expect(() => screen.getByTestId("commonsList-subtitle-name")).toThrow('Unable to find an element');
    });
});