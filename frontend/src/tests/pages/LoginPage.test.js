import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

import LoginPage, { LoginCard } from "main/pages/LoginPage";
import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";

describe("LoginPage tests", () => {
    const queryClient = new QueryClient();
    const axiosMock = new AxiosMockAdapter(axios);

    beforeEach(() => {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
    });

    test("renders without crashing when lists return empty list", () => {
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.userOnly);
        axiosMock.onGet("/api/commons/all").reply(200, []);
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const title = screen.getByTestId("loginPage-cardTitle");
        expect(title).toBeInTheDocument();
        expect(typeof (title.textContent)).toBe('string');
        expect(title.textContent).toEqual('Welcome to Happy Cows!');
    });

    test("renders html elements", () => {
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.userOnly);
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

    });

    test("when oauthlogin undefined, login card default value is used", async () =>  {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.oauthLoginUndefined);

       render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <LoginCard />
                </MemoryRouter>
            </QueryClientProvider>
        );

        await screen.findByText("Log In");
        expect(screen.getByText("Log In")).toHaveAttribute("href", "/oauth2/authorization/google");
    });
});
