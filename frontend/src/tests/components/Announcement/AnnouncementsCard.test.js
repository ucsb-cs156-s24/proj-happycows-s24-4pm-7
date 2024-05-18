import { render, screen } from "@testing-library/react";
import { announcementFixtures } from "fixtures/announcementFixtures";
import AnnouncementCard from "main/components/Announcement/AnnouncementCard";

const curr = new Date();

describe("AnnouncementCard tests", () => {
    test("renders without crashing", async () => {
        render(
            <AnnouncementCard announcement={announcementFixtures.threeAnnouncements[1]}/>
        );

        const textElement = screen.getByText("This is a test announcement for commons id 1. This one doesn't have an end date.");
        expect(textElement).toBeInTheDocument();
    });

    test("cannot show announcement with future start date - future year", async () => {
        const futureYearAnnouncement = {
            ...announcementFixtures.threeAnnouncements[0],
            startDate: `${curr.getFullYear() + 1}-01-01T00:00:00`
        };

        render(
            <AnnouncementCard announcement={futureYearAnnouncement}/>
        );

        const textElement = screen.queryByText(futureYearAnnouncement.announcementText);
        expect(textElement).toBeNull();
    });

    test("cannot show announcement with future start date - future month", async () => {
        const futureMonthAnnouncement = {
            ...announcementFixtures.threeAnnouncements[0],
            startDate: new Date(curr.getFullYear(), curr.getMonth() + 1, curr.getDate()).toISOString().substring(0, 10)
        };

        render(
            <AnnouncementCard announcement={futureMonthAnnouncement}/>
        );

        const textElement = screen.queryByText(futureMonthAnnouncement.announcementText);
        expect(textElement).toBeNull();
    });

    test("can show announcement with past date - past month", async () => {
        const pastMonthAnnouncement = {
            ...announcementFixtures.threeAnnouncements[1],
            startDate: new Date(curr.getFullYear(), curr.getMonth() - 1, curr.getDate()).toISOString().substring(0, 10)
        };

        render(
            <AnnouncementCard announcement={pastMonthAnnouncement}/>
        );

        const textElement = screen.getByText("This is a test announcement for commons id 1. This one doesn't have an end date.");
        expect(textElement).toBeInTheDocument();
    });

    test("cannot show announcement with future start date - future day", async () => {
        const futureDayAnnouncement = {
            ...announcementFixtures.threeAnnouncements[0],
            startDate: new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() + 1).toISOString().substring(0, 10)
        };

        render(
            <AnnouncementCard announcement={futureDayAnnouncement}/>
        );

        const textElement = screen.queryByText(futureDayAnnouncement.announcementText);
        expect(textElement).toBeNull();
    });

    test("can show announcement with current date", async () => {
        const currentDayAnnouncement = {
            ...announcementFixtures.threeAnnouncements[1],
            startDate: new Date(curr.getFullYear(), curr.getMonth(), curr.getDate()).toISOString().substring(0, 10)
        };

        render(
            <AnnouncementCard announcement={currentDayAnnouncement}/>
        );

        const textElement = screen.getByText("This is a test announcement for commons id 1. This one doesn't have an end date.");
        expect(textElement).toBeInTheDocument();
    });

    test("cannot show announcement with past end date - past day", async () => {
        const pastDayAnnouncement = {
            ...announcementFixtures.threeAnnouncements[0],
            startDate: new Date(curr.getFullYear() - 1, curr.getMonth(), curr.getDate()).toISOString().substring(0, 10),
            endDate: new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - 1).toISOString().substring(0, 10)
        };

        render(
            <AnnouncementCard announcement={pastDayAnnouncement}/>
        );

        const textElement = screen.queryByText(pastDayAnnouncement.announcementText);
        expect(textElement).toBeNull();
    });

    test("isFutureDate function works correctly", () => {
        const futureDate = `${curr.getFullYear() + 1}-01-01T00:00:00`;
        const pastDate = `${curr.getFullYear() - 1}-01-01T00:00:00`;

        expect(new Date(futureDate) > curr).toBe(true);
        expect(new Date(pastDate) < curr).toBe(true);
    });

    test("renders with correct data-testid", async () => {
        render(
            <AnnouncementCard announcement={announcementFixtures.threeAnnouncements[1]}/>
        );

        const testId = `announcementCard-id-${announcementFixtures.threeAnnouncements[1].announcementText}`;
        const element = screen.getByTestId(testId);
        expect(element).toBeInTheDocument();
    });
});
