import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";
import AnnouncementForm from "main/components/Announcement/AnnouncementForm";
import { Navigate } from 'react-router-dom'
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
const AdminCreateAnnouncementsPage = () => {
  
    const { commonsId } = useParams();


    const objectToAxiosPutParams = (announcement) => ({
        url: "/api/announcements/post",
        method: "POST",
        params: {
            commonsId: announcement.commonsId,
            startDate: announcement.startDate,
            endDate: announcement.endDate,
            announcementText: announcement.announcementText
        }
    });

    const onSuccess = (announcement) => {
        toast(`Announcement created - id: ${announcement.id}`);
    }

    const mutation = useBackendMutation(
        objectToAxiosPutParams,
        { onSuccess },
        // Stryker disable next-line all : hard to set up test for caching
        [`/api/announcementa/all`]
    );

    const { isSuccess } = mutation

    const onSubmit = async (data) => {
        mutation.mutate({ ...data, commonsId });
    }

    if (isSuccess) {
        return <Navigate to="/admin/announcements/${commonsId}" />
    }

    return (
        <BasicLayout>
        <div className="pt-2">
            <h1>Create  Announcement</h1>
            <AnnouncementForm submitAction={onSubmit}/>
        </div>
        </BasicLayout>
    )
}
export default AdminCreateAnnouncementsPage;