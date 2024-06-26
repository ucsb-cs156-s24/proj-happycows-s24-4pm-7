import { render, screen } from "@testing-library/react";
import AdminSuspendUserPage from "main/pages/AdminSuspendUserPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";


describe("AdminSuspendUserPage tests", () => {

    const axiosMock = new AxiosMockAdapter(axios);


    const setupAdminUser = () => {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.adminUser);
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
    };

    const queryClient = new QueryClient();
    test("Renders expected content", () => {
        // arrange

        setupAdminUser();

        // act
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <AdminSuspendUserPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        // assert
        expect(screen.getByText("Suspend User page not yet implemented")).toBeInTheDocument();
    });

});