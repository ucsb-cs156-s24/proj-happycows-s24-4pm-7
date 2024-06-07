import React from "react";
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import AnnouncementTable from 'main/components/Announcement/AnnouncementTable';
import { useBackend } from 'main/utils/useBackend';
import { useCurrentUser } from "main/utils/currentUser";
import { useParams } from "react-router-dom";

export default function AdminListAnnouncementsPage()
{
    const { commonsId } = useParams();
    const { data: currentUser} = useCurrentUser();

    // Stryker disable all
    const { data: announcements, error: _error, status: _status } = useBackend(
        [`/api/announcements/all?commonsId=${commonsId}`],
        { method: "GET", url: `/api/announcements/all`, params: { commonsId } },
        []
    );
    // Stryker restore all

    

    return (
        <BasicLayout>
            <div className="pt-2">
                <h2>Announcements for Commons {commonsId}</h2>
                <AnnouncementTable announcements={announcements} currentUser={currentUser} />
            </div>
        </BasicLayout>
  );
};