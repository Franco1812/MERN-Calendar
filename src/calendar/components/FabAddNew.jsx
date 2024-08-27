import { useCalendarStore, useUiStore } from "../../hooks"
import { addHours } from "date-fns";

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { SetActiveEvent } = useCalendarStore();
    const handleClickView = () => {
        SetActiveEvent({
            title: "",
            notes: "",
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: "#fafafa",
            user: {
                _id: "123",
                name: "franco",
            },
        });
        openDateModal();
    }
    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickView}
        >
            <i className="fas fa-plus"></i>
        </button>
    )

}